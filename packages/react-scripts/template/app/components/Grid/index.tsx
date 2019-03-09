import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

export interface IProps {
  children: any;
  className?: string;
  columns: number;
  gap?: number;
}

/**
 * @render react
 * @name Grid component
 * @description Grid component.
 * @example
 * <Grid
 *  columns={2}
 *  gap={20}
 * >
 *  <Component />
 *  <Component />
 * </Grid>
 */

const Grid: FC<IProps> = ({ children, className, columns, gap }) => (
  <Wrapper
    className={classNames('c-grid', className)}
    columns={columns}
    gap={gap}
  >
    {children}
  </Wrapper>
);

export default Grid;
