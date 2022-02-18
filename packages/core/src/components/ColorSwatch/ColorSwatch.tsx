import React from 'react';
import type * as Vident from '@vident-ui/theme';
import { Box } from '../Box';
import useStyles from './ColorSwatch.styles';

export interface ColorSwatchOwnProps extends Vident.DefaultProps {
  /** Swatch color value as theme token or in any css valid format (hex, rgb, etc.) */
  color: Vident.ThemeToken<'colors', string>;

  /** Width, height and border-radius as space token from theme or valid css format */
  size?: Vident.ThemeToken<'space'>;

  /** Predefined border-radius value from theme or any valid border-radius value */
  radius?: Vident.ThemeToken<'radii'>;

  /** Elements rendered within ColorSwatch */
  children?: React.ReactNode;
}

export const ColorSwatch = React.forwardRef((props, ref) => {
  const {
    as,
    color,
    size = 25,
    radius = 25,
    css,
    children,
    classNames,
    styles,
    ...swatchProps
  } = props;
  const { classes, cx } = useStyles({ radius, size }, { classNames, styles, name: 'ColorSwatch' });

  return (
    <Box {...swatchProps} as={as} css={[classes.root, css]} ref={ref}>
      <div className={cx(classes.alphaOverlay, classes.overlay)} />
      <div className={cx(classes.shadowOverlay, classes.overlay)} />
      <Box css={[classes.overlay, { backgroundColor: color }]} />
      <div className={cx(classes.children, classes.overlay)}>{children}</div>
    </Box>
  );
}) as Vident.Polymorphic.ForwardRefComponent<'div', ColorSwatchOwnProps>;

ColorSwatch.displayName = '@vident-ui/core/ColorSwatch';
