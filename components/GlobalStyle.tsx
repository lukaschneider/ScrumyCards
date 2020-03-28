import { createGlobalStyle } from "styled-components";

import { defaultFont } from "../utils/fonts";

export default createGlobalStyle`
  html, body {
    margin: 0;

    background-color: ${({ theme }) => theme.background0};

    font-family: ${defaultFont};

    overflow-x: hidden
  }

  ::inner-bordder {
    border: 0;
  }

  a {
    color: ${({ theme }) => theme.linkColor};
  }
`;
