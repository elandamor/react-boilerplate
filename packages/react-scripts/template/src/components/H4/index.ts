import styled from "styled-components";
import { space, SpaceProps } from 'styled-system';
import { THEME } from "../../global-styles";

/**
 * @render react
 * @name H4 component
 * @description Heading level 4.
 * @example
 *  <H4>Heading</H4>
 */

const H4 = styled.h4<SpaceProps>`
  ${space};
  color: ${({ color, theme }) => color || theme.colors.textColorDark};
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
  font-weight: ${THEME.fontWeights[7]};
  letter-spacing: ${THEME.letterSpacings[3]}rem;
`;

export default H4;
