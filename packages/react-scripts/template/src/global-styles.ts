import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto';
import theme from './theme';

export default createGlobalStyle`
  * {
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 4px !important;
    height: 2px !important;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.isDark
      ? theme.colors.whites[5] : theme.colors.blacks[5]};
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.isDark
      ? theme.colors.blacks[7] : theme.colors.whites[7]};
  }

  html,
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${theme.fonts.sansSerif};
    font-feature-settings: 'liga', 'kern' 1;
    font-kerning: normal;
    font-weight: ${theme.fontWeights[3]};
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
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }

  [sronly], .sr-only {
    height: 0;
    opacity: 0;
    position: absolute;
  }
`;
