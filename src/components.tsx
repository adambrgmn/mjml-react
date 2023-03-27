import { createComponent } from './create-component';
import { MjUnit } from './types';

export type MjBodyProps = {
  /** email's width */
  width?: MjUnit<'px'>;
  /** the general background color */
  backgroundColor?: string;
};

/**
 * ## mj-body
 *
 * This is the starting point of your email.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <!-- Your email goes here -->
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 *   mj-body replaces the couple mj-body and mj-container of MJML v3.
 *
 *
 * attribute            | unit          | description                    | default value
 * ---------------------|---------------|--------------------------------|---------------
 * background-color     | color formats | the general background color   | n/a
 * css-class            | string        | class name, added to the root HTML element created | n/a
 * width                | px            | email's width                  | 600px
 *
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-body
 */
export let MjBody = createComponent<MjBodyProps>('mj-body', false);

export type MjHeadProps = {};

/**
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-head
 */
export let MjHead = createComponent<MjHeadProps>('mj-head', false);

export type MjAttributesProps = {};

/**
 * ## mj-html-attributes
 *
 * This tag allows you to add custom attributes on any html tag of the generated html, using css selectors.
 * It's not needed for most email creations, but can be useful in some cases, i.e. editable templates.
 *
 *  ```xml
 * <mjml>
 *   <mj-head>
 *     <mj-html-attributes>
 *       <mj-selector path=".custom div">
 *         <mj-html-attribute name="data-id">42</mj-html-attribute>
 *       </mj-selector>
 *     </mj-html-attributes>
 *   </mj-head>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-text css-class="custom">
 *           Hello World!
 *         </mj-text>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 *  ```
 *
 * In the generated html, a mj-text becomes a `td`, and a `div` inside this `td`. In this example, the `td` will have the `class="custom"`. Using the css selector `path=".custom div"`, the `div` inside the `td` will get the attribute `data-id="42"`.
 *
 * To use this component, you will likely have to look at the generated html to see where exactly are the `css-class` applied, to know which css selector you need to use to add your custom attribute on the right html tag.
 *
 * You can use multiple `mj-selector` inside a `mj-html-attributes`, and multiple `mj-html-attribute` inside a `mj-selector`.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-attributes
 */
export let MjAttributes = createComponent<MjAttributesProps>('mj-attributes', false);

export type MjBreakpointProps = {
  /** breakpoint's value */
  width?: MjUnit<'px'>;
};

/**
 * ## mj-breakpoint
 * This tag allows you to control on which breakpoint the layout should go desktop/mobile.
 *
 * ```xml
 * <mjml>
 *   <mj-head>
 *     <mj-breakpoint width="320px" />
 *   </mj-head>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-text>
 *           Hello World!
 *         </mj-text>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 * attribute            | unit          | description                    | default value
 * ---------------------|---------------|--------------------------------|---------------
 * width                | px            | breakpoint's value             | n/a
 *
 *
 * This component is an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-breakpoint
 */
export let MjBreakpoint = createComponent<MjBreakpointProps>('mj-breakpoint', true);

export type MjHtmlAttributesProps = {};

/**
 * ## mj-html-attributes
 *
 * This tag allows you to add custom attributes on any html tag of the generated html, using css selectors.
 * It's not needed for most email creations, but can be useful in some cases, i.e. editable templates.
 *
 *  ```xml
 * <mjml>
 *   <mj-head>
 *     <mj-html-attributes>
 *       <mj-selector path=".custom div">
 *         <mj-html-attribute name="data-id">42</mj-html-attribute>
 *       </mj-selector>
 *     </mj-html-attributes>
 *   </mj-head>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-text css-class="custom">
 *           Hello World!
 *         </mj-text>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 *  ```
 *
 * In the generated html, a mj-text becomes a `td`, and a `div` inside this `td`. In this example, the `td` will have the `class="custom"`. Using the css selector `path=".custom div"`, the `div` inside the `td` will get the attribute `data-id="42"`.
 *
 * To use this component, you will likely have to look at the generated html to see where exactly are the `css-class` applied, to know which css selector you need to use to add your custom attribute on the right html tag.
 *
 * You can use multiple `mj-selector` inside a `mj-html-attributes`, and multiple `mj-html-attribute` inside a `mj-selector`.
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-html-attributes
 */
export let MjHtmlAttributes = createComponent<MjHtmlAttributesProps>('mj-html-attributes', false);

export type MjFontProps = {
  /** name of the font */
  name?: string;
  /** URL of a hosted CSS file */
  href?: string;
};

/**
 * ## mj-font
 *
 * This tag imports fonts.
 * The tag has effect only if the template uses the font, too.
 * The `href` attribute points to a hosted css file; that file contains a `@font-face` declaration.
 * Example: [https://fonts
 * .googleapis.com/css?family=Raleway](https://fonts.googleapis.com/css?family=Raleway)
 *
 *  ```xml
 *  <mjml>
 *    <mj-head>
 *      <mj-font name="Raleway"
 *        href="https://fonts.googleapis.com/css?family=Raleway" />
 *    </mj-head>
 *    <mj-body>
 *      <mj-section>
 *        <mj-column>
 *          <mj-text font-family="Raleway, Arial">
 *            Hello World!
 *          </mj-text>
 *        </mj-column>
 *       </mj-section>
 *    </mj-body>
 *  </mjml>
 *  ```
 *
 *
 *
 *
 *
 *
 *
 * attribute   | unit     | description                | default value
 * ------------|----------|----------------------------|---------------
 * href        | string   | URL of a hosted CSS file   | n/a
 * name        | string   | name of the font           | n/a
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-font
 */
export let MjFont = createComponent<MjFontProps>('mj-font', false);

export type MjPreviewProps = {};

/**
 * ## mj-preview
 *
 * This tag allows you to set the preview that will be displayed in the inbox of the recipient.
 *
 *  ```xml
 * <mjml>
 *   <mj-head>
 *     <mj-preview>Hello MJML</mj-preview>
 *   </mj-head>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-text>
 *           Hello World!
 *         </mj-text>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 *  ```
 *
 *
 *
 *
 *
 *
 *
 * `mj-preview` doesn't support any attribute.
 *
 *
 *
 * This component is an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-preview
 */
export let MjPreview = createComponent<MjPreviewProps>('mj-preview', true);

export type MjTitleProps = {};

/**
 * ## mj-title
 *
 * Defines the document's title that browsers show in the title bar or a page's tab.
 *
 *  ```xml
 * <mjml>
 *   <mj-head>
 *     <mj-title>Hello MJML</mj-title>
 *   </mj-head>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-text>
 *           Hello World!
 *         </mj-text>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 *  ```
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * This component is an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-title
 */
export let MjTitle = createComponent<MjTitleProps>('mj-title', true);

export type MjHeroProps = {
  /** choose if the height is fixed based on the height attribute or fluid */
  mode?: string;
  /** hero section height (required for fixed-height mode) */
  height?: MjUnit<'px' | '%'>;
  /** absolute background url */
  backgroundUrl?: string;
  /** width of the image used, mandatory */
  backgroundWidth?: MjUnit<'px' | '%'>;
  /** height of the image used, mandatory */
  backgroundHeight?: MjUnit<'px' | '%'>;
  /** background image position */
  backgroundPosition?: string;
  /** border radius */
  borderRadius?: string;
  containerBackgroundColor?: string;
  innerBackgroundColor?: string;
  innerPadding?: MjUnit<'px' | '%'>;
  innerPaddingTop?: MjUnit<'px' | '%'>;
  innerPaddingLeft?: MjUnit<'px' | '%'>;
  innerPaddingRight?: MjUnit<'px' | '%'>;
  innerPaddingBottom?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** hero background color */
  backgroundColor?: string;
  /** content vertical alignment */
  verticalAlign?: 'top' | 'bottom' | 'middle';
};

/**
 * ## mj-hero
 *
 * This element displays a hero image.
 * It behaves like an `mj-section` with a single `mj-column`.
 *
 * `background-height` and `background-width` attributes are mandatory.
 *
 * It's best to use an image with width the same as the `mj-body` width
 *   (`width="600px"` by default).
 * For better results, it's best to use an image with height the same or larger
 *   than the `height` of `mj-hero`.
 *
 * Use `background-color` to provide a fallback color
 *   in case an email client doesn't support `background-url`.
 *
 *
 *   The "height" attribute is required only for 'mode="fixed-height"'.
 *
 *
 * Fixed height
 *
 *
 *
 *
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-hero
 *       mode="fixed-height"
 *       height="469px"
 *       background-width="600px"
 *       background-height="469px"
 *       background-url=
 *           "https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg"
 *       background-color="#2a3448"
 *       padding="100px 0px">
 *       <mj-text
 *         padding="20px"
 *         color="#ffffff"
 *         font-family="Helvetica"
 *         align="center"
 *         font-size="45px"
 *         line-height="45px"
 *         font-weight="900">
 *         GO TO SPACE
 *       </mj-text>
 *       <mj-button href="https://mjml.io/" align="center">
 *         ORDER YOUR TICKET NOW
 *       </mj-button>
 *     </mj-hero>
 *   </mj-body>
 * </mjml>
 *  ```
 *
 *
 *
 *
 *
 *
 *
 * Fluid height
 *
 *
 *
 *
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-hero
 *       mode="fluid-height"
 *       background-width="600px"
 *       background-height="469px"
 *       background-url=
 *           "https://cloud.githubusercontent.com/assets/1830348/15354890/1442159a-1cf0-11e6-92b1-b861dadf1750.jpg"
 *       background-color="#2a3448"
 *       padding="100px 0px">
 *       <mj-text
 *         padding="20px"
 *         color="#ffffff"
 *         font-family="Helvetica"
 *         align="center"
 *         font-size="45px"
 *         line-height="45px"
 *         font-weight="900">
 *         GO TO SPACE
 *       </mj-text>
 *       <mj-button href="https://mjml.io/" align="center">
 *         ORDER YOUR TICKET NOW
 *       </mj-button>
 *     </mj-hero>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 * attribute           | unit                                | description                                                          | default value
 * --------------------|-------------------------------------|----------------------------------------------------------------------|--------------
 * background-color    | color                               | hero background color                                                | #ffffff
 * background-height   | px                                  | height of the image used, mandatory                                  | none
 * background-position | top/center/bottom left/center/right | background image position                                            | center center
 * background-url      | url                                 | absolute background url                                              | n/a
 * background-width    | px                                  | width of the image used, mandatory                                   | parent element width
 * border-radius       | px                                  | border radius                                                        | n/a
 * height              | px                                  | hero section height (required for fixed-height mode)                 | 0px
 * mode                | fluid-height/fixed-height           | choose if the height is fixed based on the height attribute or fluid | fluid-height
 * padding             | px                                  | supports up to 4 parameters                                          | 0px
 * padding-bottom      | px                                  | bottom offset                                                        | 0px
 * padding-left        | px                                  | left offset                                                          | 0px
 * padding-right       | px                                  | right offset                                                         | 0px
 * padding-top         | px                                  | top offset                                                           | 0px
 * vertical-align      | top/middle/bottom                   | content vertical alignment                                           | top
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-hero
 */
export let MjHero = createComponent<MjHeroProps>('mj-hero', false);

export type MjButtonProps = {
  /** horizontal alignment */
  align?: 'left' | 'center' | 'right';
  /** button background-color */
  backgroundColor?: string;
  /** css border format */
  borderBottom?: string;
  /** css border format */
  borderLeft?: string;
  /** border radius */
  borderRadius?: string;
  /** css border format */
  borderRight?: string;
  /** css border format */
  borderTop?: string;
  /** css border format */
  border?: string;
  /** text color */
  color?: string;
  /** button container background color */
  containerBackgroundColor?: string;
  /** font name */
  fontFamily?: string;
  /** text size */
  fontSize?: MjUnit<'px'>;
  /** normal/italic/oblique */
  fontStyle?: string;
  /** text thickness */
  fontWeight?: string;
  /** button height */
  height?: MjUnit<'px' | '%'>;
  /** link to be triggered when the button is clicked */
  href?: string;
  name?: string;
  /** tooltip & accessibility */
  title?: string;
  /** inner button padding */
  innerPadding?: MjUnit<'px' | '%'>;
  /** letter-spacing */
  letterSpacing?: MjUnit<'px' | 'em'>;
  /** line-height on link */
  lineHeight?: MjUnit<'px' | '%' | ''>;
  /** bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** specify the rel attribute for the button link */
  rel?: string;
  /** specify the target attribute for the button link */
  target?: string;
  /** underline/overline/none */
  textDecoration?: string;
  /** capitalize/uppercase/lowercase */
  textTransform?: string;
  /** vertical alignment */
  verticalAlign?: 'top' | 'bottom' | 'middle';
  /** text-align button content */
  textAlign?: 'left' | 'right' | 'center';
  /** button width */
  width?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-button
 *
 *
 *
 *
 *
 * Displays a customizable button.
 *
 *
 *   The `mj-button` won't be fully clickable because of client support.
 *   See discussion at
 *     Issue #359.
 *
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-button font-family="Helvetica" background-color="#f45e43" color="white">
 *           Don't click me!
 *          </mj-button>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 *   `mj-button` is an "ending tag", which means it can contain HTML code which will be left as it is, so it can contain HTML tags with attributes, but it cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 *
 * attribute                   | unit        | description                                      | default value
 * ----------------------------|-------------|--------------------------------------------------|---------------------
 * align                       | string      | horizontal alignment                             | center
 * background-color            | color       | button background-color                          | #414141
 * border                      | string      | css border format                                | none
 * border-bottom               | string      | css border format                                | n/a
 * border-left                 | string      | css border format                                | n/a
 * border-radius               | px          | border radius                                    | 3px
 * border-right                | string      | css border format                                | n/a
 * border-top                  | string      | css border format                                | n/a
 * color                       | color       | text color                                       | #ffffff
 * container-background-color  | color       | button container background color                | n/a
 * css-class                   | string      | class name, added to the root HTML element created | n/a
 * font-family                 | string      | font name                                        | Ubuntu, Helvetica, Arial, sans-serif
 * font-size                   | px          | text size                                        | 13px
 * font-style                  | string      | normal/italic/oblique                            | n/a
 * font-weight                 | number      | text thickness                                   | normal
 * height                      | px          | button height                                    | n/a
 * href                        | link        | link to be triggered when the button is clicked  | n/a
 * inner-padding               | px          | inner button padding                             | 10px 25px
 * letter-spacing              | px,em       | letter-spacing                                   | n/a
 * line-height                 | px/%/none   | line-height on link                              | 120%
 * padding                     | px          | supports up to 4 parameters                      | 10px 25px
 * padding-bottom              | px          | bottom offset                                    | n/a
 * padding-left                | px          | left offset                                      | n/a
 * padding-right               | px          | right offset                                     | n/a
 * padding-top                 | px          | top offset                                       | n/a
 * rel                         | string      | specify the rel attribute for the button link    | n/a
 * target                      | string      | specify the target attribute for the button link | \_blank
 * text-align                  | string      | text-align button content                        | none
 * text-decoration             | string      | underline/overline/none                          | none
 * text-transform              | string      | capitalize/uppercase/lowercase                   | none
 * title                       | string      | tooltip & accessibility                          | n/a
 * vertical-align              | string      | vertical alignment                               | middle
 * width                       | px          | button width                                     | n/a
 *
 *
 * This component is an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-button
 */
export let MjButton = createComponent<MjButtonProps>('mj-button', true);

export type MjColumnProps = {
  /** background color for a column */
  backgroundColor?: string;
  /** css border format */
  border?: string;
  /** css border format */
  borderBottom?: string;
  /** css border format */
  borderLeft?: string;
  /** border radius */
  borderRadius?: MjUnit<'px' | '%'>;
  /** css border format */
  borderRight?: string;
  /** css border format */
  borderTop?: string;
  direction?: 'ltr' | 'rtl';
  /** requires: a padding, inner background color for column */
  innerBackgroundColor?: string;
  /** section bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** section left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** section right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** section top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** css border format */
  innerBorder?: string;
  /** css border format ; requires a padding */
  innerBorderBottom?: string;
  /** css border format ; requires a padding */
  innerBorderLeft?: string;
  /** border radius ; requires a padding */
  innerBorderRadius?: MjUnit<'px' | '%'>;
  /** css border format ; requires a padding */
  innerBorderRight?: string;
  /** css border format ; requires a padding */
  innerBorderTop?: string;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** middle/top/bottom */
  verticalAlign?: 'top' | 'bottom' | 'middle';
  /** column width */
  width?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-column
 *
 * Columns enable you to horizontally organize the content within your sections. They must be located under `mj-section` tags in order to be considered by the engine.
 * To be responsive, columns are expressed in terms of percentage.
 *
 *
 *   The sum of columns in a section cannot be greater than
 *       the width of the parent `mj-section` (or 100%).
 *
 *
 * Every single column has to contain something because they are responsive containers, and will be vertically stacked on a mobile view. Any standard component, or component that you have defined and registered, can be placed within a column – except `mj-column` or `mj-section` elements.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <!-- Your first column -->
 *       </mj-column>
 *       <mj-column>
 *         <!-- Your second column -->
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 *   Columns are meant to be used as a container for your content. They must not be used as offset. Any mj-element included in a column will have a width equivalent to 100% of this column's width.
 *
 *
 *
 *   Columns cannot be nested into columns, and sections cannot be nested into columns as well.
 *
 *
 * attribute           | unit        | description                    | default attributes
 * --------------------|-------------|--------------------------------|--------------------------------------
 * background-color    | color       | background color for a column  | n/a
 * inner-background-color | color    | requires: a padding, inner background color for column | n/a
 * border              | string      | css border format              | none
 * border-bottom       | string      | css border format              | n/a
 * border-left         | string      | css border format              | n/a
 * border-right        | string      | css border format              | n/a
 * border-top          | string      | css border format              | n/a
 * border-radius       | percent/px  | border radius                  | n/a
 * inner-border        | string      | css border format              | n/a
 * inner-border-bottom       | string      | css border format ; requires a padding | n/a
 * inner-border-left         | string      | css border format ; requires a padding | n/a
 * inner-border-right        | string      | css border format ; requires a padding | n/a
 * inner-border-top          | string      | css border format ; requires a padding | n/a
 * inner-border-radius       | percent/px  | border radius ; requires a padding     | n/a
 * width               | percent/px  | column width                   | (100 / number of non-raw elements in section)%
 * vertical-align      | string      | middle/top/bottom              | top
 * padding             | px          | supports up to 4 parameters    | n/a
 * padding-top         | px          | section top offset             | n/a
 * padding-bottom      | px          | section bottom offset          | n/a
 * padding-left        | px          | section left offset            | n/a
 * padding-right       | px          | section right offset           | n/a
 * css-class           | string      | class name, added to the root HTML element created | n/a
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-column
 */
export let MjColumn = createComponent<MjColumnProps>('mj-column', false);

export type MjDividerProps = {
  /** divider color */
  borderColor?: string;
  /** dashed/dotted/solid */
  borderStyle?: string;
  /** divider's border width */
  borderWidth?: MjUnit<'px'>;
  /** inner element background color */
  containerBackgroundColor?: string;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** divider width */
  width?: MjUnit<'px' | '%'>;
  /** alignment */
  align?: 'left' | 'center' | 'right';
};

/**
 * ## mj-divider
 *
 * Displays a horizontal divider that can be customized like a HTML border.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-divider border-width="1px" border-style="dashed" border-color="lightgrey" />
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 * | attribute                  | unit               | description                                        | default value |
 * | -------------------------- | ------------------ | -------------------------------------------------- | ------------- |
 * | border-color               | color              | divider color                                      | #000000       |
 * | border-style               | string             | dashed/dotted/solid                                | solid         |
 * | border-width               | px                 | divider's border width                             | 4px           |
 * | container-background-color | color              | inner element background color                     | n/a           |
 * | css-class                  | string             | class name, added to the root HTML element created | n/a           |
 * | padding                    | px                 | supports up to 4 parameters                        | 10px 25px     |
 * | padding-bottom             | px                 | bottom offset                                      | n/a           |
 * | padding-left               | px                 | left offset                                        | n/a           |
 * | padding-right              | px                 | right offset                                       | n/a           |
 * | padding-top                | px                 | top offset                                         | n/a           |
 * | width                      | px/percent         | divider width                                      | 100%          |
 * | align                      | left,center, right | alignment                                          | center        |
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-divider
 */
export let MjDivider = createComponent<MjDividerProps>('mj-divider', false);

export type MjGroupProps = {
  /** background color for a group */
  backgroundColor?: string;
  /** set the display order of direct children */
  direction?: 'ltr' | 'rtl';
  /** middle/top/bottom */
  verticalAlign?: 'top' | 'bottom' | 'middle';
  /** group width */
  width?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-group
 *
 *
 *
 *   Desktop<br />
 *
 *
 *
 *
 *   Mobile<br />
 *
 *
 *
 * mj-group allows you to prevent columns from stacking on mobile. To do so, wrap the columns inside a `mj-group` tag, so they'll stay side by side on mobile.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-group>
 *         <mj-column>
 *           <mj-image width="137px" height="185px" padding="0"    src="https://mjml.io/assets/img/easy-and-quick.png" />
 *           <mj-text align="center">
 *             <h2>Easy and quick</h2>
 *             Write less code, save time and code more efficiently with MJML’s semantic syntax.
 *           </mj-text>
 *         </mj-column>
 *         <mj-column>
 *           <mj-image width="166px" height="185px" padding="0" src="https://mjml.io/assets/img/responsive.png" />
 *           <mj-text align="center">
 *             <h2>Responsive</h2>
 *             MJML is responsive by design on most-popular email clients, even Outlook.
 *           </mj-text>
 *         </mj-column>
 *       </mj-group>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *   Column inside a group must have a width in percentage, not in pixel
 *
 *
 *
 *
 *   You can have both column and group inside a Section
 *
 *
 *
 *   **iOS 9 Issue:** If you use a HTML beautifier for MJML output, iOS9 will render your columns inside a mj-group as stacked. On the output HTML, remove the **blank space** between the two columns inside a mj-group.
 *
 *
 *
 * attribute           | unit        | description                    | default attributes
 * --------------------|-------------|--------------------------------|--------------------------------------
 * width               | percent/px  | group width                    | (100 / number of non-raw elements in section)%
 * vertical-align      | string      | middle/top/bottom              | top
 * background-color    | string      | background color for a group   | n/a
 * direction           | ltr / rtl   | set the display order of direct children | ltr
 * css-class           | string      | class name, added to the root HTML element created | n/a
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-group
 */
export let MjGroup = createComponent<MjGroupProps>('mj-group', false);

export type MjImageProps = {
  /** image description */
  alt?: string;
  /** link to redirect to on click */
  href?: string;
  /** specify the link name attribute */
  name?: string;
  /** image source */
  src?: string;
  /** enables to set a different image source based on the viewport */
  srcset?: string;
  /** set width based on query */
  sizes?: string;
  /** tooltip & accessibility */
  title?: string;
  /** specify the rel attribute */
  rel?: string;
  /** image alignment */
  align?: 'left' | 'center' | 'right';
  /** css border definition */
  border?: string;
  /** css border definition */
  borderBottom?: string;
  /** css border definition */
  borderLeft?: string;
  /** css border definition */
  borderRight?: string;
  /** css border definition */
  borderTop?: string;
  /** border radius */
  borderRadius?: MjUnit<'px' | '%'>;
  /** inner element background color */
  containerBackgroundColor?: string;
  /** if "true", will be full width on mobile even if width is set */
  fluidOnMobile?: boolean;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** link target on click */
  target?: string;
  /** image width */
  width?: MjUnit<'px'>;
  /** image height */
  height?: MjUnit<'px' | 'auto'>;
  maxHeight?: MjUnit<'px' | '%'>;
  fontSize?: MjUnit<'px'>;
  /** reference to image map, be careful, it isn't supported everywhere */
  usemap?: string;
};

/**
 * ## mj-image
 *
 * Displays a responsive image in your email. It is similar to the HTML `` tag.
 * Note that if no width is provided, the image will use the parent column width.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-image width="300px" src="https://www.online-image-editor.com//styles/2014/images/example_image.png" />
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 * attribute                     | unit          | description                    | default value
 * ------------------------------|---------------|--------------------------------|-----------------------------
 * align                         | position      | image alignment                | center
 * alt                           | string        | image description              | n/a
 * border                        | string        | css border definition          | none
 * border-top                    | string        | css border definition          | none
 * border-bottom                 | string        | css border definition          | none
 * border-left                   | string        | css border definition          | none
 * border-right                  | string        | css border definition          | none
 * border-radius                 | px            | border radius                  | n/a
 * container-background-color    | color         | inner element background color | n/a
 * css-class                     | string        | class name, added to the root HTML element created | n/a
 * fluid-on-mobile               | string        | if "true", will be full width on mobile even if width is set | n/a
 * height                        | px            | image height                   | auto
 * href                          | url           | link to redirect to on click   | n/a
 * name                          | string        | specify the link name attribute | n/a
 * padding                       | px            | supports up to 4 parameters    | 10px 25px
 * padding-bottom                | px            | bottom offset                  | n/a
 * padding-left                  | px            | left offset                    | n/a
 * padding-right                 | px            | right offset                   | n/a
 * padding-top                   | px            | top offset                     | n/a
 * rel                           | string        | specify the rel attribute      | n/a
 * sizes                         | media query & width | set width based on query | n/a
 * src                           | url           | image source                   | n/a
 * srcset                        | url & width   | enables to set a different image source based on the viewport | n/a
 * target                        | string        | link target on click           | \_blank
 * title                         | string        | tooltip & accessibility        | n/a
 * usemap                        | string        | reference to image map, be careful, it isn't supported everywhere         | n/a
 * width                         | px            | image width                    | parent width
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-image
 */
export let MjImage = createComponent<MjImageProps>('mj-image', false);

export type MjSectionProps = {
  /** section color */
  backgroundColor?: string;
  /** background url */
  backgroundUrl?: string;
  /** css background repeat */
  backgroundRepeat?: 'repeat' | 'no-repeat';
  /** css background size */
  backgroundSize?: string;
  /** css background position (see outlook limitations below) */
  backgroundPosition?: string;
  /** css background position x */
  backgroundPositionX?: string;
  /** css background position y */
  backgroundPositionY?: string;
  /** css border format */
  border?: string;
  /** css border format */
  borderBottom?: string;
  /** css border format */
  borderLeft?: string;
  /** border radius */
  borderRadius?: string;
  /** css border format */
  borderRight?: string;
  /** css border format */
  borderTop?: string;
  /** set the display order of direct children */
  direction?: 'ltr' | 'rtl';
  /** make the section full-width */
  fullWidth?: boolean;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** section top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** section bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** section left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** section right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** css text-align */
  textAlign?: 'left' | 'center' | 'right';
  textPadding?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-section
 *
 * Sections are intended to be used as rows within your email.
 * They will be used to structure the layout.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section full-width="full-width" background-color="red">
 *       <!-- Your columns go here -->
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 * The `full-width` property will be used to manage the background width.
 * By default, it will be 600px. With the `full-width` property on, it will be
 * changed to 100%.
 *
 *
 *   **Inverting the order in which columns display:** set the `direction` attribute to `rtl` to change the order in which columns display on desktop. Because MJML is mobile-first, structure the columns in the **order you want them to stack on mobile**, and use `direction` to change the order they display **on desktop**.
 *
 *
 *
 *   Sections cannot nest in sections. Columns can nest in sections; all content must be in a column.
 *
 *
 * attribute             | unit        | description                    | default value
 * ----------------------|-------------|--------------------------------|---------------
 * background-color      | color       | section color                  | n/a
 * background-position   | percent / 'left','top',... (2 values max) | css background position (see outlook limitations below)        | top center
 * background-position-x | percent / keyword   | css background position x      | none
 * background-position-y | percent / keyword   | css background position y      | none
 * background-repeat     | string      | css background repeat          | repeat
 * background-size       | px/percent/'cover'/'contain'     | css background size    | auto
 * background-url        | url         | background url                 | n/a
 * border                | string      | css border format              | none
 * border-bottom         | string      | css border format              | n/a
 * border-left           | string      | css border format              | n/a
 * border-radius         | px          | border radius                  | n/a
 * border-right          | string      | css border format              | n/a
 * border-top            | string      | css border format              | n/a
 * css-class             | string      | class name, added to the root HTML element created | n/a
 * direction             | ltr / rtl   | set the display order of direct children | ltr
 * full-width            | string      | make the section full-width    | n/a
 * padding               | px          | supports up to 4 parameters    | 20px 0
 * padding-bottom        | px          | section bottom offset          | n/a
 * padding-left          | px          | section left offset            | n/a
 * padding-right         | px          | section right offset           | n/a
 * padding-top           | px          | section top offset             | n/a
 * text-align            | string      | css text-align                 | center
 *
 *
 *
 *   Limitations of background-images size and position on Outlook desktop :
 *   - If background-size is not specified, no-repeat will be ignored on Outlook.
 *   - If the specified size is a single attribute in percent, the height will be auto as in standard css. On outlook, the image will never overflow the element, and it will be shrinked instead of being cropped like on other clients.
 *
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-section
 */
export let MjSection = createComponent<MjSectionProps>('mj-section', false);

export type MjSpacerProps = {
  border?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  /** inner element background color */
  containerBackgroundColor?: string;
  /** bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** spacer height */
  height?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-spacer
 *
 * Displays a blank space.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-text>A first line of text</mj-text>
 *         <mj-spacer height="50px" />
 *         <mj-text>A second line of text</mj-text>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 * attribute                   | unit        | description                    | default value
 * ----------------------------|-------------|--------------------------------|------------------------------
 * container-background-color   | color         | inner element background color  | n/a
 * css-class                   | string      | class name, added to the root HTML element created | n/a
 * height                      | px          | spacer height                  | 20px
 * padding                      | px            | supports up to 4 parameters     | none
 * padding-bottom               | px            | bottom offset                   | n/a
 * padding-left                 | px            | left offset                     | n/a
 * padding-right                | px            | right offset                    | n/a
 * padding-top                  | px            | top offset                      | n/a
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-spacer
 */
export let MjSpacer = createComponent<MjSpacerProps>('mj-spacer', false);

export type MjTextProps = {
  /** left/right/center/justify */
  align?: 'left' | 'right' | 'center' | 'justify';
  backgroundColor?: string;
  /** text color */
  color?: string;
  /** inner element background color */
  containerBackgroundColor?: string;
  /** font */
  fontFamily?: string;
  /** text size */
  fontSize?: MjUnit<'px'>;
  /** normal/italic/oblique */
  fontStyle?: string;
  /** text thickness */
  fontWeight?: string;
  /** The height of the element */
  height?: MjUnit<'px' | '%'>;
  /** letter spacing */
  letterSpacing?: MjUnit<'px' | 'em'>;
  /** space between the lines */
  lineHeight?: MjUnit<'px' | '%' | ''>;
  /** bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** underline/overline/line-through/none */
  textDecoration?: string;
  /** uppercase/lowercase/capitalize */
  textTransform?: string;
  verticalAlign?: 'top' | 'bottom' | 'middle';
};

/**
 * ## mj-text
 *
 * This tag allows you to display text in your email.
 *
 *  ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-text>
 *           <h1>
 *             Hey Title!
 *           </h1>
 *         </mj-text>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 *  ```
 *
 *
 *
 *
 *
 *
 *
 *
 *   `mj-text` is an "ending tag", which means it can contain HTML code which will be left as it is, so it can contain HTML tags with attributes, but it cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 *
 *  attribute                    | unit          | description                                 | default value
 * ------------------------------|---------------|---------------------------------------------|-------------------------------------
 *  color                        | color         | text color                                  | #000000
 *  font-family                  | string        | font                                        | Ubuntu, Helvetica, Arial, sans-serif
 *  font-size                    | px            | text size                                   | 13px
 *  font-style                   | string        | normal/italic/oblique                       | n/a
 *  font-weight                  | number        | text thickness                              | n/a
 *  line-height                  | px            | space between the lines                     | 1
 *  letter-spacing               | px,em         | letter spacing                              | none
 *  height                       | px            | The height of the element                   | n/a
 *  text-decoration              | string        | underline/overline/line-through/none        | n/a
 *  text-transform               | string        | uppercase/lowercase/capitalize              | n/a
 *  align                        | string        | left/right/center/justify                   | left
 *  container-background-color   | color         | inner element background color              | n/a
 *  padding                      | px            | supports up to 4 parameters                 | 10px 25px
 *  padding-top                  | px            | top offset                                  | n/a
 *  padding-bottom               | px            | bottom offset                               | n/a
 *  padding-left                 | px            | left offset                                 | n/a
 *  padding-right                | px            | right offset                                | n/a
 *  css-class                    | string        | class name, added to the root HTML element created | n/a
 *
 *
 * This component is an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-text
 */
export let MjText = createComponent<MjTextProps>('mj-text', true);

export type MjTableProps = {
  /** self horizontal alignment */
  align?: 'left' | 'right' | 'center';
  /** table external border */
  border?: string;
  /** space between cells */
  cellpadding?: number;
  /** space between cell and border */
  cellspacing?: number;
  /** inner element background color */
  containerBackgroundColor?: string;
  /** text header & footer color */
  color?: string;
  /** font name */
  fontFamily?: string;
  /** font size */
  fontSize?: MjUnit<'px'>;
  fontWeight?: string;
  /** space between lines */
  lineHeight?: MjUnit<'px' | '%' | ''>;
  /** bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** specify the role attribute */
  role?: 'none' | 'presentation';
  /** sets the table layout. */
  tableLayout?: 'auto' | 'fixed' | 'initial' | 'inherit';
  verticalAlign?: 'top' | 'bottom' | 'middle';
  /** table width */
  width?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-table
 *
 * This tag allows you to display table and filled it with data. It only accepts plain HTML.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-table>
 *           <tr style="border-bottom:1px solid #ecedee;text-align:left;padding:15px 0;">
 *             <th style="padding: 0 15px 0 0;">Year</th>
 *             <th style="padding: 0 15px;">Language</th>
 *             <th style="padding: 0 0 0 15px;">Inspired from</th>
 *           </tr>
 *           <tr>
 *             <td style="padding: 0 15px 0 0;">1995</td>
 *             <td style="padding: 0 15px;">PHP</td>
 *             <td style="padding: 0 0 0 15px;">C, Shell Unix</td>
 *           </tr>
 *           <tr>
 *             <td style="padding: 0 15px 0 0;">1995</td>
 *             <td style="padding: 0 15px;">JavaScript</td>
 *             <td style="padding: 0 0 0 15px;">Scheme, Self</td>
 *           </tr>
 *         </mj-table>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 *   `mj-table` is an "ending tag", which means it can contain HTML code which will be left as it is, so it can contain HTML tags with attributes, but it cannot contain other MJML components. In `mj-table` specifically, you can put anything you would put in a `&lt;table&gt;` element. More information about ending tags in this section.
 *
 *
 *
 * attribute                   | unit                        | description                    | default value
 * ----------------------------|-----------------------------|------------------------------- |--------------
 * align                       | left/right/center           | self horizontal alignment      | left
 * border                      | border                      | table external border          | none
 * cellpadding                 | pixels                      | space between cells            | n/a
 * cellspacing                 | pixels                      | space between cell and border  | n/a
 * color                       | color                       | text header & footer color     | #000000
 * container-background-color  | color                       | inner element background color | n/a
 * css-class                   | string                      | class name, added to the root HTML element created | n/a
 * font-family                 | string                      | font name                      | Ubuntu, Helvetica, Arial, sans-serif
 * font-size                   | px                          | font size                      | 13px
 * line-height                 | percent/px                  | space between lines            | 22px
 * padding                     | percent/px                  | supports up to 4 parameters    | 10px 25px
 * padding-bottom              | percent/px                  | bottom offset                  | n/a
 * padding-left                | percent/px                  | left offset                    | n/a
 * padding-right               | percent/px                  | right offset                   | n/a
 * padding-top                 | percent/px                  | top offset                     | n/a
 * role                        | none/presentation           | specify the role attribute     | n/a
 * table-layout                | auto/fixed/initial/inherit  | sets the table layout.         | auto
 * width                       | percent/px                  | table width                    | 100%
 *
 *
 * This component is an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-table
 */
export let MjTable = createComponent<MjTableProps>('mj-table', true);

export type MjWrapperProps = {
  /** section color */
  backgroundColor?: string;
  /** background url */
  backgroundUrl?: string;
  /** css background repeat */
  backgroundRepeat?: 'repeat' | 'no-repeat';
  /** css background size */
  backgroundSize?: string;
  /** css background position (see outlook limitations in mj-section doc) */
  backgroundPosition?: string;
  /** css background position x */
  backgroundPositionX?: string;
  /** css background position y */
  backgroundPositionY?: string;
  /** css border format */
  border?: string;
  /** css border format */
  borderBottom?: string;
  /** css border format */
  borderLeft?: string;
  /** border radius */
  borderRadius?: string;
  /** css border format */
  borderRight?: string;
  /** css border format */
  borderTop?: string;
  direction?: 'ltr' | 'rtl';
  /** make the wrapper full-width */
  fullWidth?: boolean;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** section top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** section bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** section left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** section right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** css text-align */
  textAlign?: 'left' | 'center' | 'right';
  textPadding?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-wrapper
 *
 *
 *
 *
 *
 * Wrapper enables to wrap multiple sections together. It's especially useful to achieve nested layouts with shared border or background images across sections.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-wrapper border="1px solid #000000" padding="50px 30px">
 *       <mj-section border-top="1px solid #aaaaaa" border-left="1px solid #aaaaaa" border-right="1px solid #aaaaaa" padding="20px">
 *         <mj-column>
 *           <mj-image padding="0" src="https://placeholdit.imgix.net/~text?&w=350&h=150" />
 *         </mj-column>
 *       </mj-section>
 *       <mj-section border-left="1px solid #aaaaaa" border-right="1px solid #aaaaaa" padding="20px" border-bottom="1px solid #aaaaaa">
 *         <mj-column border="1px solid #dddddd">
 *           <mj-text padding="20px"> First line of text </mj-text>
 *           <mj-divider border-width="1px" border-style="dashed" border-color="lightgrey" padding="0 20px" />
 *           <mj-text padding="20px"> Second line of text </mj-text>
 *         </mj-column>
 *       </mj-section>
 *     </mj-wrapper>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 * The `full-width` property will be used to manage the background width.
 * By default, it will be 600px. With the `full-width` property on, it will be
 * changed to 100%.
 *
 *
 *   You can't nest a full-width section inside a full-width wrapper, section will act as a non-full-width section.
 *
 *
 *
 *   If you're using a background-url on a `mj-wrapper` then do not add one into a section within the mj-wrapper. Outlook Desktop doesn't support nested VML, so it will most likely break your email.
 *   Also, if you use a background-color on mj-wrapper and a background-url on its section/hero child, the background-color will be over the background-image on Outlook desktop. There is no way to keep the vml image under the content and over the wrapper's background-color due to z-index being ignored on most tags.
 *
 *
 *
 * attribute           | unit        | description                    | default value
 * --------------------|-------------|--------------------------------|---------------
 * background-color    | color       | section color                  | n/a
 * background-position   | percent / 'left','top',... (2 values max) | css background position (see outlook limitations in mj-section doc)        | top center
 * background-position-x | percent / keyword   | css background position x      | none
 * background-position-y | percent / keyword   | css background position y      | none
 * background-repeat     | string      | css background repeat          | repeat
 * background-size       | px/percent/'cover'/'contain'     | css background size    | auto
 * background-url      | url         | background url                 | n/a
 * border              | string      | css border format              | none
 * border-bottom       | string      | css border format              | n/a
 * border-left         | string      | css border format              | n/a
 * border-radius       | px          | border radius                  | n/a
 * border-right        | string      | css border format              | n/a
 * border-top          | string      | css border format              | n/a
 * css-class           | string      | class name, added to the root HTML element created | n/a
 * full-width          | string      | make the wrapper full-width    | n/a
 * padding             | px          | supports up to 4 parameters    | 20px 0
 * padding-bottom      | px          | section bottom offset          | n/a
 * padding-left        | px          | section left offset            | n/a
 * padding-right       | px          | section right offset           | n/a
 * padding-top         | px          | section top offset             | n/a
 * text-align          | string      | css text-align                 | center
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-wrapper
 */
export let MjWrapper = createComponent<MjWrapperProps>('mj-wrapper', false);

export type MjSocialProps = {
  /** left/right/center */
  align?: 'left' | 'right' | 'center';
  /** border radius */
  borderRadius?: MjUnit<'px' | '%'>;
  /** inner element background color */
  containerBackgroundColor?: string;
  /** text color */
  color?: string;
  /** font name */
  fontFamily?: string;
  /** font size */
  fontSize?: MjUnit<'px'>;
  /** font style */
  fontStyle?: string;
  /** font weight */
  fontWeight?: string;
  /** icon size (width and height) */
  iconSize?: MjUnit<'px' | '%'>;
  /** icon height, overrides icon-size */
  iconHeight?: MjUnit<'px' | '%'>;
  /** padding around the icon */
  iconPadding?: MjUnit<'px' | '%'>;
  /** social network surrounding padding */
  innerPadding?: MjUnit<'px' | '%'>;
  /** space between lines */
  lineHeight?: MjUnit<'px' | '%' | ''>;
  /** vertical/horizontal */
  mode?: 'horizontal' | 'vertical';
  /** bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  tableLayout?: 'auto' | 'fixed';
  /** padding around the text */
  textPadding?: MjUnit<'px' | '%'>;
  /** underline/overline/none */
  textDecoration?: string;
  /** top/middle/bottom */
  verticalAlign?: 'top' | 'bottom' | 'middle';
};

/**
 * ## mj-social
 *
 *
 *
 *
 *
 * Displays calls-to-action for various social networks with their associated logo. You can add social networks with the `mj-social-element` tag.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-social font-size="15px" icon-size="30px" mode="horizontal">
 *           <mj-social-element name="facebook" href="https://mjml.io/">
 *             Facebook
 *           </mj-social-element>
 *           <mj-social-element name="google" href="https://mjml.io/">
 *             Google
 *           </mj-social-element>
 *           <mj-social-element  name="twitter" href="https://mjml.io/">
 *             Twitter
 *           </mj-social-element>
 *         </mj-social>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 *   `mj-social-element` is an "ending tag", which means it can contain HTML code which will be left as it is, so it can contain HTML tags with attributes, but it cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 *
 * attribute                   | unit        | description                   | default value
 * ----------------------------|-------------|-------------------------------|---------------------------
 * align                       | string      | left/right/center             | center
 * border-radius               | px          | border radius                 | 3px
 * color                       | color       | text color                    | #333333
 * css-class                   | string      | class name, added to the root HTML element created | n/a
 * container-background-color  | color       | inner element background color                     | n/a
 * font-family                 | string      | font name                     | Ubuntu, Helvetica, Arial, sans-serif
 * font-size                   | px/em       | font size                     | 13px
 * font-style                  | string      | font style                    | normal
 * font-weight                 | string      | font weight                   | normal
 * icon-height                 | percent/px  | icon height, overrides icon-size | icon-size
 * icon-size                   | percent/px  | icon size (width and height)  | 20px
 * inner-padding               | px          | social network surrounding padding                 | 4px
 * line-height                 | percent/px  | space between lines           | 22px
 * mode                        | string      | vertical/horizontal           | horizontal
 * padding                     | px          | supports up to 4 parameters                       | 10px 25px
 * padding-bottom              | px          | bottom offset                    | n/a
 * padding-left                | px          | left offset                      | n/a
 * padding-right               | px          | right offset                       | n/a
 * padding-top                 | px          | top offset                         | n/a
 * icon-padding                | px          | padding around the icons      | 0px
 * text-padding                | px          | padding around the texts      | 4px 4px 4px 0
 * text-decoration             | string      | underline/overline/none       | none
 *
 * ### mj-social-element
 *
 * This component enables you to display a given social network inside `mj-social`.
 * Note that default icons are transparent, which allows `background-color` to actually be the icon color.
 *
 *
 * attribute                   | unit        | description                   | default value
 * ----------------------------|-------------|-------------------------------|---------------------------
 * align                       | string      | left/right/center             | center
 * alt                         | string      | image alt attribute           | none
 * background-color            | color       | icon color                    | Each social `name` has its own default
 * border-radius               | px          | border radius                 | 3px
 * color                       | color       | text color                    | #333333
 * css-class                   | string      | class name, added to the root HTML element created | n/a
 * font-family                 | string      | font name                     | Ubuntu, Helvetica, Arial, sans-serif
 * font-size                   | px/em       | font size                     | 13px
 * font-style                  | string      | font style                    | normal
 * font-weight                 | string      | font weight                   | normal
 * href                        | url         | button redirection url        | none
 * icon-height                 | percent/px  | icon height, overrides icon-size | icon-size
 * icon-size                   | percent/px  | icon size (width and height)  | 20px
 * line-height                 | percent/px  | space between lines           | 22px
 * name                        | string      | social network name, see supported list below | N/A
 * padding                     | px          | supports up to 4 parameters                       | 4px
 * padding-bottom              | px          | bottom offset                    | n/a
 * padding-left                | px          | left offset                      | n/a
 * padding-right               | px          | right offset                       | n/a
 * padding-top                 | px          | top offset                         | n/a
 * icon-padding                | px          | padding around the icon       | 0px
 * text-padding                | px          | padding around the text       | 4px 4px 4px 0
 * sizes                       | media query & width | set icon width based on query | n/a
 * src                         | url         | image source                  | Each social `name` has its own default
 * srcset                      | url & width | set a different image source based on the viewport | n/a
 * rel                         | string      | specify the rel attribute for the link    | n/a
 * target                      | string      | link target                   | \_blank
 * title                       | string      | img title attribute           | none
 * text-decoration             | string      | underline/overline/none       | none
 * vertical-align              | string      | top/middle/bottom             | middle
 *
 * Supported networks with a share url:
 * - facebook
 * - twitter
 * - google
 * - pinterest
 * - linkedin
 * - tumblr
 * - xing
 *
 * Without a share url:
 * - github
 * - instagram
 * - web
 * - snapchat
 * - youtube
 * - vimeo
 * - medium
 * - soundcloud
 * - dribbble
 *
 * When using a network with share url, the `href` attribute will be inserted in the share url (i.e. `https://www.facebook.com/sharer/sharer.php?u=[[URL]]`). To keep your `href` unchanged, add `-noshare` to the network name. Example :
 *
 * `
 * <mj-social-element name="twitter-noshare" href="my-unchanged-url">Twitter</mj-social-element>
 * `
 *
 * ### Custom Social Element
 *
 * You can add any unsupported network like this:
 *
 * ```xml
 * <mj-social-element href="url" background-color="#FF00FF" src="path-to-your-icon">
 *   Optional label
 * </mj-social-element>
 * ```
 *
 * You can also use mj-social this way with no `href` attribute to make a simple list of inlined images-texts.
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-social
 */
export let MjSocial = createComponent<MjSocialProps>('mj-social', false);

export type MjSocialElementProps = {
  /** left/right/center */
  align?: 'left' | 'center' | 'right';
  /** icon color */
  backgroundColor?: string;
  /** text color */
  color?: string;
  /** border radius */
  borderRadius?: MjUnit<'px'>;
  /** font name */
  fontFamily?: string;
  /** font size */
  fontSize?: MjUnit<'px'>;
  /** font style */
  fontStyle?: string;
  /** font weight */
  fontWeight?: string;
  /** button redirection url */
  href?: string;
  /** icon size (width and height) */
  iconSize?: MjUnit<'px' | '%'>;
  /** icon height, overrides icon-size */
  iconHeight?: MjUnit<'px' | '%'>;
  /** padding around the icon */
  iconPadding?: MjUnit<'px' | '%'>;
  /** space between lines */
  lineHeight?: MjUnit<'px' | '%' | ''>;
  /** social network name, see supported list below */
  name?: string;
  /** bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** padding around the text */
  textPadding?: MjUnit<'px' | '%'>;
  /** specify the rel attribute for the link */
  rel?: string;
  /** image source */
  src?: string;
  /** set a different image source based on the viewport */
  srcset?: string;
  /** set icon width based on query */
  sizes?: string;
  /** image alt attribute */
  alt?: string;
  /** img title attribute */
  title?: string;
  /** link target */
  target?: string;
  /** underline/overline/none */
  textDecoration?: string;
  /** top/middle/bottom */
  verticalAlign?: 'top' | 'middle' | 'bottom';
};

/**
 * ## mj-social
 *
 *
 *
 *
 *
 * Displays calls-to-action for various social networks with their associated logo. You can add social networks with the `mj-social-element` tag.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-social font-size="15px" icon-size="30px" mode="horizontal">
 *           <mj-social-element name="facebook" href="https://mjml.io/">
 *             Facebook
 *           </mj-social-element>
 *           <mj-social-element name="google" href="https://mjml.io/">
 *             Google
 *           </mj-social-element>
 *           <mj-social-element  name="twitter" href="https://mjml.io/">
 *             Twitter
 *           </mj-social-element>
 *         </mj-social>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 *   `mj-social-element` is an "ending tag", which means it can contain HTML code which will be left as it is, so it can contain HTML tags with attributes, but it cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 *
 * attribute                   | unit        | description                   | default value
 * ----------------------------|-------------|-------------------------------|---------------------------
 * align                       | string      | left/right/center             | center
 * border-radius               | px          | border radius                 | 3px
 * color                       | color       | text color                    | #333333
 * css-class                   | string      | class name, added to the root HTML element created | n/a
 * container-background-color  | color       | inner element background color                     | n/a
 * font-family                 | string      | font name                     | Ubuntu, Helvetica, Arial, sans-serif
 * font-size                   | px/em       | font size                     | 13px
 * font-style                  | string      | font style                    | normal
 * font-weight                 | string      | font weight                   | normal
 * icon-height                 | percent/px  | icon height, overrides icon-size | icon-size
 * icon-size                   | percent/px  | icon size (width and height)  | 20px
 * inner-padding               | px          | social network surrounding padding                 | 4px
 * line-height                 | percent/px  | space between lines           | 22px
 * mode                        | string      | vertical/horizontal           | horizontal
 * padding                     | px          | supports up to 4 parameters                       | 10px 25px
 * padding-bottom              | px          | bottom offset                    | n/a
 * padding-left                | px          | left offset                      | n/a
 * padding-right               | px          | right offset                       | n/a
 * padding-top                 | px          | top offset                         | n/a
 * icon-padding                | px          | padding around the icons      | 0px
 * text-padding                | px          | padding around the texts      | 4px 4px 4px 0
 * text-decoration             | string      | underline/overline/none       | none
 *
 * ### mj-social-element
 *
 * This component enables you to display a given social network inside `mj-social`.
 * Note that default icons are transparent, which allows `background-color` to actually be the icon color.
 *
 *
 * attribute                   | unit        | description                   | default value
 * ----------------------------|-------------|-------------------------------|---------------------------
 * align                       | string      | left/right/center             | center
 * alt                         | string      | image alt attribute           | none
 * background-color            | color       | icon color                    | Each social `name` has its own default
 * border-radius               | px          | border radius                 | 3px
 * color                       | color       | text color                    | #333333
 * css-class                   | string      | class name, added to the root HTML element created | n/a
 * font-family                 | string      | font name                     | Ubuntu, Helvetica, Arial, sans-serif
 * font-size                   | px/em       | font size                     | 13px
 * font-style                  | string      | font style                    | normal
 * font-weight                 | string      | font weight                   | normal
 * href                        | url         | button redirection url        | none
 * icon-height                 | percent/px  | icon height, overrides icon-size | icon-size
 * icon-size                   | percent/px  | icon size (width and height)  | 20px
 * line-height                 | percent/px  | space between lines           | 22px
 * name                        | string      | social network name, see supported list below | N/A
 * padding                     | px          | supports up to 4 parameters                       | 4px
 * padding-bottom              | px          | bottom offset                    | n/a
 * padding-left                | px          | left offset                      | n/a
 * padding-right               | px          | right offset                       | n/a
 * padding-top                 | px          | top offset                         | n/a
 * icon-padding                | px          | padding around the icon       | 0px
 * text-padding                | px          | padding around the text       | 4px 4px 4px 0
 * sizes                       | media query & width | set icon width based on query | n/a
 * src                         | url         | image source                  | Each social `name` has its own default
 * srcset                      | url & width | set a different image source based on the viewport | n/a
 * rel                         | string      | specify the rel attribute for the link    | n/a
 * target                      | string      | link target                   | \_blank
 * title                       | string      | img title attribute           | none
 * text-decoration             | string      | underline/overline/none       | none
 * vertical-align              | string      | top/middle/bottom             | middle
 *
 * Supported networks with a share url:
 * - facebook
 * - twitter
 * - google
 * - pinterest
 * - linkedin
 * - tumblr
 * - xing
 *
 * Without a share url:
 * - github
 * - instagram
 * - web
 * - snapchat
 * - youtube
 * - vimeo
 * - medium
 * - soundcloud
 * - dribbble
 *
 * When using a network with share url, the `href` attribute will be inserted in the share url (i.e. `https://www.facebook.com/sharer/sharer.php?u=[[URL]]`). To keep your `href` unchanged, add `-noshare` to the network name. Example :
 *
 * `
 * <mj-social-element name="twitter-noshare" href="my-unchanged-url">Twitter</mj-social-element>
 * `
 *
 * ### Custom Social Element
 *
 * You can add any unsupported network like this:
 *
 * ```xml
 * <mj-social-element href="url" background-color="#FF00FF" src="path-to-your-icon">
 *   Optional label
 * </mj-social-element>
 * ```
 *
 * You can also use mj-social this way with no `href` attribute to make a simple list of inlined images-texts.
 *
 *
 * This component is an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-social-element
 */
export let MjSocialElement = createComponent<MjSocialElementProps>('mj-social-element', true);

export type MjNavbarProps = {
  /** align content left/center/right */
  align?: 'left' | 'center' | 'right';
  baseUrl?: string;
  /** activate the hamburger navigation on mobile if the value is hamburger */
  hamburger?: string;
  /** hamburger icon alignment, left/center/right (hamburger mode required) */
  icoAlign?: 'left' | 'center' | 'right';
  /** char code for a custom open icon (hamburger mode required) */
  icoOpen?: string;
  /** char code for a custom close icon (hamburger mode required) */
  icoClose?: string;
  /** hamburger icon color (hamburger mode required) */
  icoColor?: string;
  /** hamburger icon size (hamburger mode required) */
  icoFontSize?: MjUnit<'px' | '%'>;
  /** hamburger icon font (only on hamburger mode) */
  icoFontFamily?: string;
  /** hamburger icon text transformation none/capitalize/uppercase/lowercase (hamburger mode required) */
  icoTextTransform?: string;
  /** hamburger icon padding, supports up to 4 parameters (hamburger mode required) */
  icoPadding?: MjUnit<'px' | '%'>;
  /** hamburger icon left offset (hamburger mode required) */
  icoPaddingLeft?: MjUnit<'px' | '%'>;
  /** hamburger icon top offset (hamburger mode required) */
  icoPaddingTop?: MjUnit<'px' | '%'>;
  /** hamburger icon right offset (hamburger mode required) */
  icoPaddingRight?: MjUnit<'px' | '%'>;
  /** hamburger icon bottom offset (hamburger mode required) */
  icoPaddingBottom?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** hamburger icon text decoration none/underline/overline/line-through (hamburger mode required) */
  icoTextDecoration?: string;
  /** hamburger icon line height (hamburger mode required) */
  icoLineHeight?: MjUnit<'px' | '%' | ''>;
};

/**
 * ## mj-navbar
 *
 *
 *
 *
 *
 * Displays a menu for navigation with an optional hamburger mode for mobile devices.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section background-color="#ef6451">
 *       <mj-column>
 *         <mj-navbar base-url="https://mjml.io" hamburger="hamburger" ico-color="#ffffff">
 *             <mj-navbar-link href="/gettings-started-onboard" color="#ffffff">Getting started</mj-navbar-link>
 *             <mj-navbar-link href="/try-it-live" color="#ffffff">Try it live</mj-navbar-link>
 *             <mj-navbar-link href="/templates" color="#ffffff">Templates</mj-navbar-link>
 *             <mj-navbar-link href="/components" color="#ffffff">Components</mj-navbar-link>
 *         </mj-navbar>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 * ### mj-navbar
 *
 * Individual links of the menu should we wrapped inside mj-navbar.
 *
 *
 * Standard Desktop:
 *
 *
 *
 *
 *
 * Standard Mobile:
 *
 *
 *
 *
 *
 * Mode hamburger enabled:
 *
 *
 *
 *
 *
 *
 *   The "hamburger" feature only work on mobile device with all iOS mail client, for others mail clients the render is performed on an normal way, the links are displayed inline and the hamburger is not visible.
 *
 *
 *
 *   All the attributes prefixed with <code>ico-</code> help to customize the hamburger icon. They only work with the hamburger mode enabled.
 *
 *
 * attribute                   | unit               | description                                                                                      | default value
 * ----------------------------|--------------------|--------------------------------------------------------------------------------------------------|-----------------
 * align                       | string             | align content left/center/right                                                                  | center
 * base url                    | string             | base url for children components                                                                 | n/a
 * css-class                   | string             | class name, added to the root HTML element created                                               | n/a
 * hamburger                   | string             | activate the hamburger navigation on mobile if the value is hamburger                            | n/a
 * ico-align                   | string             | hamburger icon alignment, left/center/right (hamburger mode required)                            | center
 * ico-close                   | ASCII code decimal | char code for a custom close icon (hamburger mode required)                                      | 8855
 * ico-color                   | color format       | hamburger icon color (hamburger mode required)                                                   | #000000
 * ico-font-family             | string             | hamburger icon font (only on hamburger mode)                                                     | Ubuntu, Helvetica, Arial, sans-serif
 * ico-font-size               | px                 | hamburger icon size (hamburger mode required)                                                    | 30px
 * ico-line-height             | px                 | hamburger icon line height (hamburger mode required)                                             | 30px
 * ico-open                    | ASCII code decimal | char code for a custom open icon (hamburger mode required)                                       | 9776
 * ico-padding                 | px                 | hamburger icon padding, supports up to 4 parameters (hamburger mode required)                    | 10px
 * ico-padding-bottom          | px                 | hamburger icon bottom offset (hamburger mode required)                                           | 10px
 * ico-padding-left            | px                 | hamburger icon left offset (hamburger mode required)                                             | 10px
 * ico-padding-right           | px                 | hamburger icon right offset (hamburger mode required)                                            | 10px
 * ico-padding-top             | px                 | hamburger icon top offset (hamburger mode required)                                              | 10px
 * ico-text-decoration         | string             | hamburger icon text decoration none/underline/overline/line-through (hamburger mode required)    | none
 * ico-text-transform          | string             | hamburger icon text transformation none/capitalize/uppercase/lowercase (hamburger mode required) | none
 *
 *
 * ### mj-navbar-link
 *
 *
 * This component should be used to display an individual link in the navbar.
 *
 *
 *   The mj-navbar-link component must be used inside a mj-navbar component only.
 *
 *
 *
 *
 *   `mj-navbar-link` is an "ending tag", which means it can contain HTML code which will be left as it is, so it can contain HTML tags with attributes, but it cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 * attribute        | unit          | description                           | default value
 * -----------------|---------------|---------------------------------------|------------------------------
 * color            | color         | text color                                         | #000000
 * css-class        | string        | class name, added to the root HTML element created | n/a
 * font-family      | string        | font                                               | Ubuntu, Helvetica, Arial, sans-serif
 * font-size        | px            | text size                                          | 13px
 * font-style       | string        | normal/italic/oblique                              | n/a
 * font-weight      | number        | text thickness                                     | n/a
 * href             | string        | link to redirect to on click                       | n/a
 * letter-spacing   | px,em         | letter-spacing                                     | n/a
 * line-height      | px            | space between the lines                            | 22px
 * padding          | px            | supports up to 4 parameters                        | 15px 10px
 * padding-bottom   | px            | bottom offset                                      | n/a
 * padding-left     | px            | left offset                                        | n/a
 * padding-right    | px            | right offset                                       | n/a
 * padding-top      | px            | top offset                                         | n/a
 * rel              | string        | specify the rel attribute                          | n/a
 * target           | string        | link target on click                               | n/a
 * text-decoration  | string        | underline/overline/none                            | n/a
 * text-transform   | string        | capitalize/uppercase/lowercase/none                | uppercase
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-navbar
 */
export let MjNavbar = createComponent<MjNavbarProps>('mj-navbar', false);

export type MjNavbarLinkProps = {
  /** text color */
  color?: string;
  /** font */
  fontFamily?: string;
  /** text size */
  fontSize?: MjUnit<'px'>;
  /** normal/italic/oblique */
  fontStyle?: string;
  /** text thickness */
  fontWeight?: string;
  /** link to redirect to on click */
  href?: string;
  name?: string;
  /** link target on click */
  target?: string;
  /** specify the rel attribute */
  rel?: string;
  /** letter-spacing */
  letterSpacing?: MjUnit<'px' | 'em'>;
  /** space between the lines */
  lineHeight?: MjUnit<'px' | '%' | ''>;
  /** bottom offset */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** left offset */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** right offset */
  paddingRight?: MjUnit<'px' | '%'>;
  /** top offset */
  paddingTop?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** underline/overline/none */
  textDecoration?: string;
  /** capitalize/uppercase/lowercase/none */
  textTransform?: string;
};

/**
 * ## mj-navbar
 *
 *
 *
 *
 *
 * Displays a menu for navigation with an optional hamburger mode for mobile devices.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section background-color="#ef6451">
 *       <mj-column>
 *         <mj-navbar base-url="https://mjml.io" hamburger="hamburger" ico-color="#ffffff">
 *             <mj-navbar-link href="/gettings-started-onboard" color="#ffffff">Getting started</mj-navbar-link>
 *             <mj-navbar-link href="/try-it-live" color="#ffffff">Try it live</mj-navbar-link>
 *             <mj-navbar-link href="/templates" color="#ffffff">Templates</mj-navbar-link>
 *             <mj-navbar-link href="/components" color="#ffffff">Components</mj-navbar-link>
 *         </mj-navbar>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 * ### mj-navbar
 *
 * Individual links of the menu should we wrapped inside mj-navbar.
 *
 *
 * Standard Desktop:
 *
 *
 *
 *
 *
 * Standard Mobile:
 *
 *
 *
 *
 *
 * Mode hamburger enabled:
 *
 *
 *
 *
 *
 *
 *   The "hamburger" feature only work on mobile device with all iOS mail client, for others mail clients the render is performed on an normal way, the links are displayed inline and the hamburger is not visible.
 *
 *
 *
 *   All the attributes prefixed with <code>ico-</code> help to customize the hamburger icon. They only work with the hamburger mode enabled.
 *
 *
 * attribute                   | unit               | description                                                                                      | default value
 * ----------------------------|--------------------|--------------------------------------------------------------------------------------------------|-----------------
 * align                       | string             | align content left/center/right                                                                  | center
 * base url                    | string             | base url for children components                                                                 | n/a
 * css-class                   | string             | class name, added to the root HTML element created                                               | n/a
 * hamburger                   | string             | activate the hamburger navigation on mobile if the value is hamburger                            | n/a
 * ico-align                   | string             | hamburger icon alignment, left/center/right (hamburger mode required)                            | center
 * ico-close                   | ASCII code decimal | char code for a custom close icon (hamburger mode required)                                      | 8855
 * ico-color                   | color format       | hamburger icon color (hamburger mode required)                                                   | #000000
 * ico-font-family             | string             | hamburger icon font (only on hamburger mode)                                                     | Ubuntu, Helvetica, Arial, sans-serif
 * ico-font-size               | px                 | hamburger icon size (hamburger mode required)                                                    | 30px
 * ico-line-height             | px                 | hamburger icon line height (hamburger mode required)                                             | 30px
 * ico-open                    | ASCII code decimal | char code for a custom open icon (hamburger mode required)                                       | 9776
 * ico-padding                 | px                 | hamburger icon padding, supports up to 4 parameters (hamburger mode required)                    | 10px
 * ico-padding-bottom          | px                 | hamburger icon bottom offset (hamburger mode required)                                           | 10px
 * ico-padding-left            | px                 | hamburger icon left offset (hamburger mode required)                                             | 10px
 * ico-padding-right           | px                 | hamburger icon right offset (hamburger mode required)                                            | 10px
 * ico-padding-top             | px                 | hamburger icon top offset (hamburger mode required)                                              | 10px
 * ico-text-decoration         | string             | hamburger icon text decoration none/underline/overline/line-through (hamburger mode required)    | none
 * ico-text-transform          | string             | hamburger icon text transformation none/capitalize/uppercase/lowercase (hamburger mode required) | none
 *
 *
 * ### mj-navbar-link
 *
 *
 * This component should be used to display an individual link in the navbar.
 *
 *
 *   The mj-navbar-link component must be used inside a mj-navbar component only.
 *
 *
 *
 *
 *   `mj-navbar-link` is an "ending tag", which means it can contain HTML code which will be left as it is, so it can contain HTML tags with attributes, but it cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 * attribute        | unit          | description                           | default value
 * -----------------|---------------|---------------------------------------|------------------------------
 * color            | color         | text color                                         | #000000
 * css-class        | string        | class name, added to the root HTML element created | n/a
 * font-family      | string        | font                                               | Ubuntu, Helvetica, Arial, sans-serif
 * font-size        | px            | text size                                          | 13px
 * font-style       | string        | normal/italic/oblique                              | n/a
 * font-weight      | number        | text thickness                                     | n/a
 * href             | string        | link to redirect to on click                       | n/a
 * letter-spacing   | px,em         | letter-spacing                                     | n/a
 * line-height      | px            | space between the lines                            | 22px
 * padding          | px            | supports up to 4 parameters                        | 15px 10px
 * padding-bottom   | px            | bottom offset                                      | n/a
 * padding-left     | px            | left offset                                        | n/a
 * padding-right    | px            | right offset                                       | n/a
 * padding-top      | px            | top offset                                         | n/a
 * rel              | string        | specify the rel attribute                          | n/a
 * target           | string        | link target on click                               | n/a
 * text-decoration  | string        | underline/overline/none                            | n/a
 * text-transform   | string        | capitalize/uppercase/lowercase/none                | uppercase
 *
 *
 * This component is an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-navbar-link
 */
export let MjNavbarLink = createComponent<MjNavbarLinkProps>('mj-navbar-link', true);

export type MjAccordionProps = {
  /** background-color of the cell */
  containerBackgroundColor?: string;
  /** border */
  border?: string;
  /** font family */
  fontFamily?: string;
  /** icon alignment */
  iconAlign?: 'top' | 'middle' | 'bottom';
  /** icon height */
  iconWidth?: MjUnit<'px' | '%'>;
  /** icon width */
  iconHeight?: MjUnit<'px' | '%'>;
  /** icon when accordion is wrapped */
  iconWrappedUrl?: string;
  /** alt text when accordion is wrapped */
  iconWrappedAlt?: string;
  /** icon when accordion is unwrapped */
  iconUnwrappedUrl?: string;
  /** alt text when accordion is unwrapped */
  iconUnwrappedAlt?: string;
  /** display icon left or right */
  iconPosition?: 'left' | 'right';
  /** padding bottom */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** padding left */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** padding right */
  paddingRight?: MjUnit<'px' | '%'>;
  /** padding top */
  paddingTop?: MjUnit<'px' | '%'>;
  /** padding */
  padding?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-accordion
 *
 *
 *
 *
 *
 * `mj-accordion` is an interactive MJML component to stack content in tabs, so the information is collapsed and only the titles are visible. Readers can interact by clicking on the tabs to reveal the content, providing a great experience on mobile devices where space is scarce.
 *
 *
 *   `mj-accordion-text` and `mj-accordion-title` are "ending tags", which means they can contain HTML code which will be left as it is, so they can contain HTML tags with attributes, but they cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 *
 * ```xml
 * <mjml>
 *   <mj-head>
 *     <mj-attributes>
 *       <mj-accordion border="none" padding="1px" />
 *       <mj-accordion-element icon-wrapped-url="https://i.imgur.com/Xvw0vjq.png" icon-unwrapped-url="https://i.imgur.com/KKHenWa.png" icon-height="24px" icon-width="24px" />
 *       <mj-accordion-title font-family="Roboto, Open Sans, Helvetica, Arial, sans-serif" background-color="#fff" color="#031017" padding="15px" font-size="18px" />
 *       <mj-accordion-text font-family="Open Sans, Helvetica, Arial, sans-serif" background-color="#fafafa" padding="15px" color="#505050" font-size="14px" />
 *     </mj-attributes>
 *   </mj-head>
 *
 *   <mj-body>
 *     <mj-section padding="20px" background-color="#ffffff">
 *       <mj-column background-color="#dededd">
 *         <mj-accordion>
 *           <mj-accordion-element>
 *             <mj-accordion-title>Why use an accordion?</mj-accordion-title>
 *             <mj-accordion-text>
 *               <span style="line-height:20px">
 *                 Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way.
 *               </span>
 *             </mj-accordion-text>
 *           </mj-accordion-element>
 *           <mj-accordion-element>
 *             <mj-accordion-title>How it works</mj-accordion-title>
 *             <mj-accordion-text>
 *               <span style="line-height:20px">
 *                 Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once.
 *               </span>
 *             </mj-accordion-text>
 *           </mj-accordion-element>
 *         </mj-accordion>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * border | string | CSS border format | 2px solid black
 * container-background-color | n/a | background-color of the cell | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font | Ubuntu, Helvetica, Arial, sans-serif
 * icon-align | n/a | icon alignment | middle
 * icon-height | px | icon width | 32px
 * icon-position | n/a | display icon left or right | right
 * icon-unwrapped-alt | n/a | alt text when accordion is unwrapped | -
 * icon-unwrapped-url | n/a | icon when accordion is unwrapped | https://i.imgur.com/w4uTygT.png
 * icon-width | px | icon height | 32px
 * icon-wrapped-alt | n/a | alt text when accordion is wrapped | +
 * icon-wrapped-url | n/a | icon when accordion is wrapped | https://i.imgur.com/bIXv1bk.png
 * padding | px | padding | 10px 25px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 * ### mj-accordion-element
 *
 * Creates an accordion title/text pair.
 * An accordion can have any number of these pairs.
 *
 *
 * Inheritance applies between attributes supported in both `mj-accordion` and
 * `mj-accordion-element` unless `mj-accordion-element` overrides.
 *
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * border | n/a | border | affects each horizontal border in the accordion except the top one
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font | Ubuntu, Helvetica, Arial, sans-serif
 * icon-align | n/a | icon alignment | middle
 * icon-height | n/a | icon width | 32px
 * icon-position | n/a | display icon left or right | right
 * icon-unwrapped-alt | n/a | alt text when accordion is unwrapped | -
 * icon-unwrapped-url | n/a | icon when accordion is unwrapped | https://i.imgur.com/w4uTygT.png
 * icon-width | n/a | icon height | 32px
 * icon-wrapped-alt | n/a | alt text when accordion is wrapped | +
 * icon-wrapped-url | n/a | icon when accordion is wrapped | https://i.imgur.com/bIXv1bk.png
 *
 * ### mj-accordion-title
 *
 * The title in a title/text pair.
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * color | n/a | text color | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font family | Ubuntu, Helvetica, Arial, sans-serif
 * font-size | px | font size | 13px
 * padding | px | padding | 16px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 * ### mj-accordion-text
 *
 * The text in a title/text pair.
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * color | n/a | text color | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font family | Ubuntu, Helvetica, Arial, sans-serif
 * font-size | px | font size | 13px
 * font-weight | number | text thickness | n/a
 * letter-spacing | px,em | letter spacing | none
 * line-height | px | space between the lines | 1
 * padding | px | padding | 16px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-accordion
 */
export let MjAccordion = createComponent<MjAccordionProps>('mj-accordion', false);

export type MjAccordionElementProps = {
  /** background color */
  backgroundColor?: string;
  /** border */
  border?: string;
  /** font family */
  fontFamily?: string;
  /** icon alignment */
  iconAlign?: 'top' | 'middle' | 'bottom';
  /** icon height */
  iconWidth?: MjUnit<'px' | '%'>;
  /** icon width */
  iconHeight?: MjUnit<'px' | '%'>;
  /** icon when accordion is wrapped */
  iconWrappedUrl?: string;
  /** alt text when accordion is wrapped */
  iconWrappedAlt?: string;
  /** icon when accordion is unwrapped */
  iconUnwrappedUrl?: string;
  /** alt text when accordion is unwrapped */
  iconUnwrappedAlt?: string;
  /** display icon left or right */
  iconPosition?: 'left' | 'right';
};

/**
 * ## mj-accordion
 *
 *
 *
 *
 *
 * `mj-accordion` is an interactive MJML component to stack content in tabs, so the information is collapsed and only the titles are visible. Readers can interact by clicking on the tabs to reveal the content, providing a great experience on mobile devices where space is scarce.
 *
 *
 *   `mj-accordion-text` and `mj-accordion-title` are "ending tags", which means they can contain HTML code which will be left as it is, so they can contain HTML tags with attributes, but they cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 *
 * ```xml
 * <mjml>
 *   <mj-head>
 *     <mj-attributes>
 *       <mj-accordion border="none" padding="1px" />
 *       <mj-accordion-element icon-wrapped-url="https://i.imgur.com/Xvw0vjq.png" icon-unwrapped-url="https://i.imgur.com/KKHenWa.png" icon-height="24px" icon-width="24px" />
 *       <mj-accordion-title font-family="Roboto, Open Sans, Helvetica, Arial, sans-serif" background-color="#fff" color="#031017" padding="15px" font-size="18px" />
 *       <mj-accordion-text font-family="Open Sans, Helvetica, Arial, sans-serif" background-color="#fafafa" padding="15px" color="#505050" font-size="14px" />
 *     </mj-attributes>
 *   </mj-head>
 *
 *   <mj-body>
 *     <mj-section padding="20px" background-color="#ffffff">
 *       <mj-column background-color="#dededd">
 *         <mj-accordion>
 *           <mj-accordion-element>
 *             <mj-accordion-title>Why use an accordion?</mj-accordion-title>
 *             <mj-accordion-text>
 *               <span style="line-height:20px">
 *                 Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way.
 *               </span>
 *             </mj-accordion-text>
 *           </mj-accordion-element>
 *           <mj-accordion-element>
 *             <mj-accordion-title>How it works</mj-accordion-title>
 *             <mj-accordion-text>
 *               <span style="line-height:20px">
 *                 Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once.
 *               </span>
 *             </mj-accordion-text>
 *           </mj-accordion-element>
 *         </mj-accordion>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * border | string | CSS border format | 2px solid black
 * container-background-color | n/a | background-color of the cell | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font | Ubuntu, Helvetica, Arial, sans-serif
 * icon-align | n/a | icon alignment | middle
 * icon-height | px | icon width | 32px
 * icon-position | n/a | display icon left or right | right
 * icon-unwrapped-alt | n/a | alt text when accordion is unwrapped | -
 * icon-unwrapped-url | n/a | icon when accordion is unwrapped | https://i.imgur.com/w4uTygT.png
 * icon-width | px | icon height | 32px
 * icon-wrapped-alt | n/a | alt text when accordion is wrapped | +
 * icon-wrapped-url | n/a | icon when accordion is wrapped | https://i.imgur.com/bIXv1bk.png
 * padding | px | padding | 10px 25px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 * ### mj-accordion-element
 *
 * Creates an accordion title/text pair.
 * An accordion can have any number of these pairs.
 *
 *
 * Inheritance applies between attributes supported in both `mj-accordion` and
 * `mj-accordion-element` unless `mj-accordion-element` overrides.
 *
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * border | n/a | border | affects each horizontal border in the accordion except the top one
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font | Ubuntu, Helvetica, Arial, sans-serif
 * icon-align | n/a | icon alignment | middle
 * icon-height | n/a | icon width | 32px
 * icon-position | n/a | display icon left or right | right
 * icon-unwrapped-alt | n/a | alt text when accordion is unwrapped | -
 * icon-unwrapped-url | n/a | icon when accordion is unwrapped | https://i.imgur.com/w4uTygT.png
 * icon-width | n/a | icon height | 32px
 * icon-wrapped-alt | n/a | alt text when accordion is wrapped | +
 * icon-wrapped-url | n/a | icon when accordion is wrapped | https://i.imgur.com/bIXv1bk.png
 *
 * ### mj-accordion-title
 *
 * The title in a title/text pair.
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * color | n/a | text color | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font family | Ubuntu, Helvetica, Arial, sans-serif
 * font-size | px | font size | 13px
 * padding | px | padding | 16px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 * ### mj-accordion-text
 *
 * The text in a title/text pair.
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * color | n/a | text color | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font family | Ubuntu, Helvetica, Arial, sans-serif
 * font-size | px | font size | 13px
 * font-weight | number | text thickness | n/a
 * letter-spacing | px,em | letter spacing | none
 * line-height | px | space between the lines | 1
 * padding | px | padding | 16px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-accordion-element
 */
export let MjAccordionElement = createComponent<MjAccordionElementProps>('mj-accordion-element', false);

export type MjAccordionTextProps = {
  /** background color */
  backgroundColor?: string;
  /** font size */
  fontSize?: MjUnit<'px'>;
  /** font family */
  fontFamily?: string;
  /** text thickness */
  fontWeight?: string;
  /** letter spacing */
  letterSpacing?: MjUnit<'px' | 'em'>;
  /** space between the lines */
  lineHeight?: MjUnit<'px' | '%' | ''>;
  /** text color */
  color?: string;
  /** padding bottom */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** padding left */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** padding right */
  paddingRight?: MjUnit<'px' | '%'>;
  /** padding top */
  paddingTop?: MjUnit<'px' | '%'>;
  /** padding */
  padding?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-accordion
 *
 *
 *
 *
 *
 * `mj-accordion` is an interactive MJML component to stack content in tabs, so the information is collapsed and only the titles are visible. Readers can interact by clicking on the tabs to reveal the content, providing a great experience on mobile devices where space is scarce.
 *
 *
 *   `mj-accordion-text` and `mj-accordion-title` are "ending tags", which means they can contain HTML code which will be left as it is, so they can contain HTML tags with attributes, but they cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 *
 * ```xml
 * <mjml>
 *   <mj-head>
 *     <mj-attributes>
 *       <mj-accordion border="none" padding="1px" />
 *       <mj-accordion-element icon-wrapped-url="https://i.imgur.com/Xvw0vjq.png" icon-unwrapped-url="https://i.imgur.com/KKHenWa.png" icon-height="24px" icon-width="24px" />
 *       <mj-accordion-title font-family="Roboto, Open Sans, Helvetica, Arial, sans-serif" background-color="#fff" color="#031017" padding="15px" font-size="18px" />
 *       <mj-accordion-text font-family="Open Sans, Helvetica, Arial, sans-serif" background-color="#fafafa" padding="15px" color="#505050" font-size="14px" />
 *     </mj-attributes>
 *   </mj-head>
 *
 *   <mj-body>
 *     <mj-section padding="20px" background-color="#ffffff">
 *       <mj-column background-color="#dededd">
 *         <mj-accordion>
 *           <mj-accordion-element>
 *             <mj-accordion-title>Why use an accordion?</mj-accordion-title>
 *             <mj-accordion-text>
 *               <span style="line-height:20px">
 *                 Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way.
 *               </span>
 *             </mj-accordion-text>
 *           </mj-accordion-element>
 *           <mj-accordion-element>
 *             <mj-accordion-title>How it works</mj-accordion-title>
 *             <mj-accordion-text>
 *               <span style="line-height:20px">
 *                 Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once.
 *               </span>
 *             </mj-accordion-text>
 *           </mj-accordion-element>
 *         </mj-accordion>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * border | string | CSS border format | 2px solid black
 * container-background-color | n/a | background-color of the cell | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font | Ubuntu, Helvetica, Arial, sans-serif
 * icon-align | n/a | icon alignment | middle
 * icon-height | px | icon width | 32px
 * icon-position | n/a | display icon left or right | right
 * icon-unwrapped-alt | n/a | alt text when accordion is unwrapped | -
 * icon-unwrapped-url | n/a | icon when accordion is unwrapped | https://i.imgur.com/w4uTygT.png
 * icon-width | px | icon height | 32px
 * icon-wrapped-alt | n/a | alt text when accordion is wrapped | +
 * icon-wrapped-url | n/a | icon when accordion is wrapped | https://i.imgur.com/bIXv1bk.png
 * padding | px | padding | 10px 25px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 * ### mj-accordion-element
 *
 * Creates an accordion title/text pair.
 * An accordion can have any number of these pairs.
 *
 *
 * Inheritance applies between attributes supported in both `mj-accordion` and
 * `mj-accordion-element` unless `mj-accordion-element` overrides.
 *
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * border | n/a | border | affects each horizontal border in the accordion except the top one
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font | Ubuntu, Helvetica, Arial, sans-serif
 * icon-align | n/a | icon alignment | middle
 * icon-height | n/a | icon width | 32px
 * icon-position | n/a | display icon left or right | right
 * icon-unwrapped-alt | n/a | alt text when accordion is unwrapped | -
 * icon-unwrapped-url | n/a | icon when accordion is unwrapped | https://i.imgur.com/w4uTygT.png
 * icon-width | n/a | icon height | 32px
 * icon-wrapped-alt | n/a | alt text when accordion is wrapped | +
 * icon-wrapped-url | n/a | icon when accordion is wrapped | https://i.imgur.com/bIXv1bk.png
 *
 * ### mj-accordion-title
 *
 * The title in a title/text pair.
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * color | n/a | text color | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font family | Ubuntu, Helvetica, Arial, sans-serif
 * font-size | px | font size | 13px
 * padding | px | padding | 16px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 * ### mj-accordion-text
 *
 * The text in a title/text pair.
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * color | n/a | text color | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font family | Ubuntu, Helvetica, Arial, sans-serif
 * font-size | px | font size | 13px
 * font-weight | number | text thickness | n/a
 * letter-spacing | px,em | letter spacing | none
 * line-height | px | space between the lines | 1
 * padding | px | padding | 16px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 *
 * This component is an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-accordion-text
 */
export let MjAccordionText = createComponent<MjAccordionTextProps>('mj-accordion-text', true);

export type MjAccordionTitleProps = {
  /** background color */
  backgroundColor?: string;
  /** text color */
  color?: string;
  /** font size */
  fontSize?: MjUnit<'px'>;
  /** font family */
  fontFamily?: string;
  /** padding bottom */
  paddingBottom?: MjUnit<'px' | '%'>;
  /** padding left */
  paddingLeft?: MjUnit<'px' | '%'>;
  /** padding right */
  paddingRight?: MjUnit<'px' | '%'>;
  /** padding top */
  paddingTop?: MjUnit<'px' | '%'>;
  /** padding */
  padding?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-accordion
 *
 *
 *
 *
 *
 * `mj-accordion` is an interactive MJML component to stack content in tabs, so the information is collapsed and only the titles are visible. Readers can interact by clicking on the tabs to reveal the content, providing a great experience on mobile devices where space is scarce.
 *
 *
 *   `mj-accordion-text` and `mj-accordion-title` are "ending tags", which means they can contain HTML code which will be left as it is, so they can contain HTML tags with attributes, but they cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 *
 * ```xml
 * <mjml>
 *   <mj-head>
 *     <mj-attributes>
 *       <mj-accordion border="none" padding="1px" />
 *       <mj-accordion-element icon-wrapped-url="https://i.imgur.com/Xvw0vjq.png" icon-unwrapped-url="https://i.imgur.com/KKHenWa.png" icon-height="24px" icon-width="24px" />
 *       <mj-accordion-title font-family="Roboto, Open Sans, Helvetica, Arial, sans-serif" background-color="#fff" color="#031017" padding="15px" font-size="18px" />
 *       <mj-accordion-text font-family="Open Sans, Helvetica, Arial, sans-serif" background-color="#fafafa" padding="15px" color="#505050" font-size="14px" />
 *     </mj-attributes>
 *   </mj-head>
 *
 *   <mj-body>
 *     <mj-section padding="20px" background-color="#ffffff">
 *       <mj-column background-color="#dededd">
 *         <mj-accordion>
 *           <mj-accordion-element>
 *             <mj-accordion-title>Why use an accordion?</mj-accordion-title>
 *             <mj-accordion-text>
 *               <span style="line-height:20px">
 *                 Because emails with a lot of content are most of the time a very bad experience on mobile, mj-accordion comes handy when you want to deliver a lot of information in a concise way.
 *               </span>
 *             </mj-accordion-text>
 *           </mj-accordion-element>
 *           <mj-accordion-element>
 *             <mj-accordion-title>How it works</mj-accordion-title>
 *             <mj-accordion-text>
 *               <span style="line-height:20px">
 *                 Content is stacked into tabs and users can expand them at will. If responsive styles are not supported (mostly on desktop clients), tabs are then expanded and your content is readable at once.
 *               </span>
 *             </mj-accordion-text>
 *           </mj-accordion-element>
 *         </mj-accordion>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * border | string | CSS border format | 2px solid black
 * container-background-color | n/a | background-color of the cell | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font | Ubuntu, Helvetica, Arial, sans-serif
 * icon-align | n/a | icon alignment | middle
 * icon-height | px | icon width | 32px
 * icon-position | n/a | display icon left or right | right
 * icon-unwrapped-alt | n/a | alt text when accordion is unwrapped | -
 * icon-unwrapped-url | n/a | icon when accordion is unwrapped | https://i.imgur.com/w4uTygT.png
 * icon-width | px | icon height | 32px
 * icon-wrapped-alt | n/a | alt text when accordion is wrapped | +
 * icon-wrapped-url | n/a | icon when accordion is wrapped | https://i.imgur.com/bIXv1bk.png
 * padding | px | padding | 10px 25px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 * ### mj-accordion-element
 *
 * Creates an accordion title/text pair.
 * An accordion can have any number of these pairs.
 *
 *
 * Inheritance applies between attributes supported in both `mj-accordion` and
 * `mj-accordion-element` unless `mj-accordion-element` overrides.
 *
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * border | n/a | border | affects each horizontal border in the accordion except the top one
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font | Ubuntu, Helvetica, Arial, sans-serif
 * icon-align | n/a | icon alignment | middle
 * icon-height | n/a | icon width | 32px
 * icon-position | n/a | display icon left or right | right
 * icon-unwrapped-alt | n/a | alt text when accordion is unwrapped | -
 * icon-unwrapped-url | n/a | icon when accordion is unwrapped | https://i.imgur.com/w4uTygT.png
 * icon-width | n/a | icon height | 32px
 * icon-wrapped-alt | n/a | alt text when accordion is wrapped | +
 * icon-wrapped-url | n/a | icon when accordion is wrapped | https://i.imgur.com/bIXv1bk.png
 *
 * ### mj-accordion-title
 *
 * The title in a title/text pair.
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * color | n/a | text color | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font family | Ubuntu, Helvetica, Arial, sans-serif
 * font-size | px | font size | 13px
 * padding | px | padding | 16px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 * ### mj-accordion-text
 *
 * The text in a title/text pair.
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * background-color | n/a | background color | n/a
 * color | n/a | text color | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * font-family | n/a | font family | Ubuntu, Helvetica, Arial, sans-serif
 * font-size | px | font size | 13px
 * font-weight | number | text thickness | n/a
 * letter-spacing | px,em | letter spacing | none
 * line-height | px | space between the lines | 1
 * padding | px | padding | 16px
 * padding-bottom | px | padding bottom | n/a
 * padding-left | px | padding left | n/a
 * padding-right | px | padding right | n/a
 * padding-top | px | padding top | n/a
 *
 *
 * This component is an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-accordion-title
 */
export let MjAccordionTitle = createComponent<MjAccordionTitleProps>('mj-accordion-title', true);

export type MjCarouselProps = {
  /** horizontal alignment */
  align?: 'left' | 'center' | 'right';
  /** border radius */
  borderRadius?: MjUnit<'px' | '%'>;
  /** column background color */
  containerBackgroundColor?: string;
  /** width of the icons on left and right of the main image */
  iconWidth?: MjUnit<'px' | '%'>;
  /** icon on the left of the main image */
  leftIcon?: string;
  padding?: MjUnit<'px' | '%'>;
  paddingTop?: MjUnit<'px' | '%'>;
  paddingBottom?: MjUnit<'px' | '%'>;
  paddingLeft?: MjUnit<'px' | '%'>;
  paddingRight?: MjUnit<'px' | '%'>;
  /** icon on the right of the main image */
  rightIcon?: string;
  /** display or not the thumbnails (visible */
  thumbnails?: 'visible' | 'hidden';
  /** border of the thumbnails */
  tbBorder?: string;
  /** border-radius of the thumbnails */
  tbBorderRadius?: MjUnit<'px' | '%'>;
  /** css border color of the hovered thumbnail */
  tbHoverBorderColor?: string;
  /** css border color of the selected thumbnail */
  tbSelectedBorderColor?: string;
  /** thumbnail width */
  tbWidth?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-carousel
 *
 *
 *
 *
 *
 * `mj-carousel` displays a gallery of images or "carousel". Readers can interact by hovering and clicking on thumbnails depending on the email client they use.
 *
 * This component enables you to set the styles of the carousel elements.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-carousel>
 *           <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" />
 *           <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" />
 *           <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" />
 *         </mj-carousel>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 *   `mj-carousel-image` is an "ending tag", which means it can contain HTML code which will be left as it is, so it can contain HTML tags with attributes, but it cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * align | string | horizontal alignment | center
 * container-background-color | string | column background color | none
 * border-radius | px | border radius | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * icon-width | px | width of the icons on left and right of the main image | 44px
 * left-icon | url | icon on the left of the main image | https://i.imgur.com/xTh3hln.png
 * right-icon | url | icon on the right of the main image | https://i.imgur.com/os7o9kz.png
 * tb-border | css border format | border of the thumbnails | none
 * tb-border-radius | px | border-radius of the thumbnails | none
 * tb-hover-border-color | string | css border color of the hovered thumbnail | none
 * tb-selected-border-color | string | css border color of the selected thumbnail | none
 * tb-width | px | thumbnail width | null
 * thumbnails | String | display or not the thumbnails (visible | hidden)
 *
 * ### mj-carousel-image
 *
 * This component enables you to add and style the images in the carousel.
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * alt | string | image description | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * href | url | link to redirect to on click | n/a
 * rel | string | specify the rel attribute | n/a
 * src | url | image source | n/a
 * target | string | link target on click | \_blank
 * thumbnails-src | url | image source to have a thumbnail different than the image it's linked to | null
 * title | string | tooltip & accessibility | n/a
 *
 *
 * This component is not an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-carousel
 */
export let MjCarousel = createComponent<MjCarouselProps>('mj-carousel', false);

export type MjCarouselImageProps = {
  /** image description */
  alt?: string;
  /** link to redirect to on click */
  href?: string;
  /** specify the rel attribute */
  rel?: string;
  /** link target on click */
  target?: string;
  /** tooltip & accessibility */
  title?: string;
  /** image source */
  src?: string;
  /** image source to have a thumbnail different than the image it's linked to */
  thumbnailsSrc?: string;
  /** border radius */
  borderRadius?: MjUnit<'px' | '%'>;
  /** border of the thumbnails */
  tbBorder?: string;
  /** border-radius of the thumbnails */
  tbBorderRadius?: MjUnit<'px' | '%'>;
};

/**
 * ## mj-carousel
 *
 *
 *
 *
 *
 * `mj-carousel` displays a gallery of images or "carousel". Readers can interact by hovering and clicking on thumbnails depending on the email client they use.
 *
 * This component enables you to set the styles of the carousel elements.
 *
 * ```xml
 * <mjml>
 *   <mj-body>
 *     <mj-section>
 *       <mj-column>
 *         <mj-carousel>
 *           <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" />
 *           <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" />
 *           <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" />
 *         </mj-carousel>
 *       </mj-column>
 *     </mj-section>
 *   </mj-body>
 * </mjml>
 * ```
 *
 *
 *
 *
 *
 *
 *
 *
 *   `mj-carousel-image` is an "ending tag", which means it can contain HTML code which will be left as it is, so it can contain HTML tags with attributes, but it cannot contain other MJML components. More information about ending tags in this section.
 *
 *
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * align | string | horizontal alignment | center
 * container-background-color | string | column background color | none
 * border-radius | px | border radius | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * icon-width | px | width of the icons on left and right of the main image | 44px
 * left-icon | url | icon on the left of the main image | https://i.imgur.com/xTh3hln.png
 * right-icon | url | icon on the right of the main image | https://i.imgur.com/os7o9kz.png
 * tb-border | css border format | border of the thumbnails | none
 * tb-border-radius | px | border-radius of the thumbnails | none
 * tb-hover-border-color | string | css border color of the hovered thumbnail | none
 * tb-selected-border-color | string | css border color of the selected thumbnail | none
 * tb-width | px | thumbnail width | null
 * thumbnails | String | display or not the thumbnails (visible | hidden)
 *
 * ### mj-carousel-image
 *
 * This component enables you to add and style the images in the carousel.
 *
 * attribute | unit | description | default value
 * ----------|------|-------------|---------------
 * alt | string | image description | n/a
 * css-class | string | class name, added to the root HTML element created | n/a
 * href | url | link to redirect to on click | n/a
 * rel | string | specify the rel attribute | n/a
 * src | url | image source | n/a
 * target | string | link target on click | \_blank
 * thumbnails-src | url | image source to have a thumbnail different than the image it's linked to | null
 * title | string | tooltip & accessibility | n/a
 *
 *
 * This component is an [ending tag](https://documentation.mjml.io/#ending-tags).
 *
 * @link https://documentation.mjml.io/#mj-carousel-image
 */
export let MjCarouselImage = createComponent<MjCarouselImageProps>('mj-carousel-image', true);
