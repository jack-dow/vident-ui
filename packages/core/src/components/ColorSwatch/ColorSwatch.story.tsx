// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { DEFAULT_COLORS, useVidentUtils, VidentProvider, createStyles } from '@vident-ui/theme';
// import { generateBorderStyles } from '@vident-ui/utils';
// import { Group } from '../Group';
// import { ColorSwatch } from './ColorSwatch';

// const swatches = DEFAULT_COLORS.map((color) => (
//   <ColorSwatch color={`$${color}600`} key={color} size={20} />
// ));

// storiesOf('@vident-ui/core/ColorSwatch/stories', module)
//   .add('Colors', () => <Group style={{ padding: 15 }}>{swatches}</Group>)
//   .add('Opaque colors', () => {
//     const { rgba } = useVidentUtils();
//     return (
//       <Group style={{ padding: 15 }}>
//         {DEFAULT_COLORS.map((color) => (
//           <ColorSwatch color={rgba(`$${color}600`, 0.5)} key={color} size={20} />
//         ))}
//       </Group>
//     );
//   })
//   .add('Custom components', () => (
//     <Group style={{ padding: 15 }}>
//       <ColorSwatch color="#f300f3" as="button" />
//       <ColorSwatch color="#000" as="a" href="https://google.com.au" />
//     </Group>
//   ));

// const styles = generateBorderStyles({ root: '' });
// const useStyles = createStyles(() => styles);

// function Wrapper(props: Partial<React.ComponentProps<typeof ColorSwatch>>) {
//   return <ColorSwatch {...props} style={{ maxWidth: 500 }} color="#efefef" />;
// }

// function WithClassNames() {
//   return <Wrapper classNames={useStyles().classes} />;
// }

// storiesOf('@vident-ui/core/ColorSwatch/styles-api', module)
//   .add('With css', () => <Wrapper css={{ border: '1px solid red', backgroundColor: 'blue' }} />)
//   .add('With styles as object', () => <Wrapper styles={styles} />)
//   .add('With styles as function', () => <Wrapper styles={() => styles} />)
//   .add('With styles as classNames', () => <WithClassNames />)
//   .add('Styles API on VidentProvider', () => (
//     <VidentProvider styles={{ ColorSwatch: () => styles }}>
//       <Wrapper />
//     </VidentProvider>
//   ));
