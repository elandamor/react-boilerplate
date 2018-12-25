import React, { SFC } from 'react';

import Wrapper, { Heading, Tagline } from './styles';

interface IProps {
  className?: string;
}

const Banner:SFC<IProps> = ({ className }) => (
  <Wrapper className={className}>
    <Heading>React Boilerplate</Heading>
    <Tagline>
      A scalable, offline-first foundation for your next React project,
      with a focus on performance and best practices.
    </Tagline>
  </Wrapper>
);

export default Banner;
