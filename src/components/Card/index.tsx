import {
  CardContainer,
  CardImage,
  CardText,
  Container,
  Description,
  Details,
  Duration,
  Icon,
  Level,
  Material,
  Row,
  School,
  Title,
  TitleAndLevel,
} from './styles';

import bg_image from '../../assets/card_bg.png';
import ritual from '../../assets/ritual.svg';
import concentration from '../../assets/concentration.svg';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import ReactSelect, { components } from 'react-select';
import { useSpells } from 'contexts/spells';
import { useUi } from 'contexts/ui';
import { Spell } from 'types';

const getMaterial = (material?: string) => {
  if (material?.includes('consume')) {
    return <Material>Material: {material}</Material>;
  }
};

const Card: React.FC = () => {
  let defaultSpell: Spell = {
    higher_level: [],
    index: 'alter-self',
    name: 'Alter Self',
    desc: [
      'You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.',
      '***Aquatic Adaptation.*** You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.',
      "***Change Appearance.*** You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can't appear as a creature of a different size than you, and your basic shape stays the same; if you're bipedal, you can't use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.",
      '***Natural Weapons.*** You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it.',
    ],
    range: 'Self',
    components: ['V', 'S'],
    ritual: false,
    duration: 'Up to 1 hour',
    concentration: true,
    casting_time: '1 action',
    level: 2,
    school: {
      index: 'transmutation',
      name: 'Transmutation',
      url: '/api/magic-schools/transmutation',
    },
    classes: [
      {
        index: 'sorcerer',
        name: 'Sorcerer',
        url: '/api/classes/sorcerer',
      },
      {
        index: 'wizard',
        name: 'Wizard',
        url: '/api/classes/wizard',
      },
    ],
    subclasses: [
      {
        index: 'lore',
        name: 'Lore',
        url: '/api/subclasses/lore',
      },
    ],
    url: '/api/spells/alter-self',
  };

  const { spells } = useSpells();
  const { hidden } = useUi();
  const [selectedSpell, setSelectedSpell] = React.useState<any>();

  const { data: spell } = useQuery(
    ['spell', selectedSpell?.value],
    async () => {
      const response = await fetch(
        `https://www.dnd5eapi.co/api/spells/${selectedSpell?.value}`,
      );
      const data: Spell = await response.json();

      return data;
    },
    {
      enabled: !!selectedSpell,
      initialData: defaultSpell,
    },
  );

  return (
    <Container>
      {!hidden && (
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
          classNamePrefix="react-select"
        />
      )}
      <CardContainer>
        <CardText>
          <TitleAndLevel>
            <Title contentEditable>{spell?.name}</Title>
            <Level contentEditable>
              LVL {spell?.level}
              {spell?.ritual && <Icon src={ritual} />}
            </Level>
          </TitleAndLevel>
          <Details>
            <Row>
              <span contentEditable>Cast Time: {spell?.casting_time}</span>
              <span contentEditable>Range/Area: {spell?.range}</span>
            </Row>
            <Row>
              <span contentEditable>
                Components: {spell?.components?.join(', ')}
              </span>
            </Row>
            <Row>
              <Duration contentEditable>
                Duration: {spell?.duration}
                {spell?.concentration && <Icon src={concentration} />}
              </Duration>
            </Row>
          </Details>

          <Description contentEditable>
            {getMaterial(spell?.material)}
            {spell?.desc?.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </Description>

          <School>
            <span contentEditable>{spell?.school?.index}</span>
          </School>
        </CardText>
        <CardImage src={bg_image} />
      </CardContainer>
    </Container>
  );
};

export default Card;
