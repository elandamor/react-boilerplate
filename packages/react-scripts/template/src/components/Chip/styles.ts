import styled, { css } from 'styled-components';
import Button from '../Button';
import { THEME } from '../../global-styles';
import { IChipProps } from './index';

const Wrapper = styled.div`
  align-items: center;
  background-color: ${THEME.colors.blacks[3]};
  border-radius: ${THEME.space[2]}px;
  display: inline-flex;
  flex: none;
  font-size: ${THEME.fontSizes[2]}px;
  font-weight: 400;
  margin-right: ${THEME.space[1]}px;
  min-height: ${THEME.space[4]}px;
  padding: 0 12px;

  i, i > svg {
    height: 18px;
    width: 18px;
  }

  ${({ showRemove }: IChipProps) => showRemove && css`
    padding-right: ${THEME.space[0]}px;
  `}
`;

export const ChipIcon = styled.i``;

export const ChipText = styled.span``;


export const ChipRemove = styled(Button)`
  --size: ${THEME.space[4]}px;

  border-radius: 100%;
  height: var(--size);
  min-height: var(--size);
  min-width: var(--size);
  overflow: hidden;
  width: var(--size);
`;

export default Wrapper;
