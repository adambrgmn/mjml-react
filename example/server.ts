import micro, { send } from 'micro';
import { createElement } from 'react';

import { render } from '../dist';
import { Austin } from './austin';
import { HappyNewYear } from './happy-new-year';
import { Receipt } from './receipt';

const templates = {
  receipt: createElement(Receipt),
  'happy-new-year': createElement(HappyNewYear),
  austin: createElement(Austin),
};

const server = micro(async (req, res) => {
  let url = new URL(req.url || '/', 'http://localhost:3000');
  let choice = (url.searchParams.get('template') ?? 'receipt') as keyof typeof templates;

  let { html } = render(templates[choice] ?? templates.receipt);

  res.setHeader('Content-Type', 'text/html');
  send(res, 200, html);
});

// @ts-expect-error
server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');

  let urls = Object.keys(templates)
    .map((key) => `http://localhost:3000/?template=${key}`)
    .join('\n  → ');

  console.log(`Available templates:\n  → ${urls}`);
});
