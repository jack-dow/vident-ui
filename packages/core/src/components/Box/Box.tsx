import React from 'react';
import { useExtractedCss, cx } from '@vident-ui/theme';
import type { Polymorphic, DefaultProps } from '@vident-ui/theme';

export const Box = React.forwardRef((props, ref) => {
  const { as: Element = 'div', css, className, ...boxProps } = props;

  return <Element {...boxProps} className={cx(useExtractedCss(css), className)} ref={ref} />;
}) as Polymorphic.ForwardRefComponent<'div', DefaultProps>;

Box.displayName = '@vident-ui/core/Box';
