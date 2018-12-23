import React from 'react';
import { Helmet } from 'react-helmet';
import { Banner, Layout, Logo } from '../components';

import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: .5;
  overflow: hidden;
  position: fixed;

  .c-logo {
    height: 90vw;
    position: absolute;
    width: 90vw;
    z-index: 0;

    &:first-child {
      .react:after,
      .react:before,
      .react-inner {
        border: thin solid #61dafb;
      }

      z-index: 1;
    }

    &:nth-child(2) {
      transform: rotate(30deg);
    }

    &:nth-child(3) {
      transform: rotate(45deg);
    }

    &:nth-child(4) {
      transform: rotate(75deg);
    }

    &:nth-child(5) {
      transform: rotate(7deg);
    }

    &:nth-child(6) {
      transform: rotate(22deg);
    }

    &:nth-child(7) {
      transform: rotate(38deg);
    }

    &:nth-child(8) {
      transform: rotate(53deg);
    }

    .react:after,
    .react:before,
    .react-inner {
      border: thin solid #e9e9e9;
    }

    .react-innerdot {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .c-logo {
      height: 90vh;
      width: 90vh;
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>React Boilerplate - Built with love by @elandamor</title>
      <meta name="description" content="A scalable, offline-first foundation for your next React project, with a focus on performance and best practices." />
    </Helmet>
    <Wrapper>
      <Logo noanimation />
      <Logo noanimation />
      <Logo noanimation />
      <Logo noanimation />
      <Logo noanimation />
      <Logo noanimation />
      <Logo noanimation />
      <Logo noanimation />
    </Wrapper>
    <Banner />
  </Layout>
)

export default IndexPage
