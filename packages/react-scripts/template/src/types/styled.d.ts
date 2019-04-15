import 'styled-components';

declare module 'styled-components' {
  export interface IDefaultTheme {
    borders: any[];
    breakpoints: number[];
    colors: {
      [key: string]: any;
      blacks: string[];
      whites: string[];
    };
    fonts: {
      sansSerif: string;
    };
    fontSizes: number[];
    fontWeights: number[];
    letterSpacings: number[];
    maxWidths: number[];
    minWidths: number[];
    space: number[];
  }
}
