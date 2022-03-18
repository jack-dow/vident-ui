import React from 'react';
import type * as Vident from '@vident-ui/styles';

import useStyles, { InputVariant, InputSize } from './Input.styles';
import { Box } from '../Box';

export type InputStylesNames = Vident.ClassNames<typeof useStyles>;

export interface InputOwnProps extends Vident.DefaultProps<InputStylesNames> {
  /** Applies invalid styles sets and aria-invalid=true on input element */
  invalid?: boolean;

  /** The color used for the invalid styles */
  invalidColor?: Vident.ThemeToken<'colors', string>;

  /** Element that appears to the left of the input */
  left?: React.ReactNode;

  /** Adds icon to the left side of input */
  leftIcon?: React.ReactNode;

  /** Removes pointer-events: 'none' from left icon, allowing it to be clicked */
  leftIconClickable?: boolean;

  /** The padding-left added to the input to make space for the icon */
  leftIconPadding?: Vident.ThemeToken<'space'>;

  /** Element that appears to the right of the input */
  right?: React.ReactNode;

  /** Adds icon to the right side of input */
  rightIcon?: React.ReactNode;

  /** Removes pointer-events: 'none' from right icon, allowing it to be clicked */
  rightIconClickable?: boolean;

  /** The padding-right added to the input to make space for the icon */
  rightIconPadding?: Vident.ThemeToken<'space'>;

  /** Properties spread to root element */
  wrapperProps?: { [key: string]: any };

  /** Sets aria-required=true on input element */
  required?: boolean;

  /** Predefined border-radius value from theme or any valid border-radius value */
  radius?: Vident.ThemeToken<'radii'>;

  /** Defines input appearance, defaults to default in light color scheme and filled in dark */
  variant?: InputVariant;

  /** Will input have multiple lines? */
  multiline?: boolean;

  // /** Input size */
  size?: InputSize;

  /** Sets aria-disabled=true on input element and applies disabled styles */
  disabled?: boolean;

  // /** Controls the static css selector base. */
  staticSelector?: string;
}

export const Input = React.forwardRef((props, ref) => {
  const {
    as: Element = 'input',
    css,
    className,
    classNames,
    style,
    styles,
    invalid,
    invalidColor,
    multiline = false,
    size = 'md',
    variant = 'default',
    staticSelector = 'Input',
    radius = '$base',
    required,
    disabled,
    left,
    leftIcon,
    leftIconClickable,
    leftIconPadding = '$10',
    right,
    rightIconClickable,
    rightIcon,
    rightIconPadding = '$10',
    wrapperProps,
    ...inputProps
  } = props;
  const { classes, cx } = useStyles(
    {
      invalidColor,
      size,
      variant,
      leftIconPadding,
      leftIconClickable,
      rightIconPadding,
      rightIconClickable,
      left,
      right,
      radius,
      multiline,
    },
    { classNames, styles, name: staticSelector }
  );

  return (
    <Box className={className} css={[classes.wrapper, css]} style={style} {...wrapperProps}>
      {left}
      {leftIcon && <div className={cx(classes.leftIcon)}>{leftIcon}</div>}
      <Element
        ref={ref}
        className={cx(
          classes.input,
          classes[variant],
          leftIcon && classes.withLeftIcon,
          rightIcon && classes.withRightIcon,
          invalid && classes.invalid,
          disabled && classes.disabled
        )}
        required={required}
        aria-invalid={invalid}
        disabled={disabled}
        {...inputProps}
      />
      {rightIcon && <div className={cx(classes.rightIcon)}>{rightIcon}</div>}
      {right}
    </Box>
  );
}) as Vident.Polymorphic.ForwardRefComponent<'input', InputOwnProps>;

Input.displayName = '@vident-ui/core/Input';
