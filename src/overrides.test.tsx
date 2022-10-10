import React from 'react';
import { describe, expect, it } from 'vitest';

import { MjAttributes, MjBody, MjColumn, MjHead, MjHtmlAttributes, MjSection, MjText } from './components';
import { MjAll, MjClass, MjHtmlAttribute, MjRaw, MjSelector, MjStyle, css } from './overrides';
import { Mjml } from './render';
import { render, screen } from './test-utils';

describe('MjRaw', () => {
  it('fails when rendered inside another ending tag', () => {
    expect(() => {
      render(
        <Mjml>
          <MjBody>
            <MjSection>
              <MjColumn>
                <MjText>
                  <MjRaw>Hello</MjRaw>
                </MjText>
              </MjColumn>
            </MjSection>
          </MjBody>
        </Mjml>,
      );
    }).toThrowError(
      /Rendering any mjml component inside another mjml component which is an ending tag is not supported/,
    );
  });
});

describe('MjAll', () => {
  it('applies props to all elements', () => {
    render(
      <Mjml>
        <MjHead>
          <MjAttributes>
            <MjAll fontFamily="Arial" fontSize="8px" color="red" />
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

    expect(screen.getByText('Hello World!')).toHaveStyle({
      fontFamily: 'Arial',
      fontSize: '8px',
      color: 'red',
    });
  });
});

describe('MjClass', () => {
  it('works as mj-class is expected to work', () => {
    render(
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

    expect(screen.getByText('Hello World!')).toHaveStyle({ color: 'blue', fontSize: '20px' });
  });
});

describe('MjStyle', () => {
  it('works as mj-style is expected to work', () => {
    let color = 'blue';
    render(
      <Mjml>
        <MjHead>
          <MjStyle
            css={css`
              .link {
                color: ${color};
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

    expect(screen.getByText('Hello World!').parentElement).toHaveClass('link');
    expect(screen.getByText('Hello World!').parentElement).toHaveStyle({ color: 'blue' });
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

    expect(html).not.toContain('.link');
    expect(screen.getByText('Hello World!').parentElement).toHaveStyle({ color: 'blue' });
  });
});

describe('MjHtmlAttributes', () => {
  it('handles mjml html attributes elements correctly', () => {
    render(
      <Mjml>
        <MjHead>
          <MjHtmlAttributes>
            <MjSelector path=".custom div">
              <MjHtmlAttribute name="data-id">42</MjHtmlAttribute>
            </MjSelector>
          </MjHtmlAttributes>
        </MjHead>
        <MjBody>
          <MjSection>
            <MjColumn>
              <MjText className="custom">Hello World!</MjText>
            </MjColumn>
          </MjSection>
        </MjBody>
      </Mjml>,
    );

    expect(screen.getByText('Hello World!')).toHaveAttribute('data-id', '42');
  });
});
