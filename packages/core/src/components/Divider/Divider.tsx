import React, { forwardRef } from 'react';
import type * as Vident from '@vident-ui/theme';
import useStyles from './Divider.styles';
import { Text } from '../Text';
import { Box } from '../Box';

export type DividerStylesNames = 'label';

export interface DividerProps
  extends Vident.DefaultProps<DividerStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Line color from theme, defaults to $gray-200 in light and $gray-700 in dark */
  color?: Vident.ThemeToken<'colors', string>;

  /** Line orientation */
  orientation?: 'horizontal' | 'vertical';

  /** Sets height in horizontal orientation and with in vertical */
  size?: Vident.ThemeToken<'space'>;

  /** Adds text after line in horizontal orientation */
  label?: React.ReactNode;

  /** Label position */
  labelPosition?: 'left' | 'center' | 'right';

  /** Props spread to Text component in label */
  labelProps?: Record<string, any>;

  /** Divider borderStyle */
  variant?: 'solid' | 'dashed' | 'dotted';

  /** Controls the static css selector base. */
  staticSelector?: string;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      css,
      color,
      orientation = 'horizontal',
      size = '$px',
      label,
      labelPosition = 'left',
      labelProps,
      variant = 'solid',
      styles,
      classNames,
      staticSelector = 'Divider',
      ...others
    }: DividerProps,
    ref
  ) => {
    const {
      classes,
      cx,
      utils: { mode },
    } = useStyles({ color, size, variant }, { classNames, styles, name: staticSelector });

    const vertical = orientation === 'vertical';
    const horizontal = !vertical;
    const withLabel = !!label && horizontal;

    return (
      <Box
        ref={ref}
        css={[
          vertical && classes.vertical,
          horizontal && classes.horizontal,
          withLabel && classes.withLabel,
          css,
        ]}
        {...others}
      >
        {!!label && horizontal && (
          <Text
            {...labelProps}
            color={labelProps?.color || mode('$gray500', '$gray400')}
            size={labelProps?.size || 'xs'}
            css={{ marginTop: 2 }}
            className={cx(classes.label, classes[labelPosition])}
          >
            {label}
          </Text>
        )}
      </Box>
    );
  }
);

Divider.displayName = '@vident-ui/core/Divider';
