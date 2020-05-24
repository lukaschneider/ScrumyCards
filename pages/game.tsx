import React from "react";

import { GetServerSideProps } from "next";
import Head from "next/head";

import styled from "styled-components";

import { Button } from "../components/Inputs";
import { ContentContainer, spacingS, spacingM } from "../components/Layouts";
import {
  ActionPane,
  CardView,
  InfoPane,
  TopicSubtitleView,
  TitleView,
  SubtitleView,
  QRView,
  NoteTextView,
} from "../components/Views";

import * as firestore from "../utils/firestore";
import { redirect } from "../utils/routing";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id, result } = context.query;

  if (!id || id == "") return redirect(context, "/");

  await firestore.init();

  const gameRef = await firestore.getGame(id as string);
  if (!gameRef.exists) return redirect(context, "/");

  const gameDataString = JSON.stringify(gameRef.data());

  const resultView = result ? true : false;

  return {
    props: {
      gameId: id,
      gameDataString,
      result: resultView,
    },
  };
};

interface Game {
  gameId: string;
  gameDataString: string;
  result: boolean;
}

export default ({ gameId, gameDataString, result }: Game) => {
  const [resultView, showResultView] = React.useState(result);

  const gameData = JSON.parse(gameDataString);

  return (
    <>
      <Head>
        <title>Scrumy Cards | {gameData.topic}</title>
      </Head>
      <ActionPane>
        <ContentContainer>
          {resultView ? (
            <GameResultView gameId={gameId} />
          ) : (
            <GameShareView gameId={gameId} />
          )}
          <Button onClick={() => showResultView(!resultView)}>
            {resultView ? "Hide Result" : "Show Result"}
          </Button>
        </ContentContainer>
      </ActionPane>
      <InfoPane>
        <ContentContainer>
          <TopicSubtitleView>Topic:</TopicSubtitleView>
          <TitleView>{gameData.topic}</TitleView>
        </ContentContainer>
      </InfoPane>
    </>
  );
};

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin: 10px 0 -10px 0;
`;

interface GameResultView {
  gameId: string;
}

const GameResultView = ({ gameId }: GameResultView) => {
  const [playedCards, setPlayedCards] = React.useState<any>([]);

  React.useEffect(() => {
    firestore
      .init()
      .then(() => firestore.subscribePlayedCards(gameId, setPlayedCards));
  }, []);

  let numPlayedCards = 0;
  if (playedCards.length != 0) {
    numPlayedCards = playedCards
      .map((x: any) => x.players.length)
      .reduce((total: number, x: number) => total + x);
  }

  return (
    <>
      <SubtitleView>
        {numPlayedCards} {numPlayedCards == 1 ? "Card" : "Cards"} Played
      </SubtitleView>

      <CardsContainer>
        {playedCards.map((cardType: any, i: number) => (
          <CardView
            key={cardType.card + i}
            value={cardType.card}
            players={cardType.players}
            userId={firestore.getUserId()}
          />
        ))}
      </CardsContainer>
    </>
  );
};

const GameQR = styled(QRView)`
  margin: ${spacingM}px 0 ${spacingS}px 0 !important;
`;

interface GameShareView {
  gameId: string;
}

const GameShareView = ({ gameId }: GameShareView) => {
  const [playUrl, setPlayUrl] = React.useState(
    `https://scrumy.cards/play?id=${gameId}`
  );

  React.useEffect(() => {
    // Update PlayUrl to make my life easier
    if (window.location.host != "scrumy.cards")
      setPlayUrl(`http://${window.location.host}/play?id=${gameId}`);
  }, []);

  return (
    <>
      <SubtitleView>Share and Play</SubtitleView>
      <GameQR value={playUrl} />
      <NoteTextView>Click QR code to copy link to clipboard</NoteTextView>
    </>
  );
};
