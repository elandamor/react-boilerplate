import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { THEME } from '../../global-styles';

/**
 * @render react
 * @name H6 component
 * @description Heading level 6.
 * @example
 *  <H6>Heading</H6>
 */

const H6 = styled.h6<SpaceProps>`
  ${space};
  color: ${({ color }) => color || THEME.colors.textColorDark};
  font-size: ${THEME.fontSizes[4]}px;
  font-weight: ${THEME.fontWeights[4]};
  letter-spacing: ${THEME.letterSpacings[3]}rem;
`;

export default H6;
