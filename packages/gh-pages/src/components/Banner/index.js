import React from 'react'
import PropTypes from 'prop-types'

import Wrapper, { Tagline } from './styles';

const Banner = () => (
  <Wrapper>
    <Tagline>
      A scalable, offline-first foundation for your next React project,
      with a focus on performance and best practices.
    </Tagline>
  </Wrapper>
)

Banner.propTypes = {
  siteTagline: PropTypes.string,
  siteTitle: PropTypes.string,
}

Banner.defaultProps = {
  siteTagline: '',
  siteTitle: '',
};

export default Banner
