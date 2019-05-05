import styled from "styled-components";
import { color, fontSize, space, StyledSystemProps } from 'styled-system';

/**
 * @render react
 * @name H1 component
 * @description Heading level 1.
 * @example
 *  <H1>Heading</H1>
 */

const H1 = styled.h1<StyledSystemProps>`
  ${color};
  ${fontSize};
  ${space};
`;

H1.defaultProps = {
  color: 'text',
  fontSize: [8,9],
}

export default H1;
