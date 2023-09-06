import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    ${props => ({...props.theme.typography.body})};
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.tokens.colors.bg.color400};
    transition: all 1s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  * {
    box-sizing: border-box;
  }
`;
