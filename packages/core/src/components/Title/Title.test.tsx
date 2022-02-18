import { itRendersChildren, itSupportsSystemProps } from '@vident-ui/tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('@vident-ui/core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@vident-ui/core/Title',
    refType: HTMLHeadingElement,
  });
});
