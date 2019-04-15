import styled from 'styled-components';
import { IGridProps } from './index';
import { THEME } from '../../global-styles';

const Wrapper = styled.div<IGridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  grid-gap: ${({ gap }) => (gap ? gap : THEME.space[3])}px;
`;

export default Wrapper;
