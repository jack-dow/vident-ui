import React, { forwardRef } from 'react';
import { useExtractedCss, cx } from '@vident-ui/styles';
import type * as Vident from '@vident-ui/styles';

export const Box = forwardRef((props, ref) => {
  const { as: Element = 'div', css, className, ...boxProps } = props;

  return <Element {...boxProps} className={cx(useExtractedCss(css), className)} ref={ref} />;
}) as Vident.Polymorphic.ForwardRefComponent<'div', Vident.DefaultProps>;

Box.displayName = '@vident-ui/core/Box';
