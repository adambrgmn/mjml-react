import { createComponent } from './create-component';
import { MjUnit } from './types';

export type MjBodyProps = {
  /** email's width */
  width?: MjUnit<'px'>;
  /** the general background color */
  backgroundColor?: string;
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
 *
 *
 * @link https://documentation.mjml.io/#mj-button
 */
export let MjButton = createComponent<MjButtonProps>('mj-button');

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
  /** middle/top/bottom (note: middle works only when adjacent mj-column is also set to middle) */
  verticalAlign?: 'top' | 'bottom' | 'middle';
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
 * Displays a horizontal divider that can be customized like a HTML border.
 *
 * @link https://documentation.mjml.io/#mj-divider
 */
export let MjDivider = createComponent<MjDividerProps>('mj-divider');

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
  fullWidth?: 'full-width' | 'false' | '';
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
 * Sections are intended to be used as rows within your email.
 * They will be used to structure the layout.
 *
 * @link https://documentation.mjml.io/#mj-section
 */
export let MjSection = createComponent<MjSectionProps>('mj-section');

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
 * Displays a blank space.
 *
 * @link https://documentation.mjml.io/#mj-spacer
 */
export let MjSpacer = createComponent<MjSpacerProps>('mj-spacer');

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
 * This tag allows you to display table and filled it with data. It only accepts plain HTML.
 *
 * @link https://documentation.mjml.io/#mj-table
 */
export let MjTable = createComponent<MjTableProps>('mj-table');

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
  fullWidth?: 'full-width' | 'false' | '';
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
 *
 *
 * @link https://documentation.mjml.io/#mj-wrapper
 */
export let MjWrapper = createComponent<MjWrapperProps>('mj-wrapper');

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
  /** padding around the icons */
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
  /** padding around the texts */
  textPadding?: MjUnit<'px' | '%'>;
  /** underline/overline/none */
  textDecoration?: string;
  verticalAlign?: 'top' | 'bottom' | 'middle';
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-social
 */
export let MjSocial = createComponent<MjSocialProps>('mj-social');

export type MjSocialElementProps = {
  align?: 'left' | 'center' | 'right';
  backgroundColor?: string;
  color?: string;
  borderRadius?: MjUnit<'px'>;
  fontFamily?: string;
  fontSize?: MjUnit<'px'>;
  fontStyle?: string;
  fontWeight?: string;
  href?: string;
  iconSize?: MjUnit<'px' | '%'>;
  iconHeight?: MjUnit<'px' | '%'>;
  iconPadding?: MjUnit<'px' | '%'>;
  lineHeight?: MjUnit<'px' | '%' | ''>;
  name?: string;
  paddingBottom?: MjUnit<'px' | '%'>;
  paddingLeft?: MjUnit<'px' | '%'>;
  paddingRight?: MjUnit<'px' | '%'>;
  paddingTop?: MjUnit<'px' | '%'>;
  padding?: MjUnit<'px' | '%'>;
  textPadding?: MjUnit<'px' | '%'>;
  rel?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  alt?: string;
  title?: string;
  target?: string;
  textDecoration?: string;
  verticalAlign?: 'top' | 'middle' | 'bottom';
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
  padding?: MjUnit<'px' | '%'>;
  paddingLeft?: MjUnit<'px' | '%'>;
  paddingTop?: MjUnit<'px' | '%'>;
  paddingRight?: MjUnit<'px' | '%'>;
  paddingBottom?: MjUnit<'px' | '%'>;
  /** hamburger icon text decoration none/underline/overline/line-through (hamburger mode required) */
  icoTextDecoration?: string;
  /** hamburger icon line height (hamburger mode required) */
  icoLineHeight?: MjUnit<'px' | '%' | ''>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-navbar
 */
export let MjNavbar = createComponent<MjNavbarProps>('mj-navbar');

export type MjNavbarLinkProps = {
  color?: string;
  fontFamily?: string;
  fontSize?: MjUnit<'px'>;
  fontStyle?: string;
  fontWeight?: string;
  href?: string;
  name?: string;
  target?: string;
  rel?: string;
  letterSpacing?: MjUnit<'px' | 'em'>;
  lineHeight?: MjUnit<'px' | '%' | ''>;
  paddingBottom?: MjUnit<'px' | '%'>;
  paddingLeft?: MjUnit<'px' | '%'>;
  paddingRight?: MjUnit<'px' | '%'>;
  paddingTop?: MjUnit<'px' | '%'>;
  padding?: MjUnit<'px' | '%'>;
  textDecoration?: string;
  textTransform?: string;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-navbar-link
 */
export let MjNavbarLink = createComponent<MjNavbarLinkProps>('mj-navbar-link');

export type MjAccordionProps = {
  /** background-color of the cell */
  containerBackgroundColor?: string;
  /** CSS border format */
  border?: string;
  /** font */
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
 *
 *
 * @link https://documentation.mjml.io/#mj-accordion
 */
export let MjAccordion = createComponent<MjAccordionProps>('mj-accordion');

export type MjAccordionElementProps = {
  backgroundColor?: string;
  border?: string;
  fontFamily?: string;
  iconAlign?: 'top' | 'middle' | 'bottom';
  iconWidth?: MjUnit<'px' | '%'>;
  iconHeight?: MjUnit<'px' | '%'>;
  iconWrappedUrl?: string;
  iconWrappedAlt?: string;
  iconUnwrappedUrl?: string;
  iconUnwrappedAlt?: string;
  iconPosition?: 'left' | 'right';
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-accordion-element
 */
export let MjAccordionElement = createComponent<MjAccordionElementProps>('mj-accordion-element');

export type MjAccordionTextProps = {
  backgroundColor?: string;
  fontSize?: MjUnit<'px'>;
  fontFamily?: string;
  fontWeight?: string;
  letterSpacing?: MjUnit<'px' | 'em'>;
  lineHeight?: MjUnit<'px' | '%' | ''>;
  color?: string;
  paddingBottom?: MjUnit<'px' | '%'>;
  paddingLeft?: MjUnit<'px' | '%'>;
  paddingRight?: MjUnit<'px' | '%'>;
  paddingTop?: MjUnit<'px' | '%'>;
  padding?: MjUnit<'px' | '%'>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-accordion-text
 */
export let MjAccordionText = createComponent<MjAccordionTextProps>('mj-accordion-text');

export type MjAccordionTitleProps = {
  backgroundColor?: string;
  color?: string;
  fontSize?: MjUnit<'px'>;
  fontFamily?: string;
  paddingBottom?: MjUnit<'px' | '%'>;
  paddingLeft?: MjUnit<'px' | '%'>;
  paddingRight?: MjUnit<'px' | '%'>;
  paddingTop?: MjUnit<'px' | '%'>;
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
  thumbnailsSrc?: string;
  borderRadius?: MjUnit<'px' | '%'>;
  tbBorder?: string;
  tbBorderRadius?: MjUnit<'px' | '%'>;
};

/**
 *
 *
 * @link https://documentation.mjml.io/#mj-carousel-image
 */
export let MjCarouselImage = createComponent<MjCarouselImageProps>('mj-carousel-image');
