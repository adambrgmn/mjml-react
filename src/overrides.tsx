/**
 * This file is for special case components that need some special handling in the react context.
 */
import React from 'react';

import { MjmlComponentWrapper, handleMjmlProps } from './create-component';
import { MjmlComponent } from './types';

/**
 * Displays raw HTML that is not going to be parsed by the MJML engine. Anything left inside this tag
 * should be raw, responsive HTML. If placed inside `<mj-head>`, its content will be added at the end
 * of the `<head>`.
 *
 * If you use mj-raw to add templating language, and use the minify option, you might get a Parsing
 * error, especially when using the < character. You can tell the minifier to ignore some content
 * by wrapping it between two <!-- htmlmin:ignore --> tags.
 *
 * @link https://documentation.mjml.io/#mj-raw
 */
export const MjRaw: MjmlComponent<{}> = ({ children }) => {
  return (
    <MjmlComponentWrapper name="mj-raw" endingTag={true}>
      {/*
      // @ts-expect-error */}
      <mj-raw>{children}</mj-raw>
    </MjmlComponentWrapper>
  );
};

/**
 * Inside mj-attributes, a tag citing one MJML component (like mj-text; see example) overrides
 * default settings for listed MJML attributes on the one component.
 *
 * An `mj-all` is like the above, but affects all MJML components via the one tag.
 *
 * @link https://documentation.mjml.io/#mj-attributes
 */
export const MjAll: MjmlComponent<Record<string, string>> = (props) => {
  let attributes = handleMjmlProps(props);

  return (
    <MjmlComponentWrapper name="mj-all" endingTag={true}>
      {/*
      // @ts-expect-error */}
      <mj-all {...attributes} />
    </MjmlComponentWrapper>
  );
};

/**
 * mj-class tags create a named group of MJML attributes you can apply to MJML components.
 * To apply them, use mj-class="<name>"
 *
 * @link https://documentation.mjml.io/#mj-attributes
 */
export const MjClass: MjmlComponent<Record<string, string>> = ({ children, ...props }) => {
  let attributes = handleMjmlProps(props);

  return (
    <MjmlComponentWrapper name="mj-class" endingTag={true}>
      {/*
      // @ts-expect-error */}
      <mj-class {...attributes} />
    </MjmlComponentWrapper>
  );
};

export type MjStyleProps = {
  /** set to "inline" to inline styles */
  inline?: boolean;
  /**
   * The style that will be inserted into the head of the document.
   *
   * If you want to you can use the `css` utility exported from this module to get syntax highligting for your css
   * in most modern editors.
   *
   * @example
   * ```tsx
   * import { MjStyle, css } from 'mjml-react';
   *
   * <MjStyle css={css`
   *   .link {
   *     color: blue;
   *   }
   * `} />;
   * ```
   */
  css: string;
};

/**
 * This tag allows you to set CSS styles that will be applied to the HTML in your MJML document as
 * well as the HTML outputted. The CSS styles will be added to the head of the rendered HTML by
 * default, but can also be inlined by using the inline="inline" attribute.
 *
 * @link https://documentation.mjml.io/#mj-style
 */
export const MjStyle: MjmlComponent<MjStyleProps> = ({ inline, css }) => {
  return (
    <MjmlComponentWrapper name="mj-style" endingTag={true}>
      {/*
      // @ts-expect-error */}
      <mj-style inline={inline ? 'inline' : undefined} dangerouslySetInnerHTML={{ __html: css }} />
    </MjmlComponentWrapper>
  );
};

export function css(strings: TemplateStringsArray, ...values: string[]) {
  let str = '';
  for (let i = 0; i < strings.length; i++) {
    str += strings[i];
    if (i < values.length) str += values[i];
  }

  return str;
}

export type MjSelectorProps = {
  /**
   * In the generated html, a mj-text becomes a td, and a div inside this td. In this example, the
   * td will have the class="custom". Using the css selector path=".custom div", the div inside the
   * td will get the attribute data-id="42".
   */
  path: string;
  children: React.ReactNode;
};

/**
 * @link https://documentation.mjml.io/#mj-html-attributes
 */
export const MjSelector: MjmlComponent<MjSelectorProps> = ({ path, children }) => {
  return (
    <MjmlComponentWrapper name="mj-selector" endingTag={false}>
      {/*
      // @ts-expect-error */}
      <mj-selector path={path}>{children}</mj-selector>;
    </MjmlComponentWrapper>
  );
};

export type MjHtmlAttributeProps = {
  name: string;
  children: string;
};

/**
 * @link https://documentation.mjml.io/#mj-html-attributes
 */
export const MjHtmlAttribute: MjmlComponent<MjHtmlAttributeProps> = ({ name, children }) => {
  return (
    <MjmlComponentWrapper name="mj-html-attribute" endingTag={true}>
      {/*
      // @ts-expect-error */}
      <mj-html-attribute name={name}>{children}</mj-html-attribute>;
    </MjmlComponentWrapper>
  );
};
