import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    background: ${theme.colors.background};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 400 1.6rem ${theme.fonts.primary}, sans-serif;
    color: ${theme.colors.white};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.secondary}, sans-serif;
  }

  @media(max-width: 1080px) {
    :root {
      font-size: 55%;
    }
  }

  @media(max-width: 915px) {
    :root {
      font-size: 52%;
    }
  }

  @media(max-width: 440px) {
    :root {
      font-size: 50%;
    }
  }
`;
