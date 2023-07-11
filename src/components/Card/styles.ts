import { slideInX } from 'pages/Home/styles';
import { lighten, transparentize } from 'polished';
import styled, { css } from 'styled-components/macro';

const ReactSelect = css`
  .react-select {
    margin: 0.25rem 0;
    width: 100%;
  }
  .react-select-empty {
    margin: 0.25rem 0;
    width: 100%;
    .react-select__control {
      border: 1px dashed ${props => props.theme.secondary};
      filter: opacity(0.7);
      &:hover:not(:focus):not(:disabled) {
        filter: opacity(1) brightness(1.2);
      }
    }
  }
  .react-select__control--is-focused {
    border: none;
    border-radius: 0.5rem;
    height: 2.5rem;
    width: 100%;
    color: ${props => props.theme.secondary};
  }

  .react-select__control {
    border-radius: 0.5rem;
    border: 1px solid ${props => props.theme.secondary};
    height: 2.5rem;
    width: 100%;
    padding: 0 0.625rem;
    color: ${props => props.theme.secondary};

    min-height: 3rem;
    background-color: ${props => props.theme.primary};
    box-shadow: 0 0.125rem 0.25rem
      ${props => transparentize(0.5, props.theme.black)};
    animation: ${slideInX} 0.3s ease-in-out;

    transition: 0.2s ease-in-out;
    &:hover {
      border-color: ${({ theme }) => theme.secondary};
      box-shadow: 0 0 0.5rem -0.125rem ${props => lighten(0.6, props.theme.primary)};
    }
  }
  .react-select__control--is-focused {
    color: ${props => props.theme.secondary};
    border: 1px solid ${({ theme }) => theme.secondary};
    box-shadow: 0 0 0.5rem -0.125rem ${props => lighten(0.6, props.theme.primary)};
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__dropdown-indicator {
    color: ${props => props.theme.secondary};
    &:hover {
      color: ${props => props.theme.secondary};
    }
  }
  .react-select__value-container {
    padding: 0.125rem;
    height: 2rem;
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    color: ${props => props.theme.secondary};
    caret-color: ${props => props.theme.secondary};
  }
  .react-select__input {
    color: ${props => props.theme.black} !important;
  }
  .react-select__menu {
    background-color: ${props => props.theme.primary};
    border-radius: 0.5rem;
    border: none;
    color: ${props => props.theme.secondary};
    overflow: overlay;
  }
  .react-select__option {
    background-color: unset;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    color: ${props => props.theme.black};
    &:hover:not(:focus):not(:disabled) {
      border: 1px solid ${props => props.theme.secondary};
    }
  }
  .react-select__single-value {
    color: ${props => props.theme.black};
    font: 600 1rem 'Manrope', sans-serif;
  }
  .react-select--is-disabled {
    filter: opacity(0.5) grayscale(0.75) brightness(1.1);
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
  column-gap: 0.125rem;
  row-gap: 2rem;

  padding: 1rem 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: fit-content;

  ${ReactSelect}
`;

export const CardContainer = styled.div`
  position: relative;
  --default-height: 1351;
  --default-width: 975;

  width: 312px;
  aspect-ratio: var(--default-width) / var(--default-height);

  @media screen and (min-width: 1200px) {
    zoom: 0.8;
  }
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
  text-align: center;
`;

export const TitleAndLevel = styled.div`
  position: absolute;
  ${centerStyle}
  top: 7%;
  width: 75%;
`;

export const Title = styled.h1`
  font-size: 1rem;
`;

export const Level = styled.h2`
  font-size: 0.8rem;
`;

export const Details = styled.div`
  font-size: 0.75rem;
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  font-weight: 600;

  top: 18%;
  left: 0;
  right: 0;

  padding: 0 7%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 10%;
`;

export const Description = styled.p`
  font-size: 0.66rem;
  font-weight: 400;
  line-height: 1.05;

  position: absolute;

  top: 31%;
  left: 0;
  right: 0;

  height: 59%;

  overflow-y: auto;
  overflow-x: hidden;

  margin: 0 11% 0 11%;
  padding: 0 0 0 2%;
`;
