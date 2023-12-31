import { transparentize } from 'polished';
import styled, { keyframes } from 'styled-components/macro';

export const slideInX = keyframes`
  from {
    opacity: 0;
    transform: translateX(-1rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  padding: 0.5rem 0.25rem;
`;

export const IconContainer = styled.div<{ hidden?: boolean }>`
  font: 600 1rem 'Manrope', sans-serif;

  cursor: pointer;
  padding: 0.25rem 0.75rem;
  width: 6.5rem;
  height: 2rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  transition: all 0.2s ease-in-out;
  animation: ${slideInX} 0.3s ease-in-out;

  border: ${props =>
    props.hidden ? 'none' : `${props.theme.secondary} 1px solid`};
  border-radius: 10px;
  box-shadow: ${props =>
    props.hidden
      ? 'none'
      : `0 0.125rem 0.25rem ${transparentize(0.5, props.theme.black)}`};

  background-color: ${props => (props.hidden ? 'none' : props.theme.primary)};
`;

export const Button = styled.button`
  padding: 0.25rem 1rem;
  height: 2rem;
  min-width: 6rem;

  border: ${props => props.theme.secondary} 1px solid;
  border-radius: 10px;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.black};

  font: 600 1rem 'Manrope', sans-serif;

  box-shadow: 0 0.125rem 0.25rem
    ${props => transparentize(0.5, props.theme.black)};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;
  margin-top: 1rem;

  animation: ${slideInX} 0.3s ease-in-out;
`;
