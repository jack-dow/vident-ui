import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, VidentProvider } from '@vident-ui/styles';
import { generateBorderStyles, InputStylesApiWrapper } from '@vident-ui/utils';
import { TextInput, TextInputProps } from './TextInput';
import { TextInput as TextInputStylesApi } from './styles.api';

function Controlled(props: Partial<TextInputProps>) {
  const [value, onChange] = useState('');
  return (
    <TextInput value={value} onChange={(event) => onChange(event.currentTarget.value)} {...props} />
  );
}

storiesOf('@vident-ui/core/TextInput/stories', module).add('Controlled', () => (
  <div style={{ width: 300, padding: 20 }}>
    <Controlled label="text" placeholder="text" type="text" />
  </div>
));

const styles = generateBorderStyles(TextInputStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<TextInputProps>) {
  return <InputStylesApiWrapper component={TextInput} {...props} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@vident-ui/core/TextInput/styles-api', module)
  .add('With css', () => (
    <Wrapper css={{ border: '1px solid red', maxWidth: 400, mx: 'auto', mt: '$4' }} />
  ))
  .add('Root styles object', () => <Wrapper styles={{ root: { border: '1px solid blue' } }} />)
  .add('Root styles function', () => (
    <Wrapper styles={() => ({ root: { border: '1px solid blue' } })} />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on VidentProvider', () => (
    <VidentProvider styles={{ TextInput: () => styles }}>
      <Wrapper />
    </VidentProvider>
  ));
