import React from 'react';
import type * as Vident from '@vident-ui/theme';
import { Box } from '../Box';

export interface CenterOwnProps extends Vident.DefaultProps {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;

  /** Set to true to use inline-flex instead of flex */
  inline?: boolean;
}

export const Center = React.forwardRef((props, ref) => {
  const { inline = false, css, ...centerProps } = props;
  return (
    <Box
      {...centerProps}
      ref={ref}
      css={[
        {
          display: inline ? 'inline-flex' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        css,
      ]}
    />
  );
}) as Vident.Polymorphic.ForwardRefComponent<'div', CenterOwnProps>;

Center.displayName = '@vident-ui/core/Center';
