import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">News Detail {id}</h1>
      <p className="text-gray-600 mb-4">Displaying article with ID: {id}</p>
      <p className="text-gray-600">Here you can add the detailed content of the article with ID {id}.</p>
    </div>
  );
};

export default NewsDetail;
