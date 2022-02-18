import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsCss(Component: React.ElementType, requiredProps: Record<string, any>) {
  // it('supports css prop', () => {
  //   const styles = { border: '1px solid aquamarine', background: 'beige', padding: 37 };
  //   const { container: withoutCssProp } = render(<Component {...requiredProps} />);
  //   const { container } = render(<Component id="test" {...requiredProps} css={styles} />);

  //   const base = withoutCssProp.firstChild as HTMLElement;
  //   const target = container.firstChild as HTMLElement;

  //   function classlist(className: string) {
  //     return className.split(' ').filter(Boolean);
  //   }

  //   expect(
  //     classlist(base.getAttribute('class')).length < classlist(target.getAttribute('class')).length
  //   ).toBe(true);
  // });
  it('supports css', async () => {
    const styles = { border: '1px solid aquamarine', background: 'beige' };
    const fn = () => styles;
    const { container: withFunction } = await renderWithAct(
      <Component {...requiredProps} css={fn} />
    );
    const { container: withObject } = await renderWithAct(
      <Component {...requiredProps} css={styles} style={undefined} />
    );

    expect(withFunction.firstChild).toHaveStyle('background: "red"');
    expect(withObject.firstChild).toHaveStyle({ background: 'beige' });
  });
}
