import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto';

export const GENERATORS = {
  spacing: (length: number, baseline: number) =>
    Array.from({ length }, (_, i: number) => baseline * ++i),
};

export const LAYOUT = {
  baseline: 8, // dp
};

export const THEME = {
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  breakpoints: [32, 48, 64], // em
  colors: {
    background: '#FFFFFF',
    black: '#000000',
    primary: '#2D68EE',
    primaryDark: '#003FBB',
    primaryLight: '#7395FF',
    error: '#B00020',
    success: '#00C851',
    surface: '#FFFFFF',
    white: '#FFFFFF',
    cardBackground: '#FFFFFF',
    cardBorderColor: '#E4E6E9',
    sidebarBackground: '#F7F7FA',

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
  },
  fonts: {
    sansSerif: `'Roboto',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen
    ,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif`,
  },
  fontSizes: [10, 12, 14, 16, 20, 24, 34, 48, 60, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  goldenRatio: 1.618,
  letterSpacings: [-1.5, -0.5, 0, 0.1, 0.15, 0.25, 0.4, 0.5, 1.25, 1.5],
  maxWidths: [320],
  minWidths: [320],
  space: [0].concat(GENERATORS.spacing(10, LAYOUT.baseline)),
};

export default createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    /* outline: thin dashed red; */
  }

  *::-webkit-scrollbar {
    width: 0px !important;
    height: 2px !important;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${THEME.colors.blacks[1]};
  }

  *::-webkit-scrollbar-track {
    background: ${THEME.colors.whites[3]};
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${THEME.colors.background};
    font-family: ${THEME.fonts.sansSerif};
    font-feature-settings: 'liga', 'kern' 1;
    font-kerning: normal;
    font-weight: 500;
    height: 100%;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    width: 100%;
  }

  html {
    overflow-x: hidden;
  }

  [href] {
    color: ${THEME.colors.primaryDark};
    text-decoration: none;
  }

  [sronly], .sr-only {
    height: 0;
    opacity: 0;
    position: absolute;
  }
`;
