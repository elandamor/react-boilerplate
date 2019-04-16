import styled from "styled-components";
import { space, SpaceProps } from 'styled-system';
import { THEME } from "../../global-styles";

/**
 * @render react
 * @name H2 component
 * @description Heading level 2.
 * @example
 *  <H2>Heading</H2>
 */

const H2 = styled.h2<SpaceProps>`
  ${space};
  color: ${({ color, theme }) => color || theme.colors.textColorDark};
  font-size: ${({ theme }) => theme.fontSizes[8]}px;
  font-weight: ${THEME.fontWeights[2]};
  letter-spacing: ${THEME.letterSpacings[1]}rem;
`;

export default H2;
