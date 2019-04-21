import styled from "styled-components";
import { space, SpaceProps } from 'styled-system';
import theme from '../../theme';

/**
 * @render react
 * @name H1 component
 * @description Heading level 1.
 * @example
 *  <H1>Heading</H1>
 */

const H1 = styled.h1<SpaceProps>`
  ${space};
  color: ${({ color, theme }) => color || theme.colors.textColorDark};
  font-size: ${({ theme }) => theme.fontSizes[9]}px;
  font-weight: ${theme.fontWeights[2]};
`;

export default H1;
