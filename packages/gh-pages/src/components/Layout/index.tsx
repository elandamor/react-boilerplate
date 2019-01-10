import React, { SFC } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
// Contexts
import NetworkStatusProvider from '../../contexts/networkStatus.context';

import './index.css';

interface IProps {
  children: any;
  data?: {
    site: {
      siteMetadata: {
        author: string;
        description: string;
        name: string;
      }
    }
  }
}

const Layout:SFC<IProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `}
    render={({ site }) => (
      <NetworkStatusProvider>
        <Helmet>
          <html lang="en" />
          <title>{site.siteMetadata.title} - Built with love by {site.siteMetadata.author}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        {children}
      </NetworkStatusProvider>
    )}
  />
);

export default Layout;
