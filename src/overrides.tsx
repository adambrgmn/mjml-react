/**
 * This file is for special case components that need some special handlng in the react context.
 */
import { handleMjmlProps } from './create-component';
import { MjmlComponent } from './types';

/**
 * Inside mj-attributes, a tag citing one MJML component (like mj-text; see example) overrides
 * default settings for listed MJML attributes on the one component.
 *
 * An `mj-all` is like the above, but affects all MJML components via the one tag.
 */
export const MjAll: MjmlComponent<Record<string, string>> = (props) => {
  let attributes = handleMjmlProps(props);

  // @ts-expect-error
  return <mj-all {...attributes} />;
};

export type MjStyleProps = {
  /** set to "inline" to inline styles */
  inline?: 'inline';
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
  return <mj-style inline={inline} dangerouslySetInnerHTML={{ __html: css }} />;
};

export function css(strings: TemplateStringsArray, ...values: string[]) {
  let str = '';
  for (let i = 0; i < strings.length; i++) {
    str += strings[i];
    if (i < values.length) str += values[i];
  }

  return str;
}
