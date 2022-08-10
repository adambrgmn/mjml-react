/* eslint-disable testing-library/render-result-naming-convention */
import prettier from 'prettier';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';

import { MjBody, MjColumn, MjSection, MjText } from './components';
import * as Hbs from './handlebars';
import { Mjml } from './render';
import { render, screen } from './test-utils';

it('can render handlebars statements without breaking semantics', () => {
  let { html } = render(
    <Mjml>
      <MjBody>
        <MjSection>
          <MjColumn>
            <Hbs.If condition="user.name" else={<MjText>Hello stranger!</MjText>}>
              <MjText>Hello {'{{ user.name }}'}!</MjText>
            </Hbs.If>
          </MjColumn>
        </MjSection>
      </MjBody>
    </Mjml>,
  );

  expect(html).toMatchSnapshot();
});

it('can render handlebar statements inside "ending tags" without breaking semantics', () => {
  render(
    <Mjml>
      <MjBody>
        <MjSection>
          <MjColumn>
            <MjText className="test_container">
              <Hbs.If condition="user.name" inline>
                <span>Hello {'{{ user.name }}'}!</span>
              </Hbs.If>
            </MjText>
          </MjColumn>
        </MjSection>
      </MjBody>
    </Mjml>,
  );

  expect(screen.getByText('Hello {{ user.name }}!').parentElement).toMatchInlineSnapshot(`
    <div
      style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
    >
      {{ #if user.name }}
      <span>
        Hello {{ user.name }}!
      </span>
      {{ /if }}
    </div>
  `);
});

it('provides else/else if possibilities', () => {
  render(
    <Mjml>
      <MjBody>
        <MjSection>
          <MjColumn>
            <MjText className="test_container">
              <Hbs.If condition="user.name" inline>
                <span>Hello {'{{ user.name }}'}!</span>
                <Hbs.ElseIf condition="user.age" inline>
                  <span>You are {'{{ user.age }}'} years old!</span>
                </Hbs.ElseIf>
                <Hbs.ElseIf condition="user.length">
                  <span>You are {'{{ user.length }}'} cm long!</span>
                </Hbs.ElseIf>
                <Hbs.Else inline>
                  <span>You are not a human!</span>
                </Hbs.Else>
              </Hbs.If>
            </MjText>
          </MjColumn>
        </MjSection>
      </MjBody>
    </Mjml>,
  );

  expect(screen.getByText('Hello {{ user.name }}!').parentElement).toMatchInlineSnapshot(`
    <div
      style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;"
    >
      {{ #if user.name }}
      <span>
        Hello {{ user.name }}!
      </span>
      {{ else if user.age }}
      <span>
        You are {{ user.age }} years old!
      </span>
      <mj-raw>
        {{ else if user.length }}
      </mj-raw>
      <span>
        You are {{ user.length }} cm long!
      </span>
      {{ else }}
      <span>
        You are not a human!
      </span>
      {{ /if }}
    </div>
  `);
});

it('provides multiple different conditionals', () => {
  let html = renderToStaticMarkup(
    <Mjml>
      <Hbs.Unless left="foo" right="bar">
        This is true
      </Hbs.Unless>
      <Hbs.GreaterThan left="foo" right="bar">
        This is true
      </Hbs.GreaterThan>
      <Hbs.LessThan left="foo" right="bar">
        This is true
      </Hbs.LessThan>
      <Hbs.Equals left="foo" right="bar">
        This is true
      </Hbs.Equals>
      <Hbs.NotEquals left="foo" right="bar">
        This is true
      </Hbs.NotEquals>
      <Hbs.And left="foo" right="bar" inline>
        This is true
      </Hbs.And>
      <Hbs.Or left="foo" right="bar" else="This is false">
        This is true
      </Hbs.Or>
    </Mjml>,
  );

  expect(prettier.format(html, { parser: 'html', htmlWhitespaceSensitivity: 'ignore' })).toMatchInlineSnapshot(`
    "<mjml>
      <mj-raw>{{ #unless foo bar }}</mj-raw>
      This is true
      <mj-raw>{{ /unless }}</mj-raw>
      <mj-raw>{{ #greaterThan foo bar }}</mj-raw>
      This is true
      <mj-raw>{{ /greaterThan }}</mj-raw>
      <mj-raw>{{ #lessThan foo bar }}</mj-raw>
      This is true
      <mj-raw>{{ /lessThan }}</mj-raw>
      <mj-raw>{{ #equals foo bar }}</mj-raw>
      This is true
      <mj-raw>{{ /equals }}</mj-raw>
      <mj-raw>{{ #notEquals foo bar }}</mj-raw>
      This is true
      <mj-raw>{{ /notEquals }}</mj-raw>
      {{ #and foo bar }}This is true{{ /and }}
      <mj-raw>{{ #or foo bar }}</mj-raw>
      This is true
      <mj-raw>{{ else }}</mj-raw>
      This is false
      <mj-raw>{{ /or }}</mj-raw>
    </mjml>
    "
  `);
});

it('is possible to render an each block', () => {
  let html = renderToStaticMarkup(
    <Mjml>
      <Hbs.Each subject="users">
        <MjText>{'{{ this.name }}'}</MjText>
      </Hbs.Each>
      <Hbs.Each subject="users" inline>
        <span>{'{{ this.name }}'}</span>
      </Hbs.Each>
    </Mjml>,
  );

  expect(prettier.format(html, { parser: 'html', htmlWhitespaceSensitivity: 'ignore' })).toMatchInlineSnapshot(`
    "<mjml>
      <mj-raw>{{ #each users }}</mj-raw>
      <mj-text>{{ this.name }}</mj-text>
      <mj-raw>{{ /each }}</mj-raw>
      {{ #each users }}
      <span>{{ this.name }}</span>
      {{ /each }}
    </mjml>
    "
  `);
});
