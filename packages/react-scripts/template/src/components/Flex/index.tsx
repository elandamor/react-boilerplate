import styled from 'styled-components';
import {
  space,
  AlignItemsProps,
  DisplayProps,
  FlexDirectionProps,
  JustifyContentProps,
  SpaceProps,
} from 'styled-system';

export interface IFlexProps extends
  AlignItemsProps,
  DisplayProps,
  FlexDirectionProps,
  JustifyContentProps,
  SpaceProps
{
  size?: number;
}

/**
 * @render react
 * @name Flex component
 * @description Flex component.
 * @example
 *  <Flex>
 *    <Component />
 *  </Flex>
 */

const Flex = styled.div<IFlexProps>`
  ${space};
  align-items: ${({ alignItems }) => alignItems};
  display: ${({ display }) => display};
  flex: ${({ size }) => size};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

Flex.defaultProps = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  size: 1,
}

export default Flex;
