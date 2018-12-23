import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
// Contexts
import NetworkStatusProvider from '../../contexts/networkStatus.context';

import './index.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <NetworkStatusProvider>
        <Helmet>
          <html lang="en" />
        </Helmet>
        {children}
      </NetworkStatusProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
