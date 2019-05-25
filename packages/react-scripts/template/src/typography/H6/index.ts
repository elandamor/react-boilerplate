import styled from 'styled-components';
import { StyledSystemProps } from 'styled-system';
import { headingStyles } from '../index';

/**
 * @render react
 * @name H6 component
 * @description Heading level 6.
 * @example
 *  <H6>Heading</H6>
 */

const H6 = styled.h6<StyledSystemProps>`
  ${headingStyles};
`;

H6.defaultProps = {
  color: 'text',
  fontSize: [3,4],
}

export default H6;
