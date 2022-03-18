import React from 'react';
import { DefaultProps, ThemeToken, Gradient, Polymorphic } from '@vident-ui/styles';
import { Box } from '../Box';
import useStyles from './Text.styles';

export interface TextOwnProps extends DefaultProps {
  /** Predefined font-size from theme.fontSizes or css value for font-size */
  size?: ThemeToken<'fontSizes'>;

  /** Text color from theme */
  color?: ThemeToken<'colors', string>;

  /** Sets font-weight css property */
  weight?: ThemeToken<'fontWeights'> | React.CSSProperties['fontWeight'];

  /** Sets text-transform css property */
  transform?: 'capitalize' | 'uppercase' | 'lowercase';

  /** Sets text-align css property */
  align?: 'left' | 'center' | 'right' | 'justify';

  /** Link or text variant */
  variant?: 'text' | 'link' | 'gradient';

  /** CSS -webkit-line-clamp property */
  lineClamp?: number;

  /** Sets line-height to 1 for centering */
  inline?: boolean;

  /** Inherit font properties from parent element */
  inherit?: boolean;

  /** Controls gradient settings in gradient variant only */
  gradient?: Gradient;

  /** Controls the static css selector base. */
  staticSelector?: string;
}

export const Text = React.forwardRef((props, ref) => {
  const {
    css,
    size = '$base',
    weight,
    transform,
    color,
    align,
    variant = 'text',
    lineClamp,
    gradient = { from: 'blue', to: 'cyan', deg: 45 },
    inline = false,
    inherit = false,
    classNames,
    styles,
    ...textProps
  } = props;
  const { classes } = useStyles(
    {
      variant,
      color,
      size,
      lineClamp,
      inline,
      inherit,
      weight,
      transform,
      align,
      gradientFrom: gradient.from,
      gradientTo: gradient.to,
      gradientDeg: gradient.deg,
    },
    { classNames, styles, name: 'Text' }
  );

  return (
    <Box
      {...textProps}
      ref={ref}
      css={[classes.root, variant === 'gradient' && classes.gradient, css]}
    />
  );
}) as Polymorphic.ForwardRefComponent<'div', TextOwnProps>;

Text.displayName = '@vident-ui/core/Text';
