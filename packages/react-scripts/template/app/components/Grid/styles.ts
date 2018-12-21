import styled from 'styled-components';
import { IProps } from './index';

const Wrapper = styled.div<IProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: ${({ gap }) => gap ? `${gap}px` : '20px'};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default Wrapper;
