import * as fs from 'node:fs';

import 'mjml';
import { components as mjmlComponents } from 'mjml-core';
import prettier from 'prettier';

import { camelCase, studlyCaps } from '../src/strings';
import { PropsDocumentation, generateComponentDocumentation } from './generate-docs';

// These components require special treatment and are overridden in src/overrides.tsx
const ignored = ['mj-class', 'mj-all', 'mj-style', 'mj-raw'];

/**
 * These special props are just confusing when used a react context. Therefore they need some
 * special treatment. The actual special case handling is done in `handleMjmlProps` in
 * [`/src/create-component.tsx`](../src/create-component.tsx)
 */
const specialProps: Record<string, string> = {
  'full-width': `fullWidth?: boolean;`,
};

let sections: string[] = [];

let imports = `
import { createComponent } from './create-component';
import { MjUnit } from './types';
`.trim();

sections.push(imports);

for (let [name, component] of Object.entries(mjmlComponents)) {
  if (ignored.includes(name)) continue;

  if (component == null) continue;

  let docs = generateComponentDocumentation(name);

  let props = buildProps((component as unknown as any).allowedAttributes ?? {}, docs?.props ?? {});
  let componentName = studlyCaps(name);
  let endingTag = (component as unknown as any).endingTag ?? false;

  let comments = [
    (docs?.description ?? '').split('\n').join('\n * '),
    `This component is${endingTag ? '' : ' not'} an [ending tag](https://documentation.mjml.io/#ending-tags).`,
    `@link https://documentation.mjml.io/#${name}`,
  ].filter((c) => c.length > 0);

  let def = `
export type ${componentName}Props = ${props};

/**
 * ${comments.join('\n * \n * ')}
 */
export let ${componentName} = createComponent<${componentName}Props>('${name}', ${endingTag ? 'true' : 'false'});
  `.trim();

  sections.push(def);
}

let prettierConfig = JSON.parse(fs.readFileSync('./.prettierrc', 'utf-8'));
let code = prettier.format(sections.join('\n\n'), { parser: 'typescript', ...prettierConfig });
fs.writeFileSync('./src/components.tsx', code);

function buildProps(attributes: Record<string, string>, docs: PropsDocumentation[string]['props']) {
  let rows: string[] = [];

  for (let [key, type] of Object.entries(attributes)) {
    if (key in docs) {
      rows.push(`/** ${docs[key].description} */`);
    }

    if (key in specialProps) {
      rows.push(specialProps[key]);
      continue;
    }

    let [rawType] = type.split('(');
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
