import mjml from 'mjml';
import { MJMLParsingOptions } from 'mjml-core';
import { renderToStaticMarkup } from 'react-dom/server';

export type RenderOptions = Omit<
  MJMLParsingOptions,
  | 'keepComments'
  | 'beautify'
  | 'minify'
  | 'minifyOptions'
  | 'filePath'
  | 'juicePreserveTags'
  | 'juiceOptions'
  | 'skeleton'
  | 'actualPath'
  | 'ignoreIncludes'
  | 'preprocessors'
  | 'mjmlConfigPath'
  | 'useMjmlConfigOptions'
>;

export function render(element: React.ReactElement, options: RenderOptions = {}) {
  let markup = renderToStaticMarkup(element);
  let { html, errors } = mjml(markup, {
    validationLevel: 'strict',
    ...options,

    useMjmlConfigOptions: false,
    mjmlConfigPath: undefined,
  });

  return { html, errors };
}

type MjmlProps = {
  /** if set to "desktop", switch force desktop version for older (self-hosted) version of Outlook.com that doesn't support media queries */
  owa?: string;
  /** used as <html lang=""> attribute */
  lang?: string;
  /** used as <html dir=""> attribute */
  dir?: string;
  children: React.ReactNode;
};

/**
 * A MJML document starts with a <mjml> tag, it can contain only mj-head and mj-body tags.
 * Both have the same purpose of head and body in a HTML document.
 *
 * @link https://documentation.mjml.io/#mjml
 */
export const Mjml = 'mjml' as unknown as React.FC<MjmlProps>;
