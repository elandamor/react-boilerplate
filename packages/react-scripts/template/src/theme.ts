import { DefaultTheme } from 'styled-components';

export const GENERATORS = {
  spacing: (length: number, baseline: number) =>
    Array.from({ length }, (_, i: number) => baseline * ++i),
};

export const LAYOUT = {
  baseline: 8, // dp
};

export const THEME: DefaultTheme = {
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  // Palette
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    cardBackground: '#FFFFFF',
    cardBorderColor: '#E4E6E9',
    link: '#003FBB',
    text: '#000000',
    // Brand
    primary: '#2D68EE',
    primaryDark: '#003FBB',
    primaryLight: '#7395FF',
    secondary: '#002699',
    secondaryDark: '#00016A',
    secondaryLight: '#514FCB',
    // States
    success: '#1BE597',
    successDark: '#1BE597',
    successLight: '#1BE597',
    warning: '#FFBB3C',
    warningDark: '#FFBB3C',
    warningLight: '#FFBB3C',
    error: '#FF3567',
    errorDark: '#FF3567',
    errorLight: '#FF3567',
    // Blacks
    black: '#000000',
    blacks: [
      'rgba(0,0,0,.0125)',
      'rgba(0,0,0,.025)',
      'rgba(0,0,0,.05)',
      'rgba(0,0,0,.1)',
      'rgba(0,0,0,.2)',
      'rgba(0,0,0,.3)',
      'rgba(0,0,0,.4)',
      'rgba(0,0,0,.5)',
      'rgba(0,0,0,.6)',
      'rgba(0,0,0,.7)',
      'rgba(0,0,0,.8)',
      'rgba(0,0,0,.9)',
    ],
    // Whites
    white: '#FFFFFF',
    whites: [
      'rgba(255,255,255,.0125)',
      'rgba(255,255,255,.025)',
      'rgba(255,255,255,.05)',
      'rgba(255,255,255,.1)',
      'rgba(255,255,255,.2)',
      'rgba(255,255,255,.3)',
      'rgba(255,255,255,.4)',
      'rgba(255,255,255,.5)',
      'rgba(255,255,255,.6)',
      'rgba(255,255,255,.7)',
      'rgba(255,255,255,.8)',
      'rgba(255,255,255,.9)',
    ],
    // Color modes
    modes: {
      dark: {
        background: '#282c35',
        surface: '#282c35',
        link: '#7395FF',
        text: '#FFFFFF'
      }
    }
  },
  // Typography
  fonts: {
    sansSerif: `'Roboto',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen
    ,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  letterSpacings: [-1.5, -0.5, 0, 0.1, 0.15, 0.25, 0.4, 0.5, 1.25, 1.5],
  // Layout
  breakpoints: [512, 768, 1024],
  maxWidths: [320],
  minWidths: [160, 320, 344],
  space: [0].concat(GENERATORS.spacing(10, LAYOUT.baseline)),
};

export default THEME;
