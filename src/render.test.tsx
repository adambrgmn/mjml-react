import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';

import { MjBody, MjColumn, MjSection, MjText } from './components';
import { MjRaw } from './overrides';
import { Mjml } from './render';
import { render, screen } from './test-utils';

it('renders mjml formatted emails from react components', () => {
  let { html } = render(
    <Mjml>
      <MjBody>
        <MjSection>
          <MjColumn>
            <MjText>Hello world!</MjText>
          </MjColumn>
        </MjSection>
      </MjBody>
    </Mjml>,
  );

  expect(html).toMatchSnapshot();
});

it('is possible to pass in custom font imports', () => {
  let { html } = render(
    <Mjml>
      <MjBody>
        <MjSection>
          <MjColumn>
            <MjText font-family="Custom Font">Hello world!</MjText>
          </MjColumn>
        </MjSection>
      </MjBody>
    </Mjml>,
    { fonts: { 'Custom Font': 'https://url-to-font.com/font.woff' } },
  );

  expect(html).toContain('@import url(https://url-to-font.com/font.woff);');
});

it('throws ValidationError if mjml validation fails', () => {
  expect(() =>
    render(
      <Mjml>
        <MjBody>
          <MjText>Hello world!</MjText>
        </MjBody>
      </Mjml>,
    ),
  ).toThrow('ValidationError:');
});

it('is possible to supress throwing on validation errors', () => {
  let { errors } = render(
    <Mjml>
      <MjBody>
        <MjText>Hello world!</MjText>
      </MjBody>
    </Mjml>,
    { validationLevel: 'soft' },
  );

  expect(errors).toEqual([
    {
      line: 1,
      message: 'mj-text cannot be used inside mj-body, only inside: mj-attributes, mj-column, mj-hero',
      tagName: 'mj-text',
      formattedMessage: expect.stringContaining(
        'mj-text cannot be used inside mj-body, only inside: mj-attributes, mj-column, mj-hero',
      ),
    },
  ]);
});

it('is possible to ignore validation altogether', () => {
  let { errors } = render(
    <Mjml>
      <MjBody>
        <MjText>Hello world!</MjText>
      </MjBody>
    </Mjml>,
    { validationLevel: 'skip' },
  );

  expect(errors).toEqual([]);
});

it('applies className as css-class prop to mjml elements', () => {
  let { html } = render(
    <Mjml>
      <MjBody>
        <MjSection>
          <MjColumn>
            <MjText className="custom_text">Hello world!</MjText>
          </MjColumn>
        </MjSection>
      </MjBody>
    </Mjml>,
  );

  expect(screen.getByText('Hello world!').parentElement).toHaveClass('custom_text');

  expect(html).toMatchSnapshot();
});

it('throws an error if rendering any mj component inside another mj component ending tag', () => {
  expect(() =>
    renderToStaticMarkup(
      <MjText>
        <MjRaw>Hello</MjRaw>
      </MjText>,
    ),
  ).toThrow(/Rendering any mjml component inside another mjml component which is an ending tag is not supported/);
});
