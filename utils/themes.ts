import React from "react";

import { LogoType } from "../components/Logo";

export type Theme = {
  background0: string;
  background1: string;
  boxShadow: string;
  controll: string;
  errorColor: string;
  htmlBackground: string;
  inputPlaceholderColor: string;
  inputTextColor: string;
  logo: LogoType;
  selectionBackground: string;
  selectionColor: string;
  text: string;
  title: string;
  linkColor: string;
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export const darkTheme: Theme = {
  background0: "#0b0c0d",
  background1: "#1c1c1d",
  boxShadow: "0px 3px 10px 0px rgba(0, 0, 0, 0.2)",
  controll: "#fff",
  errorColor: "#ff263b",
  htmlBackground: "#0b0c0d",
  inputPlaceholderColor: "#333",
  inputTextColor: "#fff",
  logo: LogoType.white,
  selectionBackground: "rgba(255,255,255,0.99)",
  selectionColor: "#000",
  text: "#aaa",
  title: "#fff",
  linkColor: "#fff",
};

export const lightTheme: Theme = {
  background0: "#f5f5f5",
  background1: "#fff",
  boxShadow: "0px 3px 10px 0px rgba(30, 30, 30, 0.1)",
  controll: "#000",
  errorColor: "#ff263b",
  htmlBackground: "#f5f5f5",
  inputPlaceholderColor: "#ddd",
  inputTextColor: "#000",
  logo: LogoType.black,
  selectionBackground: "rgba(0,0,0,0.99)",
  selectionColor: "#fff",
  text: "#555",
  title: "#000",
  linkColor: "#000",
};

export const useLocalTheme = () => {
  console.info("Local theme not yes implemented.");
  return null;
};

export const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = React.useState(lightTheme);

  const themeTypes = {
    dark: "(prefers-color-scheme: dark)",
    light: "(prefers-color-scheme: light)",
  };

  const setThemeByType = ({
    media,
    matches = true,
  }: Partial<MediaQueryListEvent>) => {
    if (!matches) return;

    if (media == themeTypes.dark) setSystemTheme(darkTheme);
    else setSystemTheme(lightTheme);
  };

  React.useEffect(() => {
    for (const [, themeType] of Object.entries(themeTypes)) {
      const themeQuery = window.matchMedia(themeType);
      themeQuery.addListener(setThemeByType);
      if (themeQuery.matches) setThemeByType({ media: themeType });
    }
  }, []);

  return systemTheme;
};
