import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper, { ChipIcon, ChipRemove, ChipText } from './styles';
import { XCircle } from 'react-feather';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Chip');

export interface IChipProps {
  className?: string;
  icon?: React.ReactNode;
  onRemove?: (event: React.MouseEvent) => void;
  showRemove?: boolean;
  text: string | number;
};

/**
 * @render react
 * @name Chip component
 * @description Compact element that represent an input, attribute, or action.
 * @example
 * <Chip text="Name" />
 */

const Chip: FC<IChipProps> = ({
  className,
  icon,
  onRemove: handleRemove,
  showRemove,
  text
}) => (
  <Wrapper className={classNames('c-chip', className)} showRemove={showRemove}>
    {icon && <ChipIcon>{icon}</ChipIcon>}
    <ChipText>{text}</ChipText>
    {showRemove && (
      <ChipRemove
        iconOnly
        icon={<XCircle />}
        onClick={handleRemove}
      />
    )}
  </Wrapper>
);

Chip.defaultProps ={
  showRemove: false,
}

export default Chip;
