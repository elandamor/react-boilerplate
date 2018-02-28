/**
 * Button
 * @type {Component} Presentational
 */

import React from 'react';
import PropTypes from 'prop-types';
// Styled-Components
import Wrapper from './styles';

const Button = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Button;
