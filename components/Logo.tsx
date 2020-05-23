import React from "react";

import { ThemeContext } from "styled-components";

export enum LogoType {
  black,
  white,
}

interface Logo {
  className?: string;
  type?: LogoType;
  height?: number;
  width?: number;
}

export const Logo = ({ className, type, height, width }: Logo) => {
  const { logo: themeLogo } = React.useContext(ThemeContext);

  const altText = "Scrumy Cards";
  const logoSrcPath = "/assets/img/logo";

  switch (type || themeLogo) {
    case LogoType.black:
      return (
        <img
          alt={altText}
          className={className}
          width={width}
          height={height}
          src={`${logoSrcPath}/scrumycards_black.svg`}
        />
      );
    default:
      return (
        <img
          alt={altText}
          className={className}
          width={width}
          height={height}
          src={`${logoSrcPath}/scrumycards_white.svg`}
        />
      );
  }
};
