import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  --default-height: 1351;
  --default-width: 975;

  width: 90vw;
  aspect-ratio: var(--default-width) / var(--default-height);
  margin: 2rem auto;
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
  font-size: 4vw;

  position: absolute;
  top: 8.5vw;
  ${centerStyle}
`;

export const Level = styled.h2`
  font-size: 3vw;
  position: absolute;
  ${centerStyle}

  top: 14vw;
`;

export const Details = styled.div`
  font-size: 3vw;
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-weight: 600;

  top: 22vw;
  left: 0;
  right: 0;

  padding: 0 7vw;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 2rem;
`;

export const Description = styled.p`
  font-size: 3.2vw;
  font-weight: 400;
  line-height: 1.5;

  position: absolute;

  top: 40vw;
  left: 0;
  right: 0;

  padding: 0 10vw 0 12vw;
`;
