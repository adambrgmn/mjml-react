import { RenderOptions, render as renderMjml } from './render';

export { screen } from '@testing-library/dom';

export function render(element: React.ReactElement, options: RenderOptions = {}) {
  let { html, errors } = renderMjml(element, options);

  let head = html.split('<head>')[1].split('</head>')[0];
  let body = html.split(/<body.+>/)[1].split('</body>')[0];

  document.head.innerHTML = head;
  document.body.innerHTML = body;

  return { html, errors } as const;
}
