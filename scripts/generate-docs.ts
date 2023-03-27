import * as fs from 'node:fs';
import * as path from 'node:path';

import * as cheerio from 'cheerio';
import { marked } from 'marked';

const OVERRIDES: Record<string, string> = {
  'mj-attributes': 'mjml-head-html-attributes',
  'mj-breakpoint': 'mjml-head-breakpoint',
  'mj-html-attributes': 'mjml-head-html-attributes',
  'mj-font': 'mjml-head-font',
  'mj-preview': 'mjml-head-preview',
  'mj-title': 'mjml-head-title',
  'mj-social-element': 'mjml-social',
  'mj-navbar-link': 'mjml-navbar',
  'mj-accordion-element': 'mjml-accordion',
  'mj-accordion-text': 'mjml-accordion',
  'mj-accordion-title': 'mjml-accordion',
  'mj-carousel-image': 'mjml-carousel',
};

export type Prop = {
  prop: string;
  unit: string;
  description: string;
  defaultValue: string;
};

export type PropsDocumentation = Record<string, { description: string; props: Record<string, Prop> }>;

export function generateComponentDocumentation(
  name: string,
): { description: string; props: Record<string, Prop> } | undefined {
  try {
    let moduleName = OVERRIDES[name] ?? name.replace(/^mj-/, 'mjml-');
    let moduleDirectory = path.dirname(require.resolve(moduleName + '/package.json'));
    let readme = fs.readFileSync(path.join(moduleDirectory, 'README.md'), 'utf-8');
    let props = extractProps(readme);

    return { description: cleanupReadme(readme), props };
  } catch (error) {
    return undefined;
  }
}

function extractProps(readme: string) {
  const html = marked.parse(readme);
  let $ = cheerio.load(html);
  let props: Record<string, Prop> = {};

  let rows = $('tr', $('table'));
  for (let row of rows) {
    let prop = $('td:nth-child(1)', row).text();
    let unit = $('td:nth-child(2)', row).text();
    let description = $('td:nth-child(3)', row).text();
    let defaultValue = $('td:nth-child(4)', row).text();
    props[prop] = {
      prop,
      unit,
      description,
      defaultValue,
    };
  }

  return props;
}

function cleanupReadme(readme: string) {
  return readme.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g, (match) => {
    let [, tagname] = match.match(/<\/?([\w-]+)/) ?? [];
    switch (tagname) {
      case 'b':
        return '**';
      case 'em':
        return '_';
      case 'aside':
      case 'p':
      case 'a':
      case 'img':
        return '';
      default:
        return match;
    }
  });
}
