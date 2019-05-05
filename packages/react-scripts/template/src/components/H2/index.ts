import styled from "styled-components";
import { color, fontSize, space, StyledSystemProps } from 'styled-system';

/**
 * @render react
 * @name H2 component
 * @description Heading level 2.
 * @example
 *  <H2>Heading</H2>
 */

const H2 = styled.h2<StyledSystemProps>`
  ${color};
  ${fontSize};
  ${space};
`;

H2.defaultProps = {
  color: 'text',
  fontSize: [7,8],
}

export default H2;
