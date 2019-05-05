import styled from 'styled-components';
import { color, fontSize, space, StyledSystemProps } from 'styled-system';

/**
 * @render react
 * @name H6 component
 * @description Heading level 6.
 * @example
 *  <H6>Heading</H6>
 */

const H6 = styled.h6<StyledSystemProps>`
  ${color};
  ${fontSize};
  ${space};
`;

H6.defaultProps = {
  color: 'text',
  fontSize: [3,4],
}

export default H6;
