import React from 'react';
import { expect, it } from 'vitest';

import { MjBody, MjHead } from './components';
import { MjComment, MjConditionalTag } from './extensions';
import { Mjml, render } from './render';

it('is possible to render with conditionals', () => {
  let { html } = render(
    <Mjml>
      <MjHead></MjHead>
      <MjBody>
        <MjConditionalTag>Hello world!</MjConditionalTag>
      </MjBody>
    </Mjml>,
  );

  expect(html).toMatchSnapshot();
});

it('is possible to render html comments', () => {
  let { html } = render(
    <Mjml>
      <MjHead></MjHead>
      <MjBody>
        <MjComment>Hello world!</MjComment>
      </MjBody>
    </Mjml>,
  );

  expect(html).toMatchSnapshot();
});
