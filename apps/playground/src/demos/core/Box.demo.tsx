import React, { useEffect, useRef } from 'react';
import { Box } from '@vident-ui/core';

export const BasicDemo = () => {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref);
  }, [ref]);

  return (
    <Box className="space-y-4">
      <Box ref={ref}>Box let&apos;s you create polymorphic components</Box>
    </Box>
  );
};

BasicDemo.displayName = '@vident-ui/core/Box';
