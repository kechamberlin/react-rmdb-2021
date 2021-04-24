import React from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
import NoImage from '../images/no_image.jpg';
import { useMovieFetch } from '../hooks/useMovieFetch';

export default function Movie() {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  if (loading) return <Spinner />;
  // TODO: Make a more elaborate error Component
  if (error) return <div>Something went wrong...</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
    </>
  );
}
