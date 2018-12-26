import React, { memo } from 'react';
import styled from 'styled-components';

import { Banner, ExtendedLogo, Layout, Mouse } from '../components';

const Wrapper = styled.div`
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 1px;
  scroll-behavior: smooth;
  transform-style: preserve-3d;
`;

const Parallax = styled.div`
  align-items: center;
  display: flex;
  flex: 1 0 auto;
  height: 100vh;
  justify-content: center;
  position: relative;
  transform: translateZ(-1px) scale(2);
  z-index: -1;
`;

const Content = styled.main`
  background-color: #dae6f1;
  display: block;
  padding: 20vh 0;
  position: relative;
  z-index: 1;

  .c-extendedLogo {
    height: 96px;
    margin: 0 auto;
    position: relative;
    width: 96px;

    .c-logo {
      height: 100%;
      width: 100%;
    }
  }

  .c-card {
    background-color: #ffffff;
    border: thin solid #fafafa;
    border-radius: 4px;
    margin: 0 auto;
    max-width: 640px;
    min-height: 200px;
    width: 100%;
  }
`;

const IndexPage = () => (
  <Layout>
    <ExtendedLogo grayscale />
    <Wrapper>
      <Parallax>
        <Banner />
        <Mouse />
      </Parallax>
      <Content>
        <ExtendedLogo />
      </Content>
    </Wrapper>
  </Layout>
);

export default memo(IndexPage);
