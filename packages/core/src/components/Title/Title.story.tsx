import React from 'react';
import { storiesOf } from '@storybook/react';
import { VidentProvider } from '@vident-ui/theme';
import { Title } from './Title';

storiesOf('@vident-ui/core/Title/styles-api', module)
  .add('With css', () => <Title css={{ border: '1px solid red' }}>title</Title>)
  .add('Styles API on VidentProvider', () => (
    <div style={{ padding: 20 }}>
      <VidentProvider
        styles={{
          Title: ({ utils: { mode } }) => ({
            root: {
              color: mode('red', 'blue'),
            },
          }),
        }}
      >
        <Title order={1}>VidentProvider styles</Title>
      </VidentProvider>
    </div>
  ));
