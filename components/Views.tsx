import * as clipboard from "clipboard-polyfill";

import { ErrorMessage, ErrorMessageProps } from "formik";

import styled from "styled-components";

import QRCode from "qrcode.react";

import { BlankButton } from "./Inputs";
import {
  Pane,
  fontSizeXL,
  fontSizeL,
  fontSizeM,
  fontSizeS,
  spacingM,
  spacingL,
  spacingS,
  borderRadius,
  borderWidth,
} from "./Layouts";

import { monospaceFont } from "../utils/fonts";

export const ActionPane = styled(Pane)`
  background-color: ${({ theme }) => theme.background0};
`;

export const InfoPane = styled(Pane)`
  background-color: ${({ theme }) => theme.background1};
`;

export const TextView = styled.p`
  line-height: 25px;
  font-size: ${fontSizeM}px;
  color: ${({ theme }) => theme.text};

  margin: 0;
`;

export const NoteTextView = styled.p`
  font-size: ${fontSizeS}px;
  color: ${({ theme }) => theme.text};

  margin: 0;
`;

export const TitleView = styled.h1`
  font-size: ${fontSizeXL}px;
  color: ${({ theme }) => theme.title};
  text-align: center;

  margin: 0;
`;

export const SubtitleView = styled.h2`
  font-size: ${fontSizeL}px;
  color: ${({ theme }) => theme.title};

  margin: 0;
`;

export const TopicSubtitleView = styled(SubtitleView)`
  color: ${({ theme }) => theme.text};
  margin-bottom: ${spacingM}px;
`;

const LabelViewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: ${spacingL}px 0 ${spacingM}px 0;
`;

const LabelErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.errorColor} !important;
  text-align: right;

  padding-left: ${spacingM}px;
`;

export const LabelView = ({ ...errorMessageProps }: ErrorMessageProps) => (
  <LabelViewContainer>
    <SubtitleView>{errorMessageProps.name}</SubtitleView>
    <LabelErrorMessage component={NoteTextView} {...errorMessageProps} />
  </LabelViewContainer>
);

const QRViewContainter = styled(BlankButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border: ${borderWidth}px solid transparent;
  border-radius: ${borderRadius}px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  cursor: pointer;

  padding: ${spacingS}px;

  transition: border 0.1s ease-in-out;
  :focus-within {
    border: ${borderWidth}px solid ${({ theme }) => theme.inputPlaceholderColor};
  }

  :hover {
    border: ${borderWidth}px solid ${({ theme }) => theme.inputPlaceholderColor};
  }
`;

interface QRView {
  className?: string;
  size?: number;
  value: string;
}

export const QRView = ({ className, size = 200, value }: QRView) => (
  <QRViewContainter
    onClick={() => clipboard.writeText(value)}
    className={className}
  >
    <QRCode value={value} size={size} renderAs="svg" />
  </QRViewContainter>
);

interface CardViewContainer {
  isCurrentUser: boolean;
}

const CardViewContainer = styled.div<CardViewContainer>`
  background-color: ${({ theme }) => theme.background1};
  border: ${({ isCurrentUser, theme }) =>
    isCurrentUser
      ? `${borderWidth}px solid ${theme.inputPlaceholderColor}`
      : ""};
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.boxShadow};

  width: 120px;
  height: 160px;
  margin: ${spacingS}px;
  border-radius: ${borderRadius * 2}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardViewValue = styled.div`
  color: ${({ theme }) => theme.title};
  font-family: ${monospaceFont};
  font-size: ${fontSizeL}px;
`;

const CardContendDivider = styled.div`
  width: 25px;
  height: ${borderWidth}px;
  background-color: ${({ theme }) => theme.inputPlaceholderColor};
  border-radius: ${borderRadius}px;
  margin: ${spacingS}px 0;
`;

interface CardView {
  value: string;
  players: string[];
  userId?: string;
}

export const CardView = ({ value, players, userId }: CardView) => {
  return (
    <CardViewContainer isCurrentUser={players.includes(userId || "")}>
      <CardViewValue>{value}</CardViewValue>
      <CardContendDivider />
      <NoteTextView>{players.length}</NoteTextView>
    </CardViewContainer>
  );
};
