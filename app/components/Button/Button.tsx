import React, { MouseEvent, SFC } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
// Styles
import Wrapper from './styles'

/**
 * @render react
 * @name Button component
 * @description Button component.
 * @example
 * <Button />
 */

type Props = {
  className?: string
  primary?: boolean
  onClick(e: MouseEvent<HTMLElement>): void
}

const Button:SFC<Props> = ({ children, className, onClick: handleClick }) => (
  <Wrapper
    className={classNames('c-btn', className)}
    onClick={handleClick}
  >
    {children}
  </Wrapper>
)

Button.defaultProps = {
  className: ''
}

export default Button
