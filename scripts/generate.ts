import * as fs from 'node:fs';

import _ from 'lodash';
import 'mjml';
import { components as mjmlComponents } from 'mjml-core';

import { PropsDocumentation, generatePropsDocumentation } from './generate-docs';

(async () => {
  let sections: string[] = [];

  let baseDeclarations = `
import React from 'react';
import _ from 'lodash';

type MjUnitBase<Suffix extends string> = \`\${number}\${Suffix}\` | '0';
export type MjUnit<Suffix extends string> =
  | \`\${MjUnitBase<Suffix>}\`
  | \`\${MjUnitBase<Suffix>} \${MjUnitBase<Suffix>}\`
  | \`\${MjUnitBase<Suffix>} \${MjUnitBase<Suffix>} \${MjUnitBase<Suffix>}\`
  | \`\${MjUnitBase<Suffix>} \${MjUnitBase<Suffix>} \${MjUnitBase<Suffix>} \${MjUnitBase<Suffix>}\`

export type MjmlBaseProps = {
  /** class name, added to the root HTML element created */
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string
  children?: React.ReactNode;
}

export type MjmlComponent<Props> = React.FC<Props & MjmlBaseProps>;

type KebabCase<T extends string, A extends string = ""> =
    T extends \`\${infer F}\${infer R}\` ?
    KebabCase<R, \`\${A}\${F extends Lowercase<F> ? "" : "-"}\${Lowercase<F>}\`> :
    A

type KebabCaseKeys<T> = { [K in keyof T as K extends string ? KebabCase<K> : K]: T[K] };

function handleMjmlProps<T extends Record<string, unknown>>(props: T): KebabCaseKeys<T> {
  let converted: Record<string, unknown> = {};
  for (let [key, value] of Object.entries(props)) {
    converted[_.kebabCase(key)] = value;
  }
  return converted as KebabCaseKeys<T>;
}

function createComponent<Props extends Record<string, unknown>>(Name: string): MjmlComponent<Props> {
  const Component: MjmlComponent<Props> = ({ className, cssClass, children, ...rest }) => {
    let props = handleMjmlProps(rest);
    return (
      // ${'@ts-expect-error'}
      <Name {...props} css-class={cssClass ?? className}>
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
        rows.push(`'${_.camelCase(key)}'?: boolean;`);
        break;
      case 'integer':
        rows.push(`'${_.camelCase(key)}'?: number;`);
        break;
      case 'string':
      case 'color':
        rows.push(`'${_.camelCase(key)}'?: string;`);
        break;
      case 'enum': {
        let values = type
          .split('(')[1]
          .split(')')[0]
          .split(',')
          .map((v) => `'${v.trim()}'`)
          .join(' | ');

        rows.push(`'${_.camelCase(key)}'?: ${values};`);
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
        rows.push(`'${_.camelCase(key)}'?: MjUnit<${units}>;`);
        break;
      }
      default:
        console.error(`Attribute type "${type}" is not supported`);
    }
  }

  return '{\n  ' + rows.join('\n  ') + '\n}';
}
