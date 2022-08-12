/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';

import { MjBody, MjText } from './components';
import { MjComment, MjConditionalTag } from './extensions';
import { Mjml } from './render';

it('is possible to render with conditionals', () => {
  let html = renderToStaticMarkup(
    <Mjml>
      <MjBody>
        <MjConditionalTag>Hello world!</MjConditionalTag>
      </MjBody>
    </Mjml>,
  );

  expect(html).toMatchInlineSnapshot(
    '"<mjml><mj-body><mj-raw><!--[if gte mso 9]>Hello world!<![endif]--></mj-raw></mj-body></mjml>"',
  );
});

it('is possible to render html comments', () => {
  let html = renderToStaticMarkup(
    <Mjml>
      <MjBody>
        <MjComment>Hello world!</MjComment>
      </MjBody>
    </Mjml>,
  );

  expect(html).toMatchInlineSnapshot('"<mjml><mj-body><mj-raw><!--Hello world!--></mj-raw></mj-body></mjml>"');
});

it('does not work inside ending tags', () => {
  expect(() =>
    renderToStaticMarkup(
      <MjText>
        Hello World!
        <MjComment>This is a comment</MjComment>
      </MjText>,
    ),
  ).toThrowError(/Rendering a comment inside an ending tag is not supported/);
});
