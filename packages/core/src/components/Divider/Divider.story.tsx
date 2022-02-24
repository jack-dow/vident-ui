import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_COLORS } from '@vident-ui/theme';
import { SearchIcon } from '@heroicons/react/solid';
import { Divider } from './Divider';
import { Box } from '../Box';
import { Text } from '../Text';

const getColors = (props?: any) =>
  DEFAULT_COLORS.map((color) => (
    <Divider key={color} color={color} style={{ marginTop: 15 }} {...props} />
  ));

storiesOf('@vident-ui/core/Divider/stories', module)
  .add('Colors', () => <div style={{ padding: 20 }}>{getColors()}</div>)
  .add('Labels', () => (
    <div>
      <Divider css={{ my: '$2_5' }}>
        <Box css={{ position: 'relative', display: 'flex', justifyContent: 'start' }}>
          <Text size="$sm" css={{ bgColor: '$white', px: '$2' }}>
            Label on the left
          </Text>
        </Box>
      </Divider>
      <Divider css={{ my: '$2_5' }}>
        <Box css={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <Text size="$sm" css={{ bgColor: '$white', px: '$2' }}>
            Label in the center
          </Text>
        </Box>
      </Divider>
      <Divider css={{ my: '$2_5' }}>
        <Box css={{ position: 'relative', display: 'flex', justifyContent: 'end' }}>
          <Text size="$sm" css={{ bgColor: '$white', px: '$2' }}>
            Label on the right
          </Text>
        </Box>
      </Divider>
      <Divider css={{ my: '$2_5' }} variant="dashed">
        <Box css={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <Text size="$sm" css={{ display: 'flex', bgColor: '$white', px: '$2' }}>
            <SearchIcon width="20" height="20" />
            Search results
          </Text>
        </Box>
      </Divider>
      <Divider css={{ my: '$2_5' }}>
        <Box css={{ position: 'relative', display: 'flex', justifyContent: 'start' }}>
          <Text
            size="$sm"
            as="a"
            href="https://google.com.au"
            variant="link"
            color="blue"
            css={{ bgColor: '$white', px: '$2' }}
          >
            Link label
          </Text>
        </Box>
      </Divider>
    </div>
  ));

storiesOf('@vident-ui/core/Divider/styles-api', module).add('With css', () => (
  <div style={{ padding: 40 }}>
    <Divider css={{ border: '1px solid red' }} />
  </div>
));
