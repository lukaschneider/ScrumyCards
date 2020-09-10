import React from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import styled, { css } from "styled-components";

import Burger from "./Burger";
import { Logo } from "./Logo";
import {
  spacingXXL,
  spacingXL,
  spacingL,
  spacingM,
  spacingS,
  elementSizeM,
  borderWidth,
  ContentContainer,
} from "./Layouts";
import { BlankButton } from "./Inputs";
import { InfoPane, SubtitleView, TextView } from "./Views";

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
  transition: opacity 0.25s ease-in-out;
  :hover {
    opacity: 0.75;
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

const MenuItemContainer = styled.div`
  margin: ${spacingS}px 0;

  ${focusEffect}
`;

const CreditContainer = styled(TextView)`
  position: absolute;
  bottom: ${spacingXXL}px;
  text-align: center;

  padding: 0 ${spacingM}px;
`;

const CreditLink = styled.a`
  ${focusEffect};
`;

interface MenuItem {
  href: string;
  text: string;
  setSideMenu: Function;
}

const MenuItem = ({ href, text, setSideMenu }: MenuItem) => {
  const router = useRouter();

  return (
    <MenuItemContainer>
      <a
        href={href}
        style={{ outline: "none", textDecoration: "none" }}
        onClick={async (e) => {
          e.preventDefault(), await router.push(href);
          setSideMenu(false);
        }}
      >
        <SubtitleView>{text}</SubtitleView>
      </a>
    </MenuItemContainer>
  );
};

interface Navigation {
  sideMenu: boolean;
  setSideMenu: Function;
}

const navigation = ({ sideMenu, setSideMenu }: Navigation) => {
  const router = useRouter();

  React.useEffect(() => {
    router.prefetch("/");
  }, []);

  return (
    <>
      <Head>
        <title>Scrumy Cards</title>
      </Head>
      <LogoButton
        onClick={() => {
          router.push("/");
          setSideMenu(false);
        }}
        aria-label={"Home"}
      >
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
        <ContentContainer>
          <MenuItem href="/" text="Home" setSideMenu={setSideMenu} />
          <MenuItem href="/privacy" text="Privacy" setSideMenu={setSideMenu} />
          <MenuItem
            href="/terms"
            text="Terms & Conditions"
            setSideMenu={setSideMenu}
          />
        </ContentContainer>
        <CreditContainer>
          Made by{" "}
          <CreditLink
            href="https://github.com/lukaschneider"
            style={{ outline: "none", textDecoration: "none" }}
          >
            Lukas Schneider
          </CreditLink>{" "}
          in Vorarlberg
        </CreditContainer>
      </InfoPane>
    </>
  );
};

export default navigation;
