/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button';
import { Group } from './Group';

const positions = (['left', 'center', 'apart', 'right'] as const).map((position) => (
  <div style={{ backgroundColor: 'rgba(0, 0, 0, .1)', margin: 20 }} key={position}>
    <Group position={position}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Group>
  </div>
));

const spacings = ([0, '$3', '$6', '$12', '$16', '$24', 130] as const).map((spacing) => (
  <div style={{ backgroundColor: 'rgba(0, 0, 0, .1)', margin: 20 }} key={spacing}>
    <Group spacing={spacing}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Group>
  </div>
));

storiesOf('@vident-ui/core/Group/stories', module)
  .add('Positions', () => <>{positions}</>)
  .add('Spacing', () => <>{spacings}</>)
  .add('No wrap', () => (
    <div style={{ maxWidth: 200, backgroundColor: 'rgba(0, 0, 0, .1)' }}>
      <Group noWrap>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Group>
    </div>
  ))
  .add('Grow', () => (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, .1)' }}>
      <Group grow>
        <Button>
          Button with so much content that it will try to take space from other elements
        </Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Group>
    </div>
  ));
