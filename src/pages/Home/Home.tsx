import Card from 'components/Card';
import { CardsContainer } from 'components/Card/styles';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import ReactSelect from 'react-select';

const Home: React.FC = () => {
  let cardProps = {
    title: 'Fragmentação Gravitacional',
    level: '4',
    casting_time: '1 action',
    range_area: '60 feet',
    components: 'V, S, M (Cajado)',
    duration: 'Concentração, até 10 rounds',
    school: 'Evocation',
    description: `
    Você invoca a energia gravitacional ao seu redor, criando uma esfera roxa de força caótica. Escolha um ponto dentro do alcance como o centro da esfera. Cada criatura em um raio de 20 pés desse ponto deve fazer um teste de resistência de Constituição.

    Uma criatura que falhar no teste de resistência sofre 4d6 de dano de força e é afetada por uma gravidade intensificada. Durante a duração da magia, a velocidade da criatura é reduzida pela metade, e ela tem desvantagem em testes de Força e Destreza, Se falhar por mais de 5 fica prone. Além disso, sempre que a criatura se mover ou tentar realizar uma ação, ela sofrerá 2d6 de dano de força adicional.

    Uma criatura bem-sucedida no teste de resistência sofre metade do dano de força inicial e não fica sujeita à gravidade intensificada, mas ainda recebe metade do dano de força adicional em caso de movimento ou ação.

    No final de cada turno de uma criatura afetada, ela pode fazer um novo teste de resistência de Constituição para encerrar o efeito da gravidade intensificada.`,
  };

  const { data: spells } = useQuery('spells', async () => {
    const response = await fetch('https://www.dnd5eapi.co/api/spells');
    const data = await response.json();

    return data;
  });

  const [cardCount, setCardCount] = React.useState(1);
  const [selectedSpell, setSelectedSpell] = React.useState<any>();

  const { data: spell } = useQuery(
    ['spell', selectedSpell?.value],
    async () => {
      const response = await fetch(
        `https://www.dnd5eapi.co/api/spells/${selectedSpell?.value}`,
      );
      const data = await response.json();

      return data;
    },
    {
      enabled: !!selectedSpell,
    },
  );

  cardProps = {
    title: spell?.name,
    level: spell?.level,
    casting_time: spell?.casting_time,
    range_area: spell?.range,
    components: spell?.components.join(', '),
    duration: spell?.duration,
    school: spell?.school?.name,
    description: spell?.desc,
  };

  return (
    <>
      <button onClick={() => setCardCount(cardCount + 1)}>Add Card</button>

      <button onClick={() => setCardCount(cardCount - 1)}>Remove Card</button>
      <ReactSelect
        options={spells?.results.map((spell: any) => ({
          value: spell.index,
          label: spell.name,
        }))}
        onChange={option => setSelectedSpell(option)}
        styles={{
          container: provided => ({
            ...provided,
            zIndex: 20,
          }),
        }}
      />

      <CardsContainer>
        {Array.from({ length: cardCount }).map((_, index) => (
          <Card key={index} {...cardProps} />
        ))}
      </CardsContainer>
    </>
  );
};

export default Home;
