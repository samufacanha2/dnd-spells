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
        <Level contentEditable>SPELL LVL {level}</Level>
        <Details>
          <Row>
            <span contentEditable>Casting Time: {casting_time}</span>
            <span contentEditable>Range/Area: {range_area}</span>
          </Row>
          <Row>
            <span contentEditable>Components: {components}</span>
          </Row>
          <Row>
            <span contentEditable>Duration: {duration}</span>
          </Row>
        </Details>

        <Description contentEditable>{description}</Description>
      </CardText>
      <CardImage src="./card_bg.png" />;
    </CardContainer>
  );
};

export default Card;