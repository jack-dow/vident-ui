// import React, { useState } from 'react';
// import { storiesOf } from '@storybook/react';
// import { createStyles, VidentProvider } from '@vident-ui/theme';
// import { generateBorderStyles, InputStylesApiWrapper } from '@vident-ui/utils';
// import { PasswordInput as PasswordInputStylesApi } from './styles.api';
// import { INPUT_SIZES } from '../Input';
// import { PasswordInput, PasswordInputProps } from './PasswordInput';

// const sizes = Object.keys(INPUT_SIZES).map((size: keyof typeof INPUT_SIZES) => (
//   <PasswordInput placeholder={size} key={size} size={size} style={{ marginTop: 20 }} />
// ));

// function Controlled(props: Partial<PasswordInputProps>) {
//   const [value, onChange] = useState('');
//   return (
//     <div style={{ width: 400, padding: 20 }}>
//       <PasswordInput
//         value={value}
//         onChange={(event) => onChange(event.currentTarget.value)}
//         label="Password"
//         placeholder="Password"
//         {...props}
//       />
//     </div>
//   );
// }

// storiesOf('@vident-ui/core/PasswordInput/stories', module)
//   .add('Controlled', () => <Controlled />)
//   .add('Sizes', () => <div style={{ width: 400, padding: 20 }}>{sizes}</div>)
//   .add('Invalid', () => <Controlled error="error" />);

// const styles = generateBorderStyles(PasswordInputStylesApi);
// const useStyles = createStyles(() => styles);

// function Wrapper(props: Partial<PasswordInputProps>) {
//   return <InputStylesApiWrapper component={PasswordInput} {...props} />;
// }

// function WithClassNames() {
//   return <Wrapper classNames={useStyles().classes} />;
// }

// storiesOf('@vident-ui/core/PasswordInput/styles-api', module)
//   .add('With css', () => (
//     <Wrapper css={{ border: '1px solid red', maxWidth: 400, mx: 'auto', mt: '$4' }} />
//   ))
//   .add('Root styles object', () => <Wrapper styles={{ root: { border: '1px solid blue' } }} />)
//   .add('Root styles function', () => (
//     <Wrapper styles={() => ({ root: { border: '1px solid blue' } })} />
//   ))
//   .add('With styles as object', () => <Wrapper styles={styles} />)
//   .add('With styles as function', () => <Wrapper styles={() => styles} />)
//   .add('With styles as classNames', () => <WithClassNames />)
//   .add('Styles API on VidentProvider', () => (
//     <VidentProvider styles={{ PasswordInput: () => styles }}>
//       <Wrapper />
//     </VidentProvider>
//   ));
