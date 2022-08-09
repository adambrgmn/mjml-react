import React from 'react';
import { it, expect } from 'vitest';
import { render, Mjml } from './render';
import { MjHead, MjBody, MjSection, MjColumn, MjText } from './components';

it('renders mjml formatted emails from react components', () => {
  let { html } = render(
    <Mjml>
      <MjHead></MjHead>
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
      <MjHead></MjHead>
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
        <MjHead />
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
      <MjHead />
      <MjBody>
        <MjText>Hello world!</MjText>
      </MjBody>
    </Mjml>,
    { validationLevel: 'soft' },
  );

  expect(errors).toEqual([
    {
      line: 1,
      message:
        'mj-text cannot be used inside mj-body, only inside: mj-attributes, mj-column, mj-hero',
      tagName: 'mj-text',
      formattedMessage:
        'Line 1 of /Users/adam.bergman/Developer/adambrgmn/mjml-react (mj-text) — mj-text cannot be used inside mj-body, only inside: mj-attributes, mj-column, mj-hero',
    },
  ]);
});

it('is possible to ignore validation altogether', () => {
  let { errors } = render(
    <Mjml>
      <MjHead />
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
      <MjHead></MjHead>
      <MjBody>
        <MjSection>
          <MjColumn>
            <MjText className="custom_text">Hello world!</MjText>
          </MjColumn>
        </MjSection>
      </MjBody>
    </Mjml>,
  );

  expect(html).toMatchSnapshot();
});
