import styled from "styled-components";
import { StyledSystemProps } from 'styled-system';
import { headingStyles } from '../index';

/**
 * @render react
 * @name H4 component
 * @description Heading level 4.
 * @example
 *  <H4>Heading</H4>
 */

const H4 = styled.h4<StyledSystemProps>`
  ${headingStyles};
`;

H4.defaultProps = {
  color: 'text',
  fontSize: [5,6],
}

export default H4;
