import { itIsPolymorphic, itSupportsSystemProps } from '@vident-ui/testing';
import { ColorSwatch } from './ColorSwatch';

const defaultProps: React.ComponentProps<typeof ColorSwatch> = {
  color: '#fff',
};

describe('@vident-ui/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch, defaultProps);
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@vident-ui/core/ColorSwatch',
    refType: HTMLDivElement,
  });
});
