import * as cheerio from 'cheerio';

export type Prop = {
  prop: string;
  unit: string;
  description: string;
  defaultValue: string;
};

export type PropsDocumentation = Record<string, { description: string; props: Record<string, Prop> }>;

export async function generatePropsDocumentation(): Promise<PropsDocumentation> {
  let response = await fetch('https://documentation.mjml.io/');
  let html = await response.text();

  let $ = cheerio.load(html);
  let content = $('div.content');

  if (!content.is('div')) throw new Error('Can not find page content');

  let headings = $('h1', content);
  let relevantHeadings = ['components', 'standard head components', 'standard body components'];

  let docs: PropsDocumentation = {};

  for (let heading of headings) {
    if (!relevantHeadings.includes($(heading).text().toLowerCase())) continue;

    let componentHeadings = $(heading)
      .nextUntil('h1')
      .filter((_, el) => el.tagName.toLowerCase() === 'h2');

    for (let componentHeading of componentHeadings) {
      let componentName = $(componentHeading).text();
      let table = $(componentHeading)
        .nextUntil('h2')
        .filter((_, el) => el.tagName.toLowerCase() === 'table')
        .first();

      let description = $(componentHeading).next('p[style!="text-align: center;"]');

      if (!table.is('table')) continue;

      docs[componentName] = {
        description: description.text().trim(),
        props: {},
      };

      let rows = $('tr', table);
      for (let row of rows) {
        let prop = $('td:nth-child(1)', row).text();
        let unit = $('td:nth-child(2)', row).text();
        let description = $('td:nth-child(3)', row).text();
        let defaultValue = $('td:nth-child(4)', row).text();
        docs[componentName].props[prop] = {
          prop,
          unit,
          description,
          defaultValue,
        };
      }
    }
  }

  return docs;
}
