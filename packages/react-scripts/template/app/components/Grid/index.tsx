import React, { SFC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

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

export interface IProps {
  children: any;
  className?: string;
  columns: number;
  gap?: number;
};

const Grid: SFC<IProps> = ({ children, className, columns, gap }) => (
  <Wrapper
    className={classNames('c-grid', className)}
    columns={columns}
    gap={gap}
  >
    {children}
  </Wrapper>
);

export default Grid;
