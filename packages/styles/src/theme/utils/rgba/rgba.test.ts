import { rgba } from './rgba';
import { DEFAULT_THEME } from '../../VidentProvider';

describe('@vident-ui/styles/rgba', () => {
  it('correctly converts colors from hex to rgba', () => {
    expect(rgba('#228BE6', 0.74)(DEFAULT_THEME)).toBe('rgba(34, 139, 230, 0.74)');
    expect(rgba('96f2d7', 0.945)(DEFAULT_THEME)).toBe('rgba(150, 242, 215, 0.945)');
    expect(rgba('#000000', 0.333)(DEFAULT_THEME)).toBe('rgba(0, 0, 0, 0.333)');
    expect(rgba('#ffffff', 1)(DEFAULT_THEME)).toBe('rgba(255, 255, 255, 1)');
  });

  it('sets correct opacity in rgb color', () => {
    expect(rgba('rgb(1, 23, 124)', 0.3)(DEFAULT_THEME)).toBe('rgba(1, 23, 124, 0.3)');
  });

  it('sets correct opacity in rgba color', () => {
    expect(rgba('rgba(1, 23, 124, 0.5)', 0.3)(DEFAULT_THEME)).toBe('rgba(1, 23, 124, 0.3)');
  });

  it('returns empty string for incorrect values', () => {
    expect(rgba(null, 0.74)(DEFAULT_THEME)).toBe('rgba(0, 0, 0, 1)');
    expect(rgba('#000000', -12)(DEFAULT_THEME)).toBe('rgba(0, 0, 0, 1)');
    expect(rgba('#00000', 1)(DEFAULT_THEME)).toBe('rgba(0, 0, 0, 1)');
    expect(rgba('#000', 1)(DEFAULT_THEME)).toBe('rgba(0, 0, 0, 1)');
    expect(rgba('#000000', 24)(DEFAULT_THEME)).toBe('rgba(0, 0, 0, 1)');
    expect(rgba('#000000', 1.01)(DEFAULT_THEME)).toBe('rgba(0, 0, 0, 1)');
  });
});
