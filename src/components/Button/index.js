import React from 'react';
import { Wrapper } from './Button.styles';

export default function Button({ text, callback }) {
  return (
    <Wrapper type="button" onClick={callback}>
      {text}
    </Wrapper>
  );
}
