import Card from 'components/Card';
import React from 'react';

const Home: React.FC = () => {
  const cardProps = {
    title: 'Fireball',
    level: '3',
    casting_time: '1 action',
    range_area: '150 feet',
    components: 'V, S, M',
    duration: 'Instantaneous',
    school: 'Evocation',
    description:
      'A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame.',
  };

  return <Card {...cardProps} />;
};

export default Home;
