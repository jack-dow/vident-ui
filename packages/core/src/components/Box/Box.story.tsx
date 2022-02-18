import React, { useEffect, useRef } from 'react';
import { storiesOf } from '@storybook/react';

import { Box } from './index';

storiesOf('@vident-ui/core/Box/stories', module).add('Box', () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref);
  }, [ref]);

  return (
    <div style={{ padding: 20 }}>
      <Box
        ref={ref}
        css={({ utils: { mode } }) => ({
          display: 'block',
          bgColor: '$indigo800',
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
        style={{
          backgroundColor: 'red',
        }}
      >
        Box let&apos;s you create polymorphic components and add inline styles
      </Box>
    </div>
  );
});
