import styled from 'styled-components';
import { space, StyledSystemProps, alignItems, display, flex, flexDirection, justifyContent, flexWrap, order, compose } from 'styled-system';

export interface IFlexProps extends StyledSystemProps {}

/**
 * @render react
 * @name Flex component
 * @description Flex component.
 * @example
 *  <Flex>
 *    <Component />
 *  </Flex>
 */

export const FlexStyles = compose(
  alignItems,
  display,
  flex,
  flexDirection,
  flexWrap,
  justifyContent,
  order,
  space,
);

const Flex = styled.div<IFlexProps>`
  ${FlexStyles};
`;

Flex.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
}

export default Flex;
