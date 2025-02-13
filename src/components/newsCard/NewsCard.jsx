import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Info } from './NewsCardStyles';

const NewsCard = ({ news }) => {
  return (
    <Link to={`/news/${news.id}`}>
      <Card>
        <Image src={news.image} alt={news.title} />
        <Info>
          <h3>{news.title}</h3>
          <p>{news.description}</p>
        </Info>
      </Card>
    </Link>
  );
};

export default NewsCard;
