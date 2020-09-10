import React from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../data';

const DetailView = () => {
  const { slug } = useParams()

  const book = books.find(b => b.slug === slug)

  return (
    <div>{book.title}</div>
  )
}

export default DetailView