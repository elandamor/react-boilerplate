import styled from 'styled-components';
import { IProps } from './index';

const Wrapper = styled.div`
  align-items: ${({ align }: IProps) => align || 'stretch'};
  display: flex;
  flex: ${({ size }: IProps) => size || '1'};
  flex-direction: ${({ direction }: IProps) => direction || 'row'};
  justify-content: ${({ justify }: IProps) => justify || 'flex-start'};
  margin-right: ${({ marginRight }: IProps) => marginRight + 'px' || '0px'};
`;

export default Wrapper;
