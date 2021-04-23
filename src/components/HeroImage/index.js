import React from 'react';
import { Wrapper, Content, Text } from './HeroImage.styles';

export default function HeroImage({ image, title, text }) {
  return (
    <div>
      <Wrapper image={image}>
        <Content>
          <Text>
            <h1>{title}</h1>
            <p>{text}</p>
          </Text>
        </Content>
      </Wrapper>
    </div>
  );
}
