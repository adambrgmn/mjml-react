import React from 'react';
import { describe, expect, it } from 'vitest';

import { MjAttributes, MjBody, MjColumn, MjHead, MjSection, MjText } from './components';
import { MjAll, MjClass, MjStyle, css } from './overrides';
import { Mjml, render } from './render';

describe('MjAll', () => {
  it('applies props to all elements', () => {
    let { html } = render(
      <Mjml>
        <MjHead>
          <MjAttributes>
            <MjAll font-family="Arial" fontSize="8px" color="red" />
          </MjAttributes>
        </MjHead>
        <MjBody>
          <MjSection>
            <MjColumn>
              <MjText>Hello World!</MjText>
            </MjColumn>
          </MjSection>
        </MjBody>
      </Mjml>,
    );

    expect(html).toMatchSnapshot();
  });
});

describe('MjClass', () => {
  it('works as mj-class is expected to work', () => {
    let { html } = render(
      <Mjml>
        <MjHead>
          <MjAttributes>
            <MjClass name="blue" color="blue" />
            <MjClass name="big" font-size="20px" />
          </MjAttributes>
        </MjHead>
        <MjBody>
          <MjSection>
            <MjColumn>
              <MjText mjClass="big blue">Hello World!</MjText>
            </MjColumn>
          </MjSection>
        </MjBody>
      </Mjml>,
    );

    expect(html).toMatchSnapshot();
  });
});

describe('MjStyle', () => {
  it('works as mj-style is expected to work', () => {
    let { html } = render(
      <Mjml>
        <MjHead>
          <MjStyle
            css={css`
              .link {
                color: blue;
              }
            `}
          />
        </MjHead>
        <MjBody>
          <MjSection>
            <MjColumn>
              <MjText className="link">Hello World!</MjText>
            </MjColumn>
          </MjSection>
        </MjBody>
      </Mjml>,
    );

    expect(html).toMatchSnapshot();
  });

  it('works as mj-style with inline is expected to work', () => {
    let { html } = render(
      <Mjml>
        <MjHead>
          <MjStyle
            inline
            css={css`
              .link {
                color: blue;
              }
            `}
          />
        </MjHead>
        <MjBody>
          <MjSection>
            <MjColumn>
              <MjText className="link">Hello World!</MjText>
            </MjColumn>
          </MjSection>
        </MjBody>
      </Mjml>,
    );

    expect(html).toMatchSnapshot();
  });
});
