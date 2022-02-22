import React from 'react';
import { render } from '@testing-library/react';

export function itSupportsCss(Component: React.ElementType, requiredProps: Record<string, any>) {
  it('supports css', async () => {
    const styles = { border: '1px solid aquamarine', background: 'beige' };
    const fn = () => styles;
    const { container: withFunction } = render(<Component {...requiredProps} css={fn} />);
    const { container: withObject } = render(
      <Component {...requiredProps} css={styles} style={undefined} />
    );

    expect(withFunction.firstChild).toHaveStyle('background: "red"');
    expect(withObject.firstChild).toHaveStyle({ background: 'beige' });
  });
}
