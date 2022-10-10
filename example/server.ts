import { IncomingMessage } from 'http';
import micro from 'micro';
import { createElement } from 'react';

import { render } from '../dist';
import { Austin } from './Austin';
import { HappyNewYear } from './HappyNewYear';
import { Receipt } from './Receipt';

const baseUrl = new URL('http://localhost:3000');
const templates = {
  receipt: createElement(Receipt),
  'happy-new-year': createElement(HappyNewYear),
  austin: createElement(Austin),
} as const;

const server = micro(async (req, res) => {
  let template = ensureTemplate(params(req).get('template'), 'austin');
  let { html } = render(templates[template]);

  res.setHeader('Content-Type', 'text/html');
  return html;
});

// @ts-expect-error
server.listen(Number(baseUrl.port), () => {
  console.log(`Server listening on ${baseUrl.toString()}`);

  let urls = Object.keys(templates)
    .map((key) => {
      baseUrl.searchParams.set('template', key);
      return '  → ' + baseUrl.toString();
    })
    .join('\n');

  console.log(`Available templates:`);
  console.log(urls);
});

type Template = keyof typeof templates;
function ensureTemplate(value: unknown, fallback: Template): Template {
  if (typeof value === 'string' && Object.keys(templates).includes(value)) {
    return value as Template;
  }

  return fallback;
}

function params(req: IncomingMessage) {
  let url = new URL(req.url ?? '/', `http://${req.headers.host}`);
  return url.searchParams;
}
