import React from 'react';
import { useParams } from 'react-router-dom';
import { newsData } from '../data/newsData';
import { NewsWrapper, Title, Image, ContentWrapper } from './NewsDetail-styled'; // Importamos los estilos

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find(news => news.id === parseInt(id));

  if (!news) return <p>Noticia no encontrada.</p>;

  return (
    <NewsWrapper>
      <Title>{news.title}</Title>
      <Image src={news.image} alt={news.title} />
      <ContentWrapper dangerouslySetInnerHTML={{ __html: news.content }} />
    </NewsWrapper>
  );
};

export default NewsDetail;
