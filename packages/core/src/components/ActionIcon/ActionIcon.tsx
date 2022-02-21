import React from 'react';
import { getSharedColorScheme, useVidentUtils } from '@vident-ui/theme';
import type * as Vident from '@vident-ui/theme';
import { Box } from '../Box';
import useStyles, { ActionIconVariant } from './ActionIcon.styles';
import { Loader, LoaderProps } from '../Loader';

export type ActionIconStylesNames = Vident.ClassNames<typeof useStyles>;

export interface ActionIconOwnProps extends Vident.DefaultProps<ActionIconStylesNames> {
  /** Controls ActionIcon appearance */
  variant?: ActionIconVariant;

  /** ActionIcon hover, active and icon colors from theme */
  color?: Vident.Color;

  /** Predefined border-radius value from theme or any valid border-radius value */
  radius?: Vident.ThemeToken<'radii'>;

  /** Size token from theme or valid css value to set width and height  */
  size?: Vident.ThemeToken<'space'>;

  /** Props spread to Loader component */
  loaderProps?: LoaderProps;

  /** Indicate loading state */
  loading?: boolean;
}

export const ActionIcon = React.forwardRef((props, ref) => {
  const {
    as = 'button',
    css,
    color = 'gray',
    children,
    radius = '$base',
    size = 28,
    variant = 'hover',
    disabled = false,
    loaderProps,
    loading = false,
    styles,
    classNames,
    ...actionIconProps
  } = props;
  const utils = useVidentUtils();
  const { classes } = useStyles(
    { size, radius, color },
    { name: 'ActionIcon', classNames, styles }
  );
  const colors = getSharedColorScheme({ color, utils, variant: 'light' });

  const loader = (
    <Loader
      color={colors.color as Vident.ThemeToken<'colors', string>}
      size={size}
      {...loaderProps}
    />
  );

  return (
    <Box
      {...actionIconProps}
      as={as}
      css={[classes[variant], classes.root, loading && classes.loading, css]}
      type="button"
      ref={ref}
      disabled={disabled || loading}
    >
      {loading ? loader : children}
    </Box>
  );
}) as Vident.Polymorphic.ForwardRefComponent<'button', ActionIconOwnProps>;

ActionIcon.displayName = '@vident-ui/core/ActionIcon';
