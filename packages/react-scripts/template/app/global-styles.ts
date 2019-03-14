import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto';

export const THEME = {
  palette: {
    error: '#B00020',
  },
  spacing: [8,16,24,32,40,48,56,64,72,80],
};

export default createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 0px !important;
    height: 2px !important
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2)
  }

  *::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.08)
  }

  :root {
    --body-background: ${(props: any) => props.theme.palette.backgroundColor};
    --brand-success: #34e79a;
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--body-background);
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

  body {
    font-family: 'Roboto',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen
      ,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  }
`;
