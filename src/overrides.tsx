/**
 * This file is for special case components that need some special handling in the react context.
 */
import React, { useContext } from 'react';

import { handleMjmlProps } from './create-component';
import { EndingTagContext } from './ending-tag-context';
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
  let isEndingTag = useContext(EndingTagContext);
  if (isEndingTag) {
    throw new Error(
      'Rendering mj-raw inside an ending tag is not supported. See https://documentation.mjml.io/#ending-tags for information about ending tags.',
    );
  }

  return (
    <EndingTagContext.Provider value={true}>
      {/*
      // @ts-expect-error */}
      <mj-raw>{children}</mj-raw>
    </EndingTagContext.Provider>
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

  // @ts-expect-error
  return <mj-all {...attributes} />;
};

/**
 * mj-class tags create a named group of MJML attributes you can apply to MJML components.
 * To apply them, use mj-class="<name>"
 *
 * @link https://documentation.mjml.io/#mj-attributes
 */
export const MjClass: MjmlComponent<Record<string, string>> = ({ children, ...props }) => {
  // @ts-expect-error
  return <mj-class {...props} />;
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
  // @ts-expect-error
  return <mj-style inline={inline ? 'inline' : undefined} dangerouslySetInnerHTML={{ __html: css }} />;
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
  // @ts-expect-error
  return <mj-selector path={path}>{children}</mj-selector>;
};

export type MjHtmlAttributeProps = {
  name: string;
  children: string;
};

/**
 * @link https://documentation.mjml.io/#mj-html-attributes
 */
export const MjHtmlAttribute: MjmlComponent<MjHtmlAttributeProps> = ({ name, children }) => {
  // @ts-expect-error
  return <mj-html-attribute name={name}>{children}</mj-html-attribute>;
};
