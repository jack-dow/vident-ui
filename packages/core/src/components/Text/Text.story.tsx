import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, VidentProvider } from '@vident-ui/theme';

import { Text } from './Text';

storiesOf('@vident-ui/core/Text/stories', module).add('Text', () => (
  <div>
    <Text color="$red600">This is some text!</Text>
  </div>
));

const styles = { color: 'red', margin: 10, backgroundColor: 'blue' };
const useStyles = createStyles(() => ({ root: styles }));

function WithClassNames() {
  return <Text classNames={useStyles().classes}>Text</Text>;
}

storiesOf('@vident-ui/core/Text/styles-api', module)
  .add('With css', () => <Text css={styles}>Text</Text>)
  .add('With styles as object', () => <Text styles={{ root: styles }}>Text</Text>)
  .add('With styles as function', () => <Text styles={() => ({ root: styles })}>Text</Text>)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on VidentProvider', () => (
    <VidentProvider styles={{ Text: () => ({ root: styles }) }}>
      <Text>Text</Text>
    </VidentProvider>
  ));
