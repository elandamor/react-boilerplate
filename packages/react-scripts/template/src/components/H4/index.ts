import styled from "styled-components";
import { color, fontSize, space, StyledSystemProps } from 'styled-system';

/**
 * @render react
 * @name H4 component
 * @description Heading level 4.
 * @example
 *  <H4>Heading</H4>
 */

const H4 = styled.h4<StyledSystemProps>`
  ${color};
  ${fontSize};
  ${space};
`;

H4.defaultProps = {
  color: 'text',
  fontSize: [5,6],
}

export default H4;
