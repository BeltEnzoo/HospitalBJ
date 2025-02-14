import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Info, StyledLink } from './newsCardStyles';

const NewsCard = ({ news }) => {
  return (
    <StyledLink to={`/news/${news.id}`}>
      <Card>
        <Image src={news.image} alt={news.title} />
        <Info>
          <h3>{news.title}</h3>
          <p>{news.description}</p>
        </Info>
      </Card>
    </StyledLink>
  );
};

export default NewsCard;
