import styled from "styled-components";
import { StyledSystemProps } from 'styled-system';
import { headingStyles } from '../index';

/**
 * @render react
 * @name H3 component
 * @description Heading level 3.
 * @example
 *  <H3>Heading</H3>
 */

const H3 = styled.h3<StyledSystemProps>`
  ${headingStyles};
`;

H3.defaultProps = {
  color: 'text',
  fontSize: [6,7],
}

export default H3;
