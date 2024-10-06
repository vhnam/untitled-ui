import tokens from '@repo/design-tokens';
import get from 'lodash/get';
import type { Config } from 'tailwindcss';

type FontSizeKey = keyof typeof tokens.fontSize;
type FontWeightKey = keyof typeof tokens.fontWeight;
type LineHeightKey = keyof typeof tokens.lineHeight;
type LetterSpacingKey = keyof typeof tokens.letterSpacing;
type SpacingKey = keyof typeof tokens.spacing;
type RadiusKey = keyof typeof tokens.radius;
type BorderWidthKey = keyof typeof tokens.borderWidth;
type ElevationKey = keyof typeof tokens.elevation;

type ElevationType = {
  x: string;
  y: string;
  blur: string;
  spread: string;
  color: string;
  type: string;
};

const argb2rgba = (color: string) => {
  return '#' + color.slice(3, 9) + color[1] + color[2];
};

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    colors: {
      ...tokens.color,
      ...tokens.color.semantic,
      ...{
        transparent: 'transparent',
      },
    },
    fontFamily: {
      sans: [tokens.fontFamily.text, 'sans-serif'],
    },
    fontSize: Object.keys(tokens.fontSize).reduce(
      (acc, fontSizeKey) => {
        acc[fontSizeKey as FontSizeKey] =
          `${tokens.fontSize[fontSizeKey as FontSizeKey]}px`;
        return acc;
      },
      {} as Record<FontSizeKey, string>
    ),
    fontWeight: Object.keys(tokens.fontWeight).reduce(
      (acc, fontWeightKey) => {
        acc[fontWeightKey as FontWeightKey] =
          tokens.fontWeight[fontWeightKey as FontWeightKey];
        return acc;
      },
      {} as Record<FontWeightKey, string>
    ),
    lineHeight: Object.keys(tokens.lineHeight).reduce(
      (acc, lineHeightKey) => {
        acc[lineHeightKey as LineHeightKey] =
          `${tokens.lineHeight[lineHeightKey as LineHeightKey]}px`;
        return acc;
      },
      {} as Record<LineHeightKey, string>
    ),
    letterSpacing: Object.keys(tokens.letterSpacing).reduce(
      (acc, letterSpacingKey) => {
        acc[letterSpacingKey as LetterSpacingKey] =
          `${tokens.letterSpacing[letterSpacingKey as LetterSpacingKey]}px`;
        return acc;
      },
      {} as Record<LetterSpacingKey, string>
    ),
    borderRadius: Object.keys(tokens.radius).reduce(
      (acc, radiusKey) => {
        acc[radiusKey as RadiusKey] =
          `${tokens.radius[radiusKey as RadiusKey]}px`;
        return acc;
      },
      {} as Record<RadiusKey, string>
    ),
    borderWidth: Object.keys(tokens.borderWidth).reduce(
      (acc, borderWidthKey) => {
        acc[borderWidthKey as BorderWidthKey] =
          `${tokens.borderWidth[borderWidthKey as BorderWidthKey]}px`;
        return acc;
      },
      {} as Record<BorderWidthKey, string>
    ),
    boxShadow: (Object.keys(tokens.elevation) as ElevationKey[]).reduce(
      (acc, elevationLevel) => {
        acc[elevationLevel] = get(tokens.elevation, elevationLevel)
          .map(
            ({ x, y, blur, spread, color }: ElevationType) =>
              `${x}px ${y}px ${blur}px ${spread}px ${argb2rgba(color)}`
          )
          .join(', ');
        return acc;
      },
      {} as Record<ElevationKey, string>
    ),
    extend: {
      content: {
        empty: '""',
      },
      spacing: Object.keys(tokens.spacing).reduce(
        (acc, spacingKey) => {
          acc[spacingKey as SpacingKey] =
            `${tokens.spacing[spacingKey as SpacingKey]}px`;
          return acc;
        },
        {} as Record<SpacingKey, string>
      ),
    },
  },
  plugins: [],
};
export default config;
