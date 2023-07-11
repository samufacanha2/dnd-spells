import styled, { css } from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 0.125rem;
  row-gap: 2rem;

  padding: 2rem 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CardContainer = styled.div`
  position: relative;
  --default-height: 1351;
  --default-width: 975;

  width: 312px;
  aspect-ratio: var(--default-width) / var(--default-height);

  zoom: 0.8;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  position: absolute;
  left: 0;
`;

export const CardText = styled.div`
  position: absolute;
  z-index: 10;

  width: 100%;
  height: 100%;
`;

const centerStyle = css`
  left: 50%;
  transform: translateX(-50%);
`;

export const Title = styled.h1`
  font-size: 1rem;
  width: 75%;
  text-align: center;

  position: absolute;
  top: 2rem;
  ${centerStyle}
`;

export const Level = styled.h2`
  font-size: 0.8rem;
  position: absolute;
  ${centerStyle}

  top: 3.2rem;
`;

export const Details = styled.div`
  font-size: 0.75rem;
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  font-weight: 600;

  top: 5rem;
  left: 0;
  right: 0;

  padding: 0 1.5rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 0.125rem;
`;

export const Description = styled.p`
  font-size: 0.66rem;
  font-weight: 400;
  line-height: 1.05;

  position: absolute;

  top: 8.5rem;
  left: 0;
  right: 0;

  padding: 0 2.25rem 0 2.5rem;
`;
