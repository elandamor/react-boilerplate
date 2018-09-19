import React, { SFC } from 'react';
import classNames from 'classnames';
// Dependencies
import ICONS from './constants';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name Icon component
 * @description Icon component.
 * @example
 * <Icon
 *  icon="star"
 * />
 */

interface IProps {
  className?: string;
  icon: string;
  size?: number;
  viewBox?: string;
}

const Icon: SFC<IProps> = ({ className, icon, size, viewBox }) => (
  <Wrapper className={classNames('c-icon', className)} aria-hidden="true">
    <svg height={`${size}`} width={`${size}`} viewBox={`${viewBox}`}>
      {ICONS[icon] &&
        ICONS[icon]
          .split(',')
          .map((p: string, idx: number) => <path key={idx} d={p} />)}
    </svg>
  </Wrapper>
);

Icon.defaultProps = {
  size: 24,
  viewBox: '0 0 24 24',
};

export default Icon;
