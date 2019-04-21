import styled from "styled-components";
import { space, SpaceProps } from 'styled-system';
import theme from '../../theme';

/**
 * @render react
 * @name H3 component
 * @description Heading level 3.
 * @example
 *  <H3>Heading</H3>
 */

const H3 = styled.h3<SpaceProps>`
  ${space};
  color: ${({ color, theme }) => color || theme.colors.textColorDark};
  font-size: ${({ theme }) => theme.fontSizes[7]}px;
  font-weight: ${theme.fontWeights[3]};
  letter-spacing: ${theme.letterSpacings[2]}rem;
`;

export default H3;
