import styled from "styled-components";
import { StyledSystemProps } from 'styled-system';
import { headingStyles } from '../index';

/**
 * @render react
 * @name H1 component
 * @description Heading level 1.
 * @example
 *  <H1>Heading</H1>
 */

const H1 = styled.h1<StyledSystemProps>`
  ${headingStyles};
`;

H1.defaultProps = {
  color: 'text',
  fontSize: [8,9],
}

export default H1;
