import { compose, color, fontSize, space, fontFamily, fontWeight, lineHeight } from 'styled-system';

export const typography = compose(
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space
);
