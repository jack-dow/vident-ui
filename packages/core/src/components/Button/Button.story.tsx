// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import { DEFAULT_COLORS, createStyles, VidentProvider } from '@vident-ui/theme';
// import { generateBorderStyles } from '@vident-ui/utils';
// import { ExternalLinkIcon, CalendarIcon } from '@heroicons/react/outline';

// import { Box } from '../Box';
// import { Group } from '../Group';
// import { Button, ButtonSizes } from './Button';
// import { Button as ButtonStylesApi } from './styles.api';
// import { UnstyledButton } from './UnstyledButton/UnstyledButton';

// type ButtonProps = React.ComponentProps<typeof Button>;

// const getThemes = (props?: Partial<ButtonProps>) => (
//   <>
//     <h1>{props?.variant || 'filled'}</h1>
//     {DEFAULT_COLORS.map((color) => (
//       <Button key={color} color={color} css={{ textTransform: 'capitalize' }} {...props}>
//         {color}
//       </Button>
//     ))}
//   </>
// );

// const getLinkThemes = (props?: any) =>
//   DEFAULT_COLORS.map((color) => (
//     <Button
//       {...props}
//       as="a"
//       href="https://google.com.au"
//       target="_blank"
//       rel="noreferrer"
//       key={color}
//       color={color}
//       css={{ textTransform: 'capitalize' }}
//     >
//       link - {color}
//     </Button>
//   ));

// const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as ButtonSizes[]).map((size) => (
//   <Button key={size} size={size}>
//     Button {size}
//   </Button>
// ));

// const loading = (['xs', 'sm', 'md', 'lg', 'xl'] as ButtonSizes[]).map((size, index) => (
//   <Button key={size} size={size} loading loaderPosition={index > 2 ? 'right' : 'left'}>
//     Button {size}
//   </Button>
// ));

// storiesOf('@vident-ui/core/Button/stories', module)
//   .add('UnstyledButton', () => (
//     <div>
//       <UnstyledButton>unstyled</UnstyledButton>
//     </div>
//   ))
//   .add('Variants', () => (
//     <Box css={{ spaceY: '$4', p: '$5' }}>
//       <Group>{getThemes({})}</Group>
//       <Group>{getThemes({ variant: 'outline' })}</Group>
//       <Group>{getThemes({ variant: 'light' })}</Group>
//       <Group>{getThemes({ variant: 'default' })}</Group>
//       <Group
//         css={{
//           px: '$2',
//           py: '$2_5',
//           ml: '-$2',
//         }}
//       >
//         {getThemes({ variant: 'white' })}
//       </Group>
//     </Box>
//   ))
//   .add('As link', () => (
//     <>
//       <Group css={{ my: '$4' }}>{getLinkThemes()}</Group>
//       <Group css={{ my: '$4' }}>{getLinkThemes({ variant: 'outline' })}</Group>
//       <Group css={{ my: '$4' }}>{getLinkThemes({ variant: 'light' })}</Group>
//       <Group css={{ my: '$4' }}>{getLinkThemes({ variant: 'default' })}</Group>
//     </>
//   ))
//   .add('Icons', () => (
//     <>
//       <Group css={{ my: '$4' }}>
//         {getThemes({ leftIcon: <CalendarIcon style={{ width: 20 }} /> })}
//       </Group>
//       <Group css={{ my: '$4' }}>
//         {getLinkThemes({
//           rightIcon: <ExternalLinkIcon style={{ width: 20 }} />,
//           variant: 'outline',
//         })}
//       </Group>

//       <Group css={{ my: '$4' }}>
//         {getThemes({
//           variant: 'default',
//           leftIcon: <CalendarIcon style={{ width: 20 }} />,
//           rightIcon: <ExternalLinkIcon style={{ width: 20 }} />,
//         })}
//       </Group>
//     </>
//   ))
//   .add('Sizes', () => <Group css={{ my: '$4' }}>{sizes}</Group>)
//   .add('Disabled', () => (
//     <>
//       <Group css={{ my: '$4' }}>{getThemes({ disabled: true })}</Group>
//       <Group css={{ my: '$4' }}>{getThemes({ variant: 'outline', disabled: true })}</Group>
//       <Group css={{ my: '$4' }}>{getThemes({ variant: 'light', disabled: true })}</Group>
//     </>
//   ))
//   .add('Loading', () => (
//     <div style={{ padding: 40 }}>
//       <Group>{loading}</Group>
//     </div>
//   ))
//   .add('Gradient', () => (
//     <div style={{ padding: 40 }}>
//       <Group>
//         <Button variant="gradient" gradient={{ from: 'red', to: 'blue', deg: 45 }}>
//           Red - Blue
//         </Button>
//         <Button variant="gradient" gradient={{ from: 'gray', to: 'indigo', deg: 45 }}>
//           Gray - Indigo
//         </Button>
//       </Group>
//     </div>
//   ));

// const styles = generateBorderStyles(ButtonStylesApi);
// const useStyles = createStyles(() => styles);

// const variants = ['filled', 'outline', 'light', 'gradient', 'white', 'default'] as const;

// function Wrapper(props: Partial<ButtonProps>) {
//   const items = variants.map((variant) => (
//     <Button key={variant} variant={variant} rightIcon="R" leftIcon="L" {...props}>
//       {variant}
//     </Button>
//   ));
//   return (
//     <Group position="center" css={{ pt: '$4', backgroundColor: 'rgba(0, 0, 0, .1)' }}>
//       {items}
//     </Group>
//   );
// }

// function WithClassNames() {
//   return <Wrapper classNames={useStyles(null).classes} />;
// }

// storiesOf('@vident-ui/core/Button/styles-api', module)
//   .add('With css', () => <Wrapper css={{ border: '1px solid red', backgroundColor: 'blue' }} />)
//   .add('With styles as object', () => <Wrapper styles={styles} />)
//   .add('With styles as function', () => <Wrapper styles={() => styles} />)
//   .add('With styles as classNames', () => <WithClassNames />)
//   .add('Styles API on VidentProvider', () => (
//     <VidentProvider styles={{ Button: () => styles }}>
//       <Wrapper />
//     </VidentProvider>
//   ))
//   .add('Hover override: root styles', () => (
//     <Wrapper styles={{ root: { '&:hover': { backgroundColor: 'red' } } }} />
//   ))
//   .add('Hover override: css', () => <Wrapper css={{ '&:hover': { backgroundColor: 'red' } }} />);
