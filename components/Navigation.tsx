import React from "react";

import { useRouter } from "next/router";

import styled, { css } from "styled-components";

import Burger from "./Burger";
import { Logo } from "./Logo";
import {
  spacingXXL,
  spacingXL,
  spacingL,
  elementSizeM,
  borderWidth,
  spacingS,
} from "./Layouts";
import { BlankButton } from "./Inputs";
import { InfoPane, SubtitleView } from "./Views";

const focusEffect = css`
  border-bottom: ${borderWidth}px solid transparent;
  box-sizing: border-box;
  outline: none;

  padding-bottom: ${spacingS}px;

  transition: border 0.1s ease-in-out;
  :focus-within {
    border-bottom: ${borderWidth}px solid
      ${({ theme }) => theme.inputPlaceholderColor};
  }
`;

const LogoButton = styled(BlankButton)`
  position: absolute;
  top: ${spacingXXL}px;
  left: ${spacingXL}px;
  z-index: 10;

  ${focusEffect};
`;

const BurgerButton = styled(BlankButton)`
  position: absolute;
  top: ${spacingXL}px;
  right: ${spacingL}px;
  z-index: 10;

  ${focusEffect};
`;

const MenuItem = styled.a`
  ${focusEffect}
`;

interface Navigation {
  sideMenu: boolean;
  setSideMenu: Function;
}

export default ({ sideMenu, setSideMenu }: Navigation) => {
  const router = useRouter();

  React.useEffect(() => {
    router.prefetch("/");
  }, []);

  return (
    <>
      <LogoButton onClick={() => router.push("/")} aria-label={"Home"}>
        <Logo height={elementSizeM} />
      </LogoButton>
      <BurgerButton aria-label={"Menu"} onClick={() => setSideMenu(!sideMenu)}>
        <Burger open={sideMenu} />
      </BurgerButton>
      <InfoPane
        style={{
          display: sideMenu ? "flex" : "none",
          position: "absolute",
          width: "100%",
          right: 0,
        }}
      >
        <MenuItem href="/privacy">
          <SubtitleView>Privacy</SubtitleView>
        </MenuItem>
      </InfoPane>
    </>
  );
};
