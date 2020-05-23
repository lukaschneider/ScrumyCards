import styled from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
`;

export const spacingS = 10;
export const spacingM = 20;
export const spacingL = 30;
export const spacingXL = 40;
export const spacingXXL = 45;

export const elementSizeS = 16;
export const elementSizeM = 40;
export const elementSizeL = 45;

export const borderWidth = 2;
export const borderRadius = 3;

export const fontSizeS = 12;
export const fontSizeM = 18;
export const fontSizeL = 24;
export const fontSizeXL = 42;

export const minPaneWidth = 450;
export const formWidth = 360;

export const Pane = styled.div`
  min-height: 100vh;
  width: fill-available;

  display: flex;
  flex: 1 1 ${minPaneWidth}px;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  height: max-content;
  width: fill-available;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 140px ${spacingXL}px 120px;
`;

export const TitleContainer = styled.div`
  margin: ${spacingM}px 0;
`;

export const TextContainer = styled.div`
  margin: ${spacingM}px 0;
`;
