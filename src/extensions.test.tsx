import React from 'react';
import { it, expect } from 'vitest';
import { render, Mjml } from './render';
import { MjHead, MjBody } from './components';
import { MjConditionalTag, MjComment } from './extensions';

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
