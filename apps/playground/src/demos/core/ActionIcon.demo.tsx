import React from 'react';

import { ActionIcon, Text, Box, DEFAULT_COLORS } from '@vident-ui/core';
import { useBooleanToggle } from '@vident-ui/hooks';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

const variants = ['hover', 'filled', 'light', 'default', 'transparent'] as const;

function TestWrapper({ variant, color }: { variant: any; color: any }) {
  const [passwordShowing, toggle] = useBooleanToggle();
  return (
    <div key={`${variant}-${color}`} className="flex">
      <ActionIcon variant={variant} color={color} onClick={() => toggle()}>
        {passwordShowing ? (
          <EyeIcon style={{ width: 20, height: 20 }} />
        ) : (
          <EyeOffIcon style={{ width: 20, height: 20 }} />
        )}
      </ActionIcon>
      <Text className="pl-2 capitalize select-none">{variant}</Text>
    </div>
  );
}

export const ActionIconDemo = () => {
  return (
    <div className="flex flex-wrap justify-between w-full">
      {DEFAULT_COLORS.map((color) => (
        <Box css={{ mt: '$4', spaceY: '$2' }}>
          <Text className="capitalize select-none">{color}</Text>
          <Box css={{ spaceY: '$4' }}>
            {variants.map((variant) => (
              <TestWrapper variant={variant} color={color} />
            ))}
          </Box>
        </Box>
      ))}
    </div>
  );
};

ActionIconDemo.displayName = '@vident-ui/core/ActionIcon';
