import React from 'react';
import { get } from '@vident-ui/theme';
import type * as Vident from '@vident-ui/theme';

import { Box } from '../Box';

const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export interface ContainerOwnProps extends Vident.DefaultProps {
  /** Predefined breakpoint or custom value for max-width */
  size?: Vident.LiteralUnion<keyof typeof breakpoints, string | number>;

  /** If fluid is set to true, size prop is ignored and Container always take 100% of width */
  fluid?: boolean;

  /* If center is set to true, mx-auto is applied to container to center it's contents */
  center?: boolean;
}

export const Container = React.forwardRef((props, ref) => {
  const { css, fluid, center, size = 'md', ...containerProps } = props;
  const containerStyles = {
    maxWidth: fluid ? '100%' : get(size, breakpoints),
    mx: center ? 'auto' : undefined,
  };
  return (
    <Box
      {...containerProps}
      ref={ref}
      css={Array.isArray(css) ? [containerStyles, ...css] : [containerStyles, css]}
    />
  );
}) as Vident.Polymorphic.ForwardRefComponent<'div', ContainerOwnProps>;

Container.displayName = '@vident-ui/core/Container';
