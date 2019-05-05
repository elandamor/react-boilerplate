import styled from "styled-components";
import { color, fontSize, space, StyledSystemProps } from 'styled-system';

/**
 * @render react
 * @name H5 component
 * @description Heading level 5.
 * @example
 *  <H5>Heading</H5>
 */

const H5 = styled.h5<StyledSystemProps>`
  ${color};
  ${fontSize};
  ${space};
`;

H5.defaultProps = {
  color: 'text',
  fontSize: [4,5],
}

export default H5;
