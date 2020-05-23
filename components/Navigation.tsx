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

const focusEffect = css`
  border-bottom: ${borderWidth}px solid transparent;
  box-sizing: border-box;

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

  ${focusEffect};
`;

const BurgerButton = styled(BlankButton)`
  position: absolute;
  top: ${spacingXL}px;
  right: ${spacingL}px;

  ${focusEffect};
`;

export default () => {
  const router = useRouter();

  React.useEffect(() => {
    router.prefetch("/");
  }, []);

  return (
    <>
      <LogoButton onClick={() => router.push("/")}>
        <Logo height={elementSizeM} />
      </LogoButton>
      <BurgerButton>
        <Burger />
      </BurgerButton>
    </>
  );
};
