import React from 'react';
import { renderWithAct } from './render-with-act';

export function itSupportsInputIcons(
  Component: React.ElementType,
  requiredProps: Record<string, any>
) {
  it('supports input icon', async () => {
    const { getByText } = await renderWithAct(
      <Component {...requiredProps} iconLeft="Test icon left" iconRight="Test icon right" />
    );
    expect(getByText('Test icon left')).toBeInTheDocument();
    expect(getByText('Test icon right')).toBeInTheDocument();
  });
}
