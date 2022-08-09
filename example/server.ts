import micro, { send } from 'micro';
import { createElement } from 'react';

import { render } from '../dist';
import { Receipt } from './receipt';

const templates = {
  receipt: createElement(Receipt),
};

const server = micro(async (_, res) => {
  let { html } = render(templates.receipt);
  res.setHeader('Content-Type', 'text/html');
  send(res, 200, html);
});

// @ts-expect-error
server.listen(3000, () => console.log('Server listening on http://localhost:3000'));
