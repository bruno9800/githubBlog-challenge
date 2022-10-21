import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', 'sans-serif';
    background: ${props => props.theme["base-background"]};
    -webkit-font-smoothing: antialiased;

    margin-bottom: 12rem;
  }

  body, input, textarea, button {
        font: 400 1rem 'Nunito', 'sans-serif';
        color: ${props => props.theme["base-text"]};
    }
`