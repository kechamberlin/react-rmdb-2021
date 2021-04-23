import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Thumb.styles';

export default function Thumb({ image, movieId, clickable }) {
  return (
    <div>
      <Image src={image} alt="movie-thumb" />
    </div>
  );
}
