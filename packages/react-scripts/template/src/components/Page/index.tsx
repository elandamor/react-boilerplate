import React from 'react';
import styled from 'styled-components';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Page');

interface IPageProps {
  children: React.ReactNode;
};

/**
 * @render react
 * @name Page component
 * @description Page component.
 * @example
 * <Page />
 */

const Page = styled.main<IPageProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;

export default Page;
