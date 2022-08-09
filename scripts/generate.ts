import * as fs from 'node:fs';

import _ from 'lodash';
import 'mjml';
import { components as mjmlComponents } from 'mjml-core';

import { PropsDocumentation, generatePropsDocumentation } from './generate-docs';

(async () => {
  let sections: string[] = [];

  let baseDeclarations = `
import React from 'react';

export type MjUnit<Suffix extends string> = \`\${number}\${Suffix}\`;

export type MjmlBaseProps = {
  /** class name, added to the root HTML element created */
  className?: string;
  /** class name, added to the root HTML element created */
  'css-class'?: string
  children?: React.ReactNode;
}

export type MjmlComponent<Props> = React.FC<Props & MjmlBaseProps>;

function createComponent<Props>(Name: string): MjmlComponent<Props> {
  const Component: MjmlComponent<Props> = ({ className, 'css-class': cssClass, children, ...rest }) => {
    return (
      // ${'@ts-expect-error'}
      <Name {...rest} css-class={cssClass ?? className}>
        {children}
      </Name>
    );
  };
  Component.displayName = Name;

  return Component;
}
`;

  sections.push(baseDeclarations);

  let docs = await generatePropsDocumentation();

  for (let [name, component] of Object.entries(mjmlComponents)) {
    if (component == null) continue;

    let props = buildProps((component as unknown as any).allowedAttributes ?? {}, docs[name]?.props ?? {});
    let componentName = _.upperFirst(_.camelCase(name));

    let def = `
export type ${componentName}Props = ${props};

/**
 * ${(docs[name]?.description ?? '').split('\n').join('\n * ')}
 *
 * @link https://documentation.mjml.io/#${name}
 */
export let ${componentName} = createComponent<${componentName}Props>('${name}');
  `.trim();

    sections.push(def);
  }

  fs.writeFileSync('./src/components.tsx', sections.join('\n\n'));
})();

function buildProps(attributes: Record<string, string>, docs: PropsDocumentation[string]['props']) {
  let rows: string[] = [];

  for (let [key, type] of Object.entries(attributes)) {
    let [rawType] = type.split('(');

    if (key in docs) {
      rows.push(`/** ${docs[key].description} */`);
    }

    switch (rawType) {
      case 'boolean':
        rows.push(`'${key}'?: boolean;`);
        break;
      case 'integer':
        rows.push(`'${key}'?: number;`);
        break;
      case 'string':
      case 'color':
        rows.push(`'${key}'?: string;`);
        break;
      case 'enum': {
        let values = type
          .split('(')[1]
          .split(')')[0]
          .split(',')
          .map((v) => `'${v.trim()}'`)
          .join(' | ');

        rows.push(`'${key}'?: ${values};`);
        break;
      }
      case 'unitWithNegative':
      case 'unit': {
        let units = type
          .split('(')[1]
          .split(')')[0]
          .split(',')
          .map((u) => `'${u.trim()}'`)
          .join(' | ');
        rows.push(`'${key}'?: MjUnit<${units}>;`);
        break;
      }
      default:
        console.error(`Attribute type "${type}" is not supported`);
    }
  }

  return '{\n  ' + rows.join('\n  ') + '\n}';
}
