import Card from 'components/Card';
import { CardsContainer } from 'components/Card/styles';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import ReactSelect from 'react-select';

const Home: React.FC = () => {
  const [cardCount, setCardCount] = React.useState(1);

  return (
    <>
      <button onClick={() => setCardCount(cardCount + 1)}>Add Card</button>

      <button onClick={() => setCardCount(cardCount - 1)}>Remove Card</button>

      <CardsContainer>
        {Array.from({ length: cardCount }).map((_, index) => (
          <Card key={index} />
        ))}
      </CardsContainer>
    </>
  );
};

export default Home;
