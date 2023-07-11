import {
  CardContainer,
  CardImage,
  CardText,
  Description,
  Details,
  Level,
  Row,
  Title,
} from './styles';

interface CardProps {
  title?: string;
  level?: string;
  casting_time?: string;
  range_area?: string;
  components?: string;
  duration?: string;
  school?: string;
  description?: string;
  image?: string;
}

import bg_image from '../../assets/card_bg.png';

const Card: React.FC<CardProps> = ({
  title,
  level,
  casting_time,
  range_area,
  components,
  duration,
  school,
  description,
  image,
}) => {
  return (
    <CardContainer>
      <CardText>
        <Title contentEditable>{title}</Title>
        <Level contentEditable>LVL {level}</Level>
        <Details>
          <Row>
            <span contentEditable>Tempo de Cast: {casting_time}</span>
            <span contentEditable>Alcance/Área: {range_area}</span>
          </Row>
          <Row>
            <span contentEditable>Componentes: {components}</span>
          </Row>
          <Row>
            <span contentEditable>Duração: {duration}</span>
          </Row>
        </Details>

        <Description contentEditable>{description}</Description>
      </CardText>
      <CardImage src={bg_image} />
    </CardContainer>
  );
};

export default Card;
