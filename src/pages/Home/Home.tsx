import Card from 'components/Card';
import React from 'react';

const Home: React.FC = () => {
  const cardProps = {
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

  return <Card {...cardProps} />;
};

export default Home;
