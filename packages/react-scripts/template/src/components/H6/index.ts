import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import theme from '../../theme';

/**
 * @render react
 * @name H6 component
 * @description Heading level 6.
 * @example
 *  <H6>Heading</H6>
 */

const H6 = styled.h6<SpaceProps>`
  ${space};
  color: ${({ color }) => color || theme.colors.textColorDark};
  font-size: ${theme.fontSizes[4]}px;
  font-weight: ${theme.fontWeights[4]};
  letter-spacing: ${theme.letterSpacings[3]}rem;
`;

export default H6;
