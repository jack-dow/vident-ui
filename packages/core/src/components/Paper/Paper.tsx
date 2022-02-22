import React from 'react';
import type * as Vident from '@vident-ui/theme';
import { Box } from '../Box';
import useStyles from './Paper.styles';

export interface PaperOwnProps extends Vident.DefaultProps {
  /** Predefined padding token from theme or any valid css padding value  */
  padding?: Vident.ThemeToken<'space'>;

  /** Predefined box-shadow token from theme or any valid css box-shadow property */
  shadow?: Vident.ThemeToken<'shadows', string>;

  /** Predefined border-radius value from theme or any valid border-radius value */
  radius?: Vident.ThemeToken<'radii'>;

  /** Adds 1px border with $gray-200 token in light color scheme and $gray-700 token in dark color scheme */
  withBorder?: boolean;

  /** Element(s) rendered inside paper */
  children?: React.ReactNode;
}

export const Paper = React.forwardRef((props, ref) => {
  const { as, css, children, padding, radius, shadow, withBorder, ...paperProps } = props;
  const { classes } = useStyles({ radius, shadow, padding, withBorder }, { name: 'Paper' });

  return (
    <Box {...paperProps} as={as} css={[classes.root, css]} ref={ref}>
      {children}
    </Box>
  );
}) as Vident.Polymorphic.ForwardRefComponent<'div', PaperOwnProps>;

Paper.displayName = '@vident-ui/core/Paper';
