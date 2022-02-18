import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text';
import { Paper } from './Paper';

storiesOf('@vident-ui/core/Paper/stories', module).add('Paper', () => (
  <Paper padding="$4" shadow="$lg">
    <Text>Paper is the most basic ui component</Text>
    <Text>
      Use it to create cards, dropdowns, modals and other components that require background with
      shadow
    </Text>
  </Paper>
));
