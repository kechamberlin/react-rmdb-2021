import React from 'react';
import { Image, Wrapper } from './Actor.styles';

export default function Actor({ name, character, imageUrl }) {
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}
