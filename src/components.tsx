import React from 'react';

export type MjUnit<Suffix extends string> = `${number}${Suffix}`;

export type MjmlBaseProps = {
  /** class name, added to the root HTML element created */
  className?: string;
  /** class name, added to the root HTML element created */
  'css-class'?: string;
  children?: React.ReactNode;
};

export type MjmlComponent<Props> = React.FC<Props & MjmlBaseProps>;

function createComponent<Props>(Name: string): MjmlComponent<Props> {
  const Component: MjmlComponent<Props> = ({ className, 'css-class': cssClass, children, ...rest }) => {
    return (
      // @ts-expect-error
      <Name {...rest} css-class={cssClass ?? className}>
        {children}
      </Name>
    );
  };
  Component.displayName = Name;

  return Component;
}

export type MjBodyProps = {
  /** email's width */
  width?: MjUnit<'px'>;
  /** the general background color */
  'background-color'?: string;
};

/**
 * This is the starting point of your email.
 *
 * @link https://documentation.mjml.io/#mj-body
 */
export let MjBody = createComponent<MjBodyProps>('mj-body');

export type MjHeadProps = {};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-head
 */
export let MjHead = createComponent<MjHeadProps>('mj-head');

export type MjAttributesProps = {};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-attributes
 */
export let MjAttributes = createComponent<MjAttributesProps>('mj-attributes');

export type MjBreakpointProps = {
  /** breakpoint's value */
  width?: MjUnit<'px'>;
};

/**
 * This tag allows you to control on which breakpoint the layout should go desktop/mobile.
 *
 * @link https://documentation.mjml.io/#mj-breakpoint
 */
export let MjBreakpoint = createComponent<MjBreakpointProps>('mj-breakpoint');

export type MjHtmlAttributesProps = {};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-html-attributes
 */
export let MjHtmlAttributes = createComponent<MjHtmlAttributesProps>('mj-html-attributes');

export type MjFontProps = {
  /** name of the font */
  name?: string;
  /** URL of a hosted CSS file */
  href?: string;
};

/**
 * This tag imports fonts.
 * The tag has effect only if the template uses the font, too.
 * The href attribute points to a hosted css file; that file contains a @font-face declaration.
 * Example: https://fonts
 * .googleapis.com/css?family=Raleway
 *
 * @link https://documentation.mjml.io/#mj-font
 */
export let MjFont = createComponent<MjFontProps>('mj-font');

export type MjPreviewProps = {};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-preview
 */
export let MjPreview = createComponent<MjPreviewProps>('mj-preview');

export type MjStyleProps = {
  /** set to "inline" to inline styles */
  inline?: string;
};

/**
 * This tag allows you to set CSS styles that will be applied to the HTML in your MJML document as well as the HTML outputted. The CSS styles will be added to the head of the rendered HTML by default, but can also be inlined by using the inline="inline" attribute.
 *
 * @link https://documentation.mjml.io/#mj-style
 */
export let MjStyle = createComponent<MjStyleProps>('mj-style');

export type MjTitleProps = {};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-title
 */
export let MjTitle = createComponent<MjTitleProps>('mj-title');

export type MjHeroProps = {
  /** choose if the height is fixed based on the height attribute or fluid */
  mode?: string;
  /** hero section height (required for fixed-height mode) */
  height?: MjUnit<'px' | '%'>;
  /** absolute background url */
  'background-url'?: string;
  /** width of the image used, mandatory */
  'background-width'?: MjUnit<'px' | '%'>;
  /** height of the image used, mandatory */
  'background-height'?: MjUnit<'px' | '%'>;
  /** background image position */
  'background-position'?: string;
  /** border radius */
  'border-radius'?: string;
  'container-background-color'?: string;
  'inner-background-color'?: string;
  'inner-padding'?: MjUnit<'px' | '%'>;
  'inner-padding-top'?: MjUnit<'px' | '%'>;
  'inner-padding-left'?: MjUnit<'px' | '%'>;
  'inner-padding-right'?: MjUnit<'px' | '%'>;
  'inner-padding-bottom'?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** bottom offset */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** left offset */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** right offset */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** top offset */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** hero background color */
  'background-color'?: string;
  /** content vertical alignment */
  'vertical-align'?: 'top' | 'bottom' | 'middle';
};

/**
 * This element displays a hero image.
 * It behaves like an mj-section with a single mj-column.
 *
 * @link https://documentation.mjml.io/#mj-hero
 */
export let MjHero = createComponent<MjHeroProps>('mj-hero');

export type MjButtonProps = {
  /** horizontal alignment */
  align?: 'left' | 'center' | 'right';
  /** button background-color */
  'background-color'?: string;
  /** css border format */
  'border-bottom'?: string;
  /** css border format */
  'border-left'?: string;
  /** border radius */
  'border-radius'?: string;
  /** css border format */
  'border-right'?: string;
  /** css border format */
  'border-top'?: string;
  /** css border format */
  border?: string;
  /** text color */
  color?: string;
  /** button container background color */
  'container-background-color'?: string;
  /** font name */
  'font-family'?: string;
  /** text size */
  'font-size'?: MjUnit<'px'>;
  /** normal/italic/oblique */
  'font-style'?: string;
  /** text thickness */
  'font-weight'?: string;
  /** button height */
  height?: MjUnit<'px' | '%'>;
  /** link to be triggered when the button is clicked */
  href?: string;
  name?: string;
  /** tooltip & accessibility */
  title?: string;
  /** inner button padding */
  'inner-padding'?: MjUnit<'px' | '%'>;
  /** letter-spacing */
  'letter-spacing'?: MjUnit<'px' | 'em'>;
  /** line-height on link */
  'line-height'?: MjUnit<'px' | '%' | ''>;
  /** bottom offset */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** left offset */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** right offset */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** top offset */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** specify the rel attribute for the button link */
  rel?: string;
  /** specify the target attribute for the button link */
  target?: string;
  /** underline/overline/none */
  'text-decoration'?: string;
  /** capitalize/uppercase/lowercase */
  'text-transform'?: string;
  /** vertical alignment */
  'vertical-align'?: 'top' | 'bottom' | 'middle';
  /** text-align button content */
  'text-align'?: 'left' | 'right' | 'center';
  /** button width */
  width?: MjUnit<'px' | '%'>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-button
 */
export let MjButton = createComponent<MjButtonProps>('mj-button');

export type MjColumnProps = {
  /** background color for a column */
  'background-color'?: string;
  /** css border format */
  border?: string;
  /** css border format */
  'border-bottom'?: string;
  /** css border format */
  'border-left'?: string;
  /** border radius */
  'border-radius'?: MjUnit<'px' | '%'>;
  /** css border format */
  'border-right'?: string;
  /** css border format */
  'border-top'?: string;
  direction?: 'ltr' | 'rtl';
  /** requires: a padding, inner background color for column */
  'inner-background-color'?: string;
  /** section bottom offset */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** section left offset */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** section right offset */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** section top offset */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** css border format */
  'inner-border'?: string;
  /** css border format ; requires a padding */
  'inner-border-bottom'?: string;
  /** css border format ; requires a padding */
  'inner-border-left'?: string;
  /** border radius ; requires a padding */
  'inner-border-radius'?: MjUnit<'px' | '%'>;
  /** css border format ; requires a padding */
  'inner-border-right'?: string;
  /** css border format ; requires a padding */
  'inner-border-top'?: string;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** middle/top/bottom (note: middle works only when adjacent mj-column is also set to middle) */
  'vertical-align'?: 'top' | 'bottom' | 'middle';
  /** column width */
  width?: MjUnit<'px' | '%'>;
};

/**
 * Columns enable you to horizontally organize the content within your sections. They must be located under mj-section tags in order to be considered by the engine.
 * To be responsive, columns are expressed in terms of percentage.
 *
 * @link https://documentation.mjml.io/#mj-column
 */
export let MjColumn = createComponent<MjColumnProps>('mj-column');

export type MjDividerProps = {
  /** divider color */
  'border-color'?: string;
  /** dashed/dotted/solid */
  'border-style'?: string;
  /** divider's border width */
  'border-width'?: MjUnit<'px'>;
  /** inner element background color */
  'container-background-color'?: string;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** bottom offset */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** left offset */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** right offset */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** top offset */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** divider width */
  width?: MjUnit<'px' | '%'>;
  /** alignment */
  align?: 'left' | 'center' | 'right';
};

/**
 * Displays a horizontal divider that can be customized like a HTML border.
 *
 * @link https://documentation.mjml.io/#mj-divider
 */
export let MjDivider = createComponent<MjDividerProps>('mj-divider');

export type MjGroupProps = {
  /** background color for a group */
  'background-color'?: string;
  /** set the display order of direct children */
  direction?: 'ltr' | 'rtl';
  /** middle/top/bottom */
  'vertical-align'?: 'top' | 'bottom' | 'middle';
  /** group width */
  width?: MjUnit<'px' | '%'>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-group
 */
export let MjGroup = createComponent<MjGroupProps>('mj-group');

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
  'border-bottom'?: string;
  /** css border definition */
  'border-left'?: string;
  /** css border definition */
  'border-right'?: string;
  /** css border definition */
  'border-top'?: string;
  /** border radius */
  'border-radius'?: MjUnit<'px' | '%'>;
  /** inner element background color */
  'container-background-color'?: string;
  /** if "true", will be full width on mobile even if width is set */
  'fluid-on-mobile'?: boolean;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** bottom offset */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** left offset */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** right offset */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** top offset */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** link target on click */
  target?: string;
  /** image width */
  width?: MjUnit<'px'>;
  /** image height */
  height?: MjUnit<'px' | 'auto'>;
  'max-height'?: MjUnit<'px' | '%'>;
  'font-size'?: MjUnit<'px'>;
  /** reference to image map, be careful, it isn't supported everywhere */
  usemap?: string;
};

/**
 * Displays a responsive image in your email. It is similar to the HTML <img /> tag.
 * Note that if no width is provided, the image will use the parent column width.
 *
 * @link https://documentation.mjml.io/#mj-image
 */
export let MjImage = createComponent<MjImageProps>('mj-image');

export type MjRawProps = {
  position?: 'file-start';
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-raw
 */
export let MjRaw = createComponent<MjRawProps>('mj-raw');

export type MjSectionProps = {
  /** section color */
  'background-color'?: string;
  /** background url */
  'background-url'?: string;
  /** css background repeat */
  'background-repeat'?: 'repeat' | 'no-repeat';
  /** css background size */
  'background-size'?: string;
  /** css background position (see outlook limitations below) */
  'background-position'?: string;
  /** css background position x */
  'background-position-x'?: string;
  /** css background position y */
  'background-position-y'?: string;
  /** css border format */
  border?: string;
  /** css border format */
  'border-bottom'?: string;
  /** css border format */
  'border-left'?: string;
  /** border radius */
  'border-radius'?: string;
  /** css border format */
  'border-right'?: string;
  /** css border format */
  'border-top'?: string;
  /** set the display order of direct children */
  direction?: 'ltr' | 'rtl';
  /** make the section full-width */
  'full-width'?: 'full-width' | 'false' | '';
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** section top offset */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** section bottom offset */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** section left offset */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** section right offset */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** css text-align */
  'text-align'?: 'left' | 'center' | 'right';
  'text-padding'?: MjUnit<'px' | '%'>;
};

/**
 * Sections are intended to be used as rows within your email.
 * They will be used to structure the layout.
 *
 * @link https://documentation.mjml.io/#mj-section
 */
export let MjSection = createComponent<MjSectionProps>('mj-section');

export type MjSpacerProps = {
  border?: string;
  'border-bottom'?: string;
  'border-left'?: string;
  'border-right'?: string;
  'border-top'?: string;
  /** inner element background color */
  'container-background-color'?: string;
  /** bottom offset */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** left offset */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** right offset */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** top offset */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** spacer height */
  height?: MjUnit<'px' | '%'>;
};

/**
 * Displays a blank space.
 *
 * @link https://documentation.mjml.io/#mj-spacer
 */
export let MjSpacer = createComponent<MjSpacerProps>('mj-spacer');

export type MjTextProps = {
  /** left/right/center/justify */
  align?: 'left' | 'right' | 'center' | 'justify';
  'background-color'?: string;
  /** text color */
  color?: string;
  /** inner element background color */
  'container-background-color'?: string;
  /** font */
  'font-family'?: string;
  /** text size */
  'font-size'?: MjUnit<'px'>;
  /** normal/italic/oblique */
  'font-style'?: string;
  /** text thickness */
  'font-weight'?: string;
  /** The height of the element */
  height?: MjUnit<'px' | '%'>;
  /** letter spacing */
  'letter-spacing'?: MjUnit<'px' | 'em'>;
  /** space between the lines */
  'line-height'?: MjUnit<'px' | '%' | ''>;
  /** bottom offset */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** left offset */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** right offset */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** top offset */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** underline/overline/line-through/none */
  'text-decoration'?: string;
  /** uppercase/lowercase/capitalize */
  'text-transform'?: string;
  'vertical-align'?: 'top' | 'bottom' | 'middle';
};

/**
 * This tag allows you to display text in your email.
 *
 * @link https://documentation.mjml.io/#mj-text
 */
export let MjText = createComponent<MjTextProps>('mj-text');

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
  'container-background-color'?: string;
  /** text header & footer color */
  color?: string;
  /** font name */
  'font-family'?: string;
  /** font size */
  'font-size'?: MjUnit<'px'>;
  'font-weight'?: string;
  /** space between lines */
  'line-height'?: MjUnit<'px' | '%' | ''>;
  /** bottom offset */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** left offset */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** right offset */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** top offset */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** specify the role attribute */
  role?: 'none' | 'presentation';
  /** sets the table layout. */
  'table-layout'?: 'auto' | 'fixed' | 'initial' | 'inherit';
  'vertical-align'?: 'top' | 'bottom' | 'middle';
  /** table width */
  width?: MjUnit<'px' | '%'>;
};

/**
 * This tag allows you to display table and filled it with data. It only accepts plain HTML.
 *
 * @link https://documentation.mjml.io/#mj-table
 */
export let MjTable = createComponent<MjTableProps>('mj-table');

export type MjWrapperProps = {
  /** section color */
  'background-color'?: string;
  /** background url */
  'background-url'?: string;
  /** css background repeat */
  'background-repeat'?: 'repeat' | 'no-repeat';
  /** css background size */
  'background-size'?: string;
  /** css background position (see outlook limitations in mj-section doc) */
  'background-position'?: string;
  /** css background position x */
  'background-position-x'?: string;
  /** css background position y */
  'background-position-y'?: string;
  /** css border format */
  border?: string;
  /** css border format */
  'border-bottom'?: string;
  /** css border format */
  'border-left'?: string;
  /** border radius */
  'border-radius'?: string;
  /** css border format */
  'border-right'?: string;
  /** css border format */
  'border-top'?: string;
  direction?: 'ltr' | 'rtl';
  /** make the wrapper full-width */
  'full-width'?: 'full-width' | 'false' | '';
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  /** section top offset */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** section bottom offset */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** section left offset */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** section right offset */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** css text-align */
  'text-align'?: 'left' | 'center' | 'right';
  'text-padding'?: MjUnit<'px' | '%'>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-wrapper
 */
export let MjWrapper = createComponent<MjWrapperProps>('mj-wrapper');

export type MjSocialProps = {
  /** left/right/center */
  align?: 'left' | 'right' | 'center';
  /** border radius */
  'border-radius'?: MjUnit<'px' | '%'>;
  /** inner element background color */
  'container-background-color'?: string;
  /** text color */
  color?: string;
  /** font name */
  'font-family'?: string;
  /** font size */
  'font-size'?: MjUnit<'px'>;
  /** font style */
  'font-style'?: string;
  /** font weight */
  'font-weight'?: string;
  /** icon size (width and height) */
  'icon-size'?: MjUnit<'px' | '%'>;
  /** icon height, overrides icon-size */
  'icon-height'?: MjUnit<'px' | '%'>;
  /** padding around the icons */
  'icon-padding'?: MjUnit<'px' | '%'>;
  /** social network surrounding padding */
  'inner-padding'?: MjUnit<'px' | '%'>;
  /** space between lines */
  'line-height'?: MjUnit<'px' | '%' | ''>;
  /** vertical/horizontal */
  mode?: 'horizontal' | 'vertical';
  /** bottom offset */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** left offset */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** right offset */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** top offset */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** supports up to 4 parameters */
  padding?: MjUnit<'px' | '%'>;
  'table-layout'?: 'auto' | 'fixed';
  /** padding around the texts */
  'text-padding'?: MjUnit<'px' | '%'>;
  /** underline/overline/none */
  'text-decoration'?: string;
  'vertical-align'?: 'top' | 'bottom' | 'middle';
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-social
 */
export let MjSocial = createComponent<MjSocialProps>('mj-social');

export type MjSocialElementProps = {
  align?: 'left' | 'center' | 'right';
  'background-color'?: string;
  color?: string;
  'border-radius'?: MjUnit<'px'>;
  'font-family'?: string;
  'font-size'?: MjUnit<'px'>;
  'font-style'?: string;
  'font-weight'?: string;
  href?: string;
  'icon-size'?: MjUnit<'px' | '%'>;
  'icon-height'?: MjUnit<'px' | '%'>;
  'icon-padding'?: MjUnit<'px' | '%'>;
  'line-height'?: MjUnit<'px' | '%' | ''>;
  name?: string;
  'padding-bottom'?: MjUnit<'px' | '%'>;
  'padding-left'?: MjUnit<'px' | '%'>;
  'padding-right'?: MjUnit<'px' | '%'>;
  'padding-top'?: MjUnit<'px' | '%'>;
  padding?: MjUnit<'px' | '%'>;
  'text-padding'?: MjUnit<'px' | '%'>;
  rel?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  alt?: string;
  title?: string;
  target?: string;
  'text-decoration'?: string;
  'vertical-align'?: 'top' | 'middle' | 'bottom';
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-social-element
 */
export let MjSocialElement = createComponent<MjSocialElementProps>('mj-social-element');

export type MjNavbarProps = {
  /** align content left/center/right */
  align?: 'left' | 'center' | 'right';
  'base-url'?: string;
  /** activate the hamburger navigation on mobile if the value is hamburger */
  hamburger?: string;
  /** hamburger icon alignment, left/center/right (hamburger mode required) */
  'ico-align'?: 'left' | 'center' | 'right';
  /** char code for a custom open icon (hamburger mode required) */
  'ico-open'?: string;
  /** char code for a custom close icon (hamburger mode required) */
  'ico-close'?: string;
  /** hamburger icon color (hamburger mode required) */
  'ico-color'?: string;
  /** hamburger icon size (hamburger mode required) */
  'ico-font-size'?: MjUnit<'px' | '%'>;
  /** hamburger icon font (only on hamburger mode) */
  'ico-font-family'?: string;
  /** hamburger icon text transformation none/capitalize/uppercase/lowercase (hamburger mode required) */
  'ico-text-transform'?: string;
  /** hamburger icon padding, supports up to 4 parameters (hamburger mode required) */
  'ico-padding'?: MjUnit<'px' | '%'>;
  /** hamburger icon left offset (hamburger mode required) */
  'ico-padding-left'?: MjUnit<'px' | '%'>;
  /** hamburger icon top offset (hamburger mode required) */
  'ico-padding-top'?: MjUnit<'px' | '%'>;
  /** hamburger icon right offset (hamburger mode required) */
  'ico-padding-right'?: MjUnit<'px' | '%'>;
  /** hamburger icon bottom offset (hamburger mode required) */
  'ico-padding-bottom'?: MjUnit<'px' | '%'>;
  padding?: MjUnit<'px' | '%'>;
  'padding-left'?: MjUnit<'px' | '%'>;
  'padding-top'?: MjUnit<'px' | '%'>;
  'padding-right'?: MjUnit<'px' | '%'>;
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** hamburger icon text decoration none/underline/overline/line-through (hamburger mode required) */
  'ico-text-decoration'?: string;
  /** hamburger icon line height (hamburger mode required) */
  'ico-line-height'?: MjUnit<'px' | '%' | ''>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-navbar
 */
export let MjNavbar = createComponent<MjNavbarProps>('mj-navbar');

export type MjNavbarLinkProps = {
  color?: string;
  'font-family'?: string;
  'font-size'?: MjUnit<'px'>;
  'font-style'?: string;
  'font-weight'?: string;
  href?: string;
  name?: string;
  target?: string;
  rel?: string;
  'letter-spacing'?: MjUnit<'px' | 'em'>;
  'line-height'?: MjUnit<'px' | '%' | ''>;
  'padding-bottom'?: MjUnit<'px' | '%'>;
  'padding-left'?: MjUnit<'px' | '%'>;
  'padding-right'?: MjUnit<'px' | '%'>;
  'padding-top'?: MjUnit<'px' | '%'>;
  padding?: MjUnit<'px' | '%'>;
  'text-decoration'?: string;
  'text-transform'?: string;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-navbar-link
 */
export let MjNavbarLink = createComponent<MjNavbarLinkProps>('mj-navbar-link');

export type MjAccordionProps = {
  /** background-color of the cell */
  'container-background-color'?: string;
  /** CSS border format */
  border?: string;
  /** font */
  'font-family'?: string;
  /** icon alignment */
  'icon-align'?: 'top' | 'middle' | 'bottom';
  /** icon height */
  'icon-width'?: MjUnit<'px' | '%'>;
  /** icon width */
  'icon-height'?: MjUnit<'px' | '%'>;
  /** icon when accordion is wrapped */
  'icon-wrapped-url'?: string;
  /** alt text when accordion is wrapped */
  'icon-wrapped-alt'?: string;
  /** icon when accordion is unwrapped */
  'icon-unwrapped-url'?: string;
  /** alt text when accordion is unwrapped */
  'icon-unwrapped-alt'?: string;
  /** display icon left or right */
  'icon-position'?: 'left' | 'right';
  /** padding bottom */
  'padding-bottom'?: MjUnit<'px' | '%'>;
  /** padding left */
  'padding-left'?: MjUnit<'px' | '%'>;
  /** padding right */
  'padding-right'?: MjUnit<'px' | '%'>;
  /** padding top */
  'padding-top'?: MjUnit<'px' | '%'>;
  /** padding */
  padding?: MjUnit<'px' | '%'>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-accordion
 */
export let MjAccordion = createComponent<MjAccordionProps>('mj-accordion');

export type MjAccordionElementProps = {
  'background-color'?: string;
  border?: string;
  'font-family'?: string;
  'icon-align'?: 'top' | 'middle' | 'bottom';
  'icon-width'?: MjUnit<'px' | '%'>;
  'icon-height'?: MjUnit<'px' | '%'>;
  'icon-wrapped-url'?: string;
  'icon-wrapped-alt'?: string;
  'icon-unwrapped-url'?: string;
  'icon-unwrapped-alt'?: string;
  'icon-position'?: 'left' | 'right';
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-accordion-element
 */
export let MjAccordionElement = createComponent<MjAccordionElementProps>('mj-accordion-element');

export type MjAccordionTextProps = {
  'background-color'?: string;
  'font-size'?: MjUnit<'px'>;
  'font-family'?: string;
  'font-weight'?: string;
  'letter-spacing'?: MjUnit<'px' | 'em'>;
  'line-height'?: MjUnit<'px' | '%' | ''>;
  color?: string;
  'padding-bottom'?: MjUnit<'px' | '%'>;
  'padding-left'?: MjUnit<'px' | '%'>;
  'padding-right'?: MjUnit<'px' | '%'>;
  'padding-top'?: MjUnit<'px' | '%'>;
  padding?: MjUnit<'px' | '%'>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-accordion-text
 */
export let MjAccordionText = createComponent<MjAccordionTextProps>('mj-accordion-text');

export type MjAccordionTitleProps = {
  'background-color'?: string;
  color?: string;
  'font-size'?: MjUnit<'px'>;
  'font-family'?: string;
  'padding-bottom'?: MjUnit<'px' | '%'>;
  'padding-left'?: MjUnit<'px' | '%'>;
  'padding-right'?: MjUnit<'px' | '%'>;
  'padding-top'?: MjUnit<'px' | '%'>;
  padding?: MjUnit<'px' | '%'>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-accordion-title
 */
export let MjAccordionTitle = createComponent<MjAccordionTitleProps>('mj-accordion-title');

export type MjCarouselProps = {
  /** horizontal alignment */
  align?: 'left' | 'center' | 'right';
  /** border radius */
  'border-radius'?: MjUnit<'px' | '%'>;
  /** column background color */
  'container-background-color'?: string;
  /** width of the icons on left and right of the main image */
  'icon-width'?: MjUnit<'px' | '%'>;
  /** icon on the left of the main image */
  'left-icon'?: string;
  padding?: MjUnit<'px' | '%'>;
  'padding-top'?: MjUnit<'px' | '%'>;
  'padding-bottom'?: MjUnit<'px' | '%'>;
  'padding-left'?: MjUnit<'px' | '%'>;
  'padding-right'?: MjUnit<'px' | '%'>;
  /** icon on the right of the main image */
  'right-icon'?: string;
  /** display or not the thumbnails (visible */
  thumbnails?: 'visible' | 'hidden';
  /** border of the thumbnails */
  'tb-border'?: string;
  /** border-radius of the thumbnails */
  'tb-border-radius'?: MjUnit<'px' | '%'>;
  /** css border color of the hovered thumbnail */
  'tb-hover-border-color'?: string;
  /** css border color of the selected thumbnail */
  'tb-selected-border-color'?: string;
  /** thumbnail width */
  'tb-width'?: MjUnit<'px' | '%'>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-carousel
 */
export let MjCarousel = createComponent<MjCarouselProps>('mj-carousel');

export type MjCarouselImageProps = {
  alt?: string;
  href?: string;
  rel?: string;
  target?: string;
  title?: string;
  src?: string;
  'thumbnails-src'?: string;
  'border-radius'?: MjUnit<'px' | '%'>;
  'tb-border'?: string;
  'tb-border-radius'?: MjUnit<'px' | '%'>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-carousel-image
 */
export let MjCarouselImage = createComponent<MjCarouselImageProps>('mj-carousel-image');
