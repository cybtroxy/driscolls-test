import React from 'react';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = { id, title: 'News Title Demo', content: 'News Content demo.' };

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail;