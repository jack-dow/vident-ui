import React from 'react';
import type * as Vident from '@vident-ui/styles';

import useStyles, { ButtonVariant, sizes } from './Button.styles';
import { Loader } from '../Loader';
import { Box } from '../Box';
import { LoaderProps } from '../Loader/Loader';

export type ButtonStylesNames = Vident.ClassNames<typeof useStyles>;
export type ButtonSizes = keyof typeof sizes;

export interface ButtonOwnProps extends Vident.DefaultProps<ButtonStylesNames> {
  /** Button color from theme */
  color?: Vident.Color;

  /** Controls gradient settings in gradient variant only */
  gradient?: Vident.Gradient;

  /** Adds icon before button label  */
  leftIcon?: React.ReactNode;

  /** Loader position relative to button label */
  loaderPosition?: 'left' | 'right';

  /** Props spread to Loader component */
  loaderProps?: LoaderProps;

  /** Controls loading state */
  loading?: boolean;

  /** Adds icon after button label  */
  rightIcon?: React.ReactNode;

  /** Predefined button size */
  size?: ButtonSizes;

  /** Controls the static css selector base. */
  staticSelector?: string;

  /** Sets text-transform to uppercase */
  uppercase?: boolean;

  /** Controls button appearance */
  variant?: ButtonVariant;
}

export type ButtonProps = React.ComponentProps<typeof Button>;

export const Button = React.forwardRef((props, ref) => {
  const {
    as = 'button',
    children,
    classNames,
    color = 'sky',
    disabled,
    type = 'button',
    css,
    gradient = { from: '$red600', to: '$indigo600', deg: 45 },
    leftIcon,
    loaderPosition = 'left',
    loaderProps,
    loading = false,
    rightIcon,
    size = 'md',
    staticSelector = 'Button',
    styles,
    uppercase = false,
    variant = 'filled',
    ...buttonProps
  } = props;
  const { classes, cx } = useStyles(
    {
      color,
      size,
      gradientFrom: gradient.from,
      gradientTo: gradient.to,
      gradientDeg: gradient.deg,
    },
    { classNames, styles, name: staticSelector }
  );
  const loader = <Loader color={classes[variant]?.[0]?.color || '$white'} {...loaderProps} />;

  return (
    <Box
      {...buttonProps}
      as={as}
      ref={ref}
      type={type}
      css={[classes[variant], loading && classes.loading, classes.root, css]}
      disabled={disabled || loading}
    >
      <div className={cx(classes.inner)}>
        {(leftIcon || (loading && loaderPosition === 'left')) && (
          <span className={cx(classes.icon, classes.leftIcon)}>
            {loading && loaderPosition === 'left' ? loader : leftIcon}
          </span>
        )}

        <span
          className={cx(classes.label)}
          style={{ textTransform: uppercase ? 'uppercase' : undefined }}
        >
          {children}
        </span>

        {(rightIcon || (loading && loaderPosition === 'right')) && (
          <span className={cx(classes.icon, classes.rightIcon)}>
            {loading && loaderPosition === 'right' ? loader : rightIcon}
          </span>
        )}
      </div>
    </Box>
  );
}) as Vident.Polymorphic.ForwardRefComponent<'button', ButtonOwnProps>;

Button.displayName = '@vident-ui/core/Button';
