import * as fs from 'node:fs';

import { camelCase, upperFirst } from 'lodash-es';
import 'mjml';
import { components as mjmlComponents } from 'mjml-core';
import prettier from 'prettier';

import { PropsDocumentation, generatePropsDocumentation } from './generate-docs';

(async () => {
  let sections: string[] = [];

  let imports = `
import { createComponent } from './create-component';
import { MjUnit } from './types';
`.trim();

  sections.push(imports);

  let docs = await generatePropsDocumentation();

  for (let [name, component] of Object.entries(mjmlComponents)) {
    if (component == null) continue;

    let props = buildProps((component as unknown as any).allowedAttributes ?? {}, docs[name]?.props ?? {});
    let componentName = upperFirst(camelCase(name));

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

  let prettierConfig = JSON.parse(fs.readFileSync('./.prettierrc', 'utf-8'));
  let code = prettier.format(sections.join('\n\n'), { parser: 'typescript', ...prettierConfig });
  fs.writeFileSync('./src/components.tsx', code);
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
        rows.push(`'${camelCase(key)}'?: boolean;`);
        break;
      case 'integer':
        rows.push(`'${camelCase(key)}'?: number;`);
        break;
      case 'string':
      case 'color':
        rows.push(`'${camelCase(key)}'?: string;`);
        break;
      case 'enum': {
        let values = type
          .split('(')[1]
          .split(')')[0]
          .split(',')
          .map((v) => `'${v.trim()}'`)
          .join(' | ');

        rows.push(`'${camelCase(key)}'?: ${values};`);
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
        rows.push(`'${camelCase(key)}'?: MjUnit<${units}>;`);
        break;
      }
      default:
        console.error(`Attribute type "${type}" is not supported`);
    }
  }

  return '{\n  ' + rows.join('\n  ') + '\n}';
}
