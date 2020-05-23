import React from "react";

import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../components/GlobalStyle";
import Navigation from "../components/Navigation";

import { AppContainer } from "../components/Layouts";

import { useSystemTheme } from "../utils/themes";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={useSystemTheme()}>
      <Navigation />
      <AppContainer>
        <GlobalStyle />
        <Component {...pageProps} />
      </AppContainer>
    </ThemeProvider>
  );
};
