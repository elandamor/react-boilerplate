import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  flex-shrink: 0;
  padding: 5rem 2rem;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.35;
  text-align: center;
  color: #7d93aa;
  background-image: linear-gradient(0deg,#dae6f1,transparent);
  position: fixed;
  width: 100vw;
  z-index: 1;

  @media (min-width: 600px) {
    font-size: 1.35rem;
  }
`;

export const Tagline = styled.p`
  max-width: 640px;
  text-align: center;
`;

export default Wrapper;
