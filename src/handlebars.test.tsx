/* eslint-disable testing-library/render-result-naming-convention */
import React from 'react';
import { expect, it } from 'vitest';

import { MjBody, MjColumn, MjSection, MjText } from './components';
import * as Hbs from './handlebars';
import { Mjml, render } from './render';

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
  let { html } = render(
    <Mjml>
      <MjBody>
        <MjSection>
          <MjColumn>
            <MjText>
              <Hbs.If condition="user.name" else={<span>Hello stranger</span>} inline>
                <span>Hello {'{{ user.name }}'}!</span>
              </Hbs.If>
            </MjText>
          </MjColumn>
        </MjSection>
      </MjBody>
    </Mjml>,
  );

  expect(html).toMatchSnapshot();
});
