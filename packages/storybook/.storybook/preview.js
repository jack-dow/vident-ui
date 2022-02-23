import React from 'react';
import { VidentProvider, globalCss, createTheme } from '@vident-ui/theme';

export const parameters = { layout: 'fullscreen' };

const bodyStyles = globalCss({
  body: {
    bgColor: '$bodyBg',
    minHeight: '100vh',
    p: '$8 !important',
    fontFamily: '$inter',
  },
});

function ThemeWrapper(props: any) {
  bodyStyles();

  const baseTheme = createTheme({
    type: 'base',
    theme: {
      fonts: {
        inter:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
  });

  const lightTheme = createTheme({
    type: 'light',
    theme: {
      colors: {
        brand: '#abce11',
        bodyBg: '$gray50',
      },
    },
  });

  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        bodyBg: '$gray900',
      },
      '': {
        ringOffsetColor: '$colors$gray900',
      },
    },
  });

  return (
    <VidentProvider
      theme={'light'}
      themes={{ base: baseTheme.className, light: lightTheme.className, dark: darkTheme.className }}
    >
      {props.children}
    </VidentProvider>
  );
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];