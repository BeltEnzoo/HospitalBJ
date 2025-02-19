// pages/NewsDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { newsData } from '../data/newsData';

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find(news => news.id === parseInt(id));

  if (!news) return <p>Noticia no encontrada.</p>;

  return (
    <div>
      <h1>{news.title}</h1>
      <img src={news.image} alt={news.title} style={{ width: '250px', height: '250px' }} />
      <p>{news.contentexpor ? news.contentexpor : 'Contenido no disponible.'}</p>
    </div>
  );
};

export default NewsDetail;
