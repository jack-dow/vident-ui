import React from 'react';
import { globalCss, getCssText } from './stitches.config';

const globalStyles = globalCss({
  /********* Document *********/

  // Use a better box model (opinionated).
  '*, *::before, *::after': {
    boxSizing: 'border-box' /* 1 */,
    borderWidth: 0 /* 2 */,
    borderStyle: 'solid' /* 2 */,
    borderColor: 'currentColor' /* 2 */,
    textRendering: 'geometricPrecision',
    WebkitTapHighlightColor: 'transparent',
  },

  // 1. Correct the line height in all browsers. (Adjusted to 1.5 instead of Normalize css default 1.15)
  // 2. Prevent adjustments of font size after orientation changes in iOS.
  // 3. Use a more readable tab size (opinionated).
  html: {
    fontSize: '$base',
    fontFamily: '$sans',
    lineHeight: '$normal', // 1
    '-webkit-text-size-adjust': '100%', // 2
    '-moz-tab-size': 4, // 3
    tabSize: 4, // 3,
  },

  /********* Sections *********/

  // 1. Remove the margin in all browsers.

  body: {
    margin: 0, // 1
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },

  /********* Grouping content *********/

  // 1. Add the correct height in Firefox.
  // 2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
  // 3. Ensure horizontal rules are visible by default
  hr: {
    height: 0, // 1
    color: 'inherit', // 2,
    borderTopWidth: '1px', // 3
  },

  /********* Text-level semantics *********/

  //   Add the correct text decoration in Chrome, Edge, and Safari.
  'abbr[title]': {
    '-webkit-text-decoration': 'underline dotted',
    textDecoration: 'underline dotted',
  },

  // Add the correct font weight in Edge and Safari.
  'b, strong': {
    fontWeight: 'bolder',
  },

  //   1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
  // 2. Correct the odd 'em' font sizing in all browsers.
  'code, kbd, samp, pre': {
    fontFamily: "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace", // 1
    fontSize: '1em', // 2
  },

  //   Add the correct font size in all browsers.
  small: {
    fontSize: '80%',
  },

  // Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.

  'sub,sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },

  sub: {
    bottom: ' -0.25em',
  },

  sup: {
    top: '-0.5em',
  },

  /********* Tabular data *********/

  // 1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
  // 2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
  table: {
    textIndent: 0 /* 1 */,
    borderColor: 'inherit' /* 2 */,
    borderCollapse: 'collapse',
  },

  /********* Forms *********/

  // 1. Change the font styles in all browsers.
  // 2. Remove the margin in Firefox and Safari.
  // 3. Reset form element properties that are easy to forget to
  //  * style explicitly so you don't inadvertently introduce
  //  * styles that deviate from your design system. These styles
  //  * supplement a partial reset that is already applied by
  //  * normalize.css.
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit' /* 1 */,
    fontSize: '100%' /* 1 */,
    margin: 0 /* 2 */,
    padding: 0, // 3
    lineHeight: 'inherit', // 3
    color: 'inherit', // 3
  },

  // Remove the inheritance of text transform in Edge and Firefox.
  // 1. Remove the inheritance of text transform in Firefox.
  'button, select': {
    textTransform: 'none', // 1
  },

  // Correct the inability to style clickable types in iOS and Safari.
  "button, [type='button'], [type='reset'], [type='submit']": {
    '-webkit-appearance': 'button',
  },

  // Remove the inner border and padding in Firefox.
  '::-moz-focus-inner': {
    borderStyle: 'none',
    padding: 0,
  },

  // Remove the additional ':invalid' styles in Firefox.
  // See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
  ':-moz-ui-invalid': {
    boxShadow: 'none',
  },

  // Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
  legend: {
    padding: 0,
  },

  // Add the correct vertical alignment in Chrome and Firefox.
  progress: {
    verticalAlign: 'baseline',
  },

  // Correct the cursor style of increment and decrement buttons in Safari.
  '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
    height: 'auto',
  },

  // 1. Correct the odd appearance in Chrome and Safari.
  // 2. Correct the outline style in Safari.
  "[type='search']": {
    '-webkit-appearance': 'textfield' /* 1 */,
    outlineOffset: '-2px' /* 2 */,
  },

  // Remove the inner padding in Chrome and Safari on macOS.
  '::-webkit-search-decoration': {
    '-webkit-appearance': 'none',
  },

  // 1. Correct the inability to style clickable types in iOS and Safari.
  // 2. Change font properties to 'inherit' in Safari.
  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button' /* 1 */,
    font: 'inherit' /* 2 */,
  },

  /********* Interactive *********/

  // Add the correct display in Chrome and Safari.

  summary: {
    display: 'list-item',
  },

  // * Manually forked from SUIT CSS Base: https://github.com/suitcss/base
  // * A thin layer on top of normalize.css that provides a starting point more
  // * suitable for web applications.

  //  Removes the default spacing and border for appropriate elements.
  'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre': {
    margin: 0,
  },

  button: {
    backgroundColor: 'transparent',
    backgroundImage: 'none',
  },

  fieldset: {
    margin: 0,
    padding: 0,
  },

  'ol, ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  "button, [role='button']": {
    cursor: 'pointer',
  },

  //  * Override legacy focus reset from Normalize with modern Firefox focus styles.
  //  *
  //  * This is actually an improvement over the new defaults in Firefox in our testing,
  //  * as it triggers the better focus styles even for links, which still use a dotted
  //  * outline in Firefox by default.
  //  */

  ':-moz-focusring': {
    outline: 'auto',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontSize: 'inherit',
    fontWeight: 'inherit',
  },

  //  * Reset links to optimize for opt-in styling instead of
  //  * opt-out.
  a: {
    color: 'inherit',
    textDecoration: 'inherit',
  },

  //  * Use the configured 'mono' font family for elements that
  //  * are expected to be rendered with a monospace font, falling
  //  * back to the system monospace stack if there is no configured
  //  * 'mono' font family.
  //  */

  'pre, code, kbd, samp': {
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },

  //  * 1. Make replaced elements `display: block` by default as that's
  //  *    the behavior you want almost all of the time. Inspired by
  //  *    CSS Remedy, with `svg` added as well.
  //  *
  //  *    https://github.com/mozdevs/cssremedy/issues/14
  //  *
  //  * 2. Add `vertical-align: middle` to align replaced elements more
  //  *    sensibly by default when overriding `display` by adding a
  //  *    utility like `inline`.
  //  *
  //  *    This can trigger a poorly considered linting error in some
  //  *    tools but is included by design.
  //  *
  //  *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210
  //  */

  'img, svg, video, canvas, audio, iframe, embed, object': {
    display: 'block' /* 1 */,
    verticalAlign: 'middle' /* 2 */,
  },

  //  * Constrain images and videos to the parent width and preserve
  //  * their intrinsic aspect ratio.
  //  *
  //  * https://github.com/mozdevs/cssremedy/issues/14
  //  */

  'img, video': {
    maxWidth: '100%',
    height: 'auto',
  },

  //  * Ensure the default browser behavior of the `hidden` attribute.
  //  */

  '[hidden]': {
    display: 'none',
  },
});

const flushCSS = () => <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />;

function PreflightCSS({ children }: { children?: React.ReactNode }) {
  globalStyles();
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

type MemoPreflightCSSComponent<P = {}> = React.NamedExoticComponent<P> & {
  flush: typeof flushCSS;
};

const MemoPreflightCSS = React.memo(PreflightCSS) as unknown as MemoPreflightCSSComponent<
  React.PropsWithChildren<{}>
>;
MemoPreflightCSS.flush = flushCSS;

export default MemoPreflightCSS;
