import React, { forwardRef } from 'react';
import type * as Vident from '@vident-ui/theme';

import useStyles from './Divider.styles';
import { Box } from '../Box';

export interface DividerOwnProps extends Vident.DefaultProps {
  /** Line color from theme, defaults to $gray-200 in light and $gray-700 in dark */
  color?: Vident.ThemeToken<'colors', string>;

  /** Sets height in horizontal orientation and with in vertical */
  size?: Vident.ThemeToken<'sizes'>;

  /** Divider borderStyle */
  variant?: 'solid' | 'dashed' | 'dotted';

  /** Controls the static css selector base. */
  staticSelector?: string;
}

export type DividerProps = Vident.Merge<React.ComponentPropsWithoutRef<'div'>, DividerOwnProps>;

export const Divider = forwardRef<HTMLDivElement, DividerProps>((props: DividerProps, ref) => {
  const {
    css,
    color = '$gray300',
    size = '$px',
    variant = 'solid',
    children,
    styles,
    classNames,
    staticSelector = 'Divider',
    ...dividerProps
  } = props;
  const {
    classes,
    cx,
    utils: { mode },
  } = useStyles({ color, size, variant }, { classNames, styles, name: staticSelector });

  const _size = typeof size === 'string' && size.includes('$') ? `$sizes${size}` : size;

  return (
    <Box
      {...dividerProps}
      ref={ref}
      css={[{ position: 'relative', height: !children ? _size : undefined }, css]}
    >
      <Box
        css={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
        }}
        aria-hidden="true"
      >
        <Box css={{ width: '100%', borderTop: `$sizes${size} ${variant} ${color}` }} />
      </Box>
      {children}
    </Box>
  );
});

Divider.displayName = '@vident-ui/core/Divider';
