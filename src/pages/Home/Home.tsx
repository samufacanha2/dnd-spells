import Card from 'components/Card';
import { CardsContainer } from 'components/Card/styles';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import ReactSelect from 'react-select';
import { Button, ButtonsContainer, Content, IconContainer } from './styles';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useUi } from 'contexts/ui';

const Home: React.FC = () => {
  const [cardCount, setCardCount] = React.useState(1);
  const { hidden, setHidden } = useUi();

  return (
    <Content>
      <IconContainer onClick={() => setHidden(!hidden)} hidden={hidden}>
        {hidden ? (
          <>
            <BsFillEyeFill />
          </>
        ) : (
          <>
            <BsFillEyeSlashFill /> Hide UI
          </>
        )}
      </IconContainer>

      {!hidden && (
        <ButtonsContainer>
          <Button onClick={() => setCardCount(cardCount + 1)}>Add Card</Button>
          <Button onClick={() => setCardCount(cardCount - 1)}>
            Remove Card
          </Button>
        </ButtonsContainer>
      )}

      <CardsContainer>
        {Array.from({ length: cardCount }).map((_, index) => (
          <Card key={index} />
        ))}
      </CardsContainer>
    </Content>
  );
};

export default Home;
