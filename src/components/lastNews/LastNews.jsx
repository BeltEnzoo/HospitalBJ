// components/lastNews/LastNews.jsx
import React from 'react';
import { Container, Title, Grid } from './LastNewsStyles';
import NewsCard from '../newsCard/NewsCard';

const LastNews = ({ newsData }) => {
  return (
    <Container>
      <Title>Últimas Noticias</Title>
      <Grid>
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </Grid>
    </Container>
  );
};

export default LastNews;
