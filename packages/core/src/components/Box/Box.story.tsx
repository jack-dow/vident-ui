import React, { useEffect, useRef } from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from './index';

storiesOf('@vident-ui/core/Box/stories', module).add('Box', () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref);
  }, [ref]);

  return (
    <Box css={{ spaceY: '$4' }}>
      <Box
        ref={ref}
        css={({ utils: { mode } }) => ({
          bgColor: '$indigo600',
          color: mode('$gray50', '$gray900'),
          textAlign: 'center',
          p: '$8',
          borderRadius: '$md',
          transition: '$base',
          shadow: '$2xl',
          text: '$lg',

          '&:hover': {
            backgroundColor: '$indigo800',
            ring: '3px',
            ringColor: '$indigo500',
            ringOffsetColor: '$gray50',
            ringOffset: '4px',
          },
        })}
      >
        Box let&apos;s you create polymorphic components and add inline styles
      </Box>
      <Box
        as="button"
        css={({ utils: { mode } }) => ({
          bgColor: '$emerald600',
          color: mode('$gray50', '$gray900'),
          textAlign: 'center',
          p: '$8',
          borderRadius: '$md',
          transition: '$base',
          shadow: '$2xl',
          text: '$lg',

          '&:focus': {
            backgroundColor: '$emerald700',
            ring: '3px',
            ringColor: '$indigo500',
            ringOffsetColor: '$gray50',
            ringOffset: '4px',
          },
        })}
      >
        This box is a button!
      </Box>
    </Box>
  );
});
