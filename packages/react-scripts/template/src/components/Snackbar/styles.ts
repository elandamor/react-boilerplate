import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import { THEME } from '../../global-styles';
import Flex from '../Flex';
import { ISnackbarProps } from './index';

const Wrapper = styled(Flex)`
  ${space};
  align-items: center;
  bottom: 0;
  color: ${THEME.colors.white};
  font-size: ${THEME.fontSizes[2]}px;
  justify-content: center;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 8;

  ${({ leading }: ISnackbarProps) => leading && css`
    justify-content: flex-start;
  `}
`;

export const Surface = styled(Flex)`
  ${space};
  background-color: ${THEME.colors.blacks[10]};
  border-radius: ${THEME.space[1] / 2}px;
  box-shadow:
    0 3px 5px -1px ${THEME.colors.blacks[4]},
    0 6px 10px 0 ${THEME.colors.blacks[3]},
    0 1px 18px 0 ${THEME.colors.blacks[3]};
  max-width: 672px;
  min-width: ${THEME.minWidths[1]}px;
`;

export const Actions = styled(Flex)`
  ${space};
`;

export default Wrapper;
