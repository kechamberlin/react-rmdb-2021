import React from 'react';
import { Wrapper, Content } from './Grid.styles';

export default function Grid({ header, children }) {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children}</Content>
    </Wrapper>
  );
}
