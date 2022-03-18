import { createStyles, ThemeToken, CSSObject, linearGradient } from '@vident-ui/styles';

interface TextStyles {
  color?: ThemeToken<'colors', string>;
  variant: 'text' | 'link' | 'gradient';
  size: ThemeToken<'fontSizes'>;
  lineClamp?: number;
  inline: boolean;
  inherit: boolean;
  gradientFrom: ThemeToken<'colors', string>;
  gradientTo: ThemeToken<'colors', string>;
  gradientDeg?: number;
  transform?: 'capitalize' | 'uppercase' | 'lowercase';
  align?: 'left' | 'center' | 'right' | 'justify';
  weight: React.CSSProperties['fontWeight'];
}

function getLineClamp(lineClamp: number): CSSObject {
  if (typeof lineClamp === 'number') {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: lineClamp,
      WebkitBoxOrient: 'vertical',
    };
  }

  return {};
}

export default createStyles(
  (
    { theme },
    {
      color = theme.colors?.gray500,
      variant,
      size,
      lineClamp = 3,
      inline,
      inherit,
      gradientDeg,
      gradientTo,
      gradientFrom,
      weight,
      transform,
      align,
    }: TextStyles
  ) =>
    // eslint-disable-next-line arrow-body-style
    {
      return {
        root: {
          ...getLineClamp(lineClamp),
          color,
          fontFamily: inherit ? 'inherit' : undefined,
          fontSize: inherit ? 'inherit' : size,
          lineHeight: inherit ? 'inherit' : inline ? 1 : '$normal',
          textDecoration: 'none',
          WebkitTapHighlightColor: 'transparent',
          fontWeight: inherit ? 'inherit' : weight,
          textTransform: transform,
          textAlign: align,

          '&:hover': {
            textDecoration: variant === 'link' ? 'underline' : 'none',
          },

          '&:focus': {
            ring: '$3',
          },
        },

        gradient: {
          backgroundImage: linearGradient(
            gradientDeg,
            `${`${gradientFrom}`}`,
            `${`${gradientTo}`}`
          ),
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      };
    }
);
