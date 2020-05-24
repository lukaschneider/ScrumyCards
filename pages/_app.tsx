import React from "react";

import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../components/GlobalStyle";
import Navigation from "../components/Navigation";

import { AppContainer } from "../components/Layouts";

import { useSystemTheme } from "../utils/themes";

import * as firestore from "../utils/firestore";
import * as firebase from "firebase/app";
import "firebase/analytics";

const initializeFirebase = async () => {
  await firestore.init();
  await firestore.createAnonymousUser();
  const analytics = firebase.analytics();
  analytics.setAnalyticsCollectionEnabled(true);
  analytics.setUserId(firestore.getUserId());
};

export default ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    initializeFirebase();
  }, []);

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
