import styled from 'styled-components';

export interface IProps {
  align?: string;
  className?: string;
  direction?: string;
  justify?: string;
  marginRight?: string;
  size?: number;
}

/**
 * @render react
 * @name Flex component
 * @description Flex component.
 * @example
 *  <Flex />
 */

const Flex = styled.div`
  align-items: ${({ align }: IProps) => align || 'stretch'};
  display: flex;
  flex: ${({ size }: IProps) => size || '1'};
  flex-direction: ${({ direction }: IProps) => direction || 'row'};
  justify-content: ${({ justify }: IProps) => justify || 'flex-start'};
  margin-right: ${({ marginRight }: IProps) => marginRight + 'px' || '0px'};
`;

export default Flex;
