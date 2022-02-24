import React, { forwardRef } from 'react';
import { ThemeToken } from '@vident-ui/theme';

import { ActionIcon } from '../ActionIcon';
import { CloseIcon } from './CloseIcon';
import { Box } from '../../Box';

export interface CloseButtonProps
  extends Omit<React.ComponentProps<typeof ActionIcon>, 'children'> {
  /** Size token from theme or valid css value to set width and height of close icon */
  iconSize?: ThemeToken<'space'>;
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ iconSize, size = 'md', ...others }: CloseButtonProps, ref) => (
    <ActionIcon size={size} ref={ref} {...others}>
      <Box as={CloseIcon} css={{ width: iconSize, height: iconSize }} />
    </ActionIcon>
  )
);

CloseButton.displayName = '@vident-ui/core/CloseButton';
