/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import type * as Vident from '@vident-ui/theme';
import { Box } from '../Box';
import useStyles from './Title.styles';

export type TitleOrder = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps extends Vident.DefaultProps, React.ComponentPropsWithoutRef<'h1'> {
  /** Defines component and styles which will be used */
  order?: TitleOrder;

  /** Defined text-align */
  align?: 'right' | 'left' | 'center' | 'justify';
}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ css, order = 1, children, align, ...others }: TitleProps, ref) => {
    const { classes } = useStyles({ align }, { name: 'Title' });

    if (![1, 2, 3, 4, 5, 6].includes(order)) {
      return null;
    }

    return (
      <Box as={`h${order}`} ref={ref} css={[classes.root, css]} {...others}>
        {children}
      </Box>
    );
  }
);

Title.displayName = '@vident-ui/core/Title';
