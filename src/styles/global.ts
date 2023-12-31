import { transparentize } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.white};
  }

  body, input, textarea, button {
    font: 500 1rem Montserrat, sans-serif;
  }

  input {
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    color: ${props => props.theme.black};
  }

  h1 {
    font-size: 1.8rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
    ::-webkit-scrollbar {
    width: 0.3em;
    z-index: 1;
  }
  ::-webkit-scrollbar-track {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    box-shadow: inset 0 0 0.25rem rgba(0, 0, 0, 0.3);
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => transparentize(0.2, props.theme.secondary)};

    border-radius: 10px;
  }
  
`;
