import React from "react";

import { Formik, Form } from "formik";

import Head from "next/head";
import { useRouter } from "next/router";

import {
  ActionPane,
  InfoPane,
  TitleView,
  TextView,
  LabelView,
} from "../components/Views";
import { TextField, Button } from "../components/Inputs";
import {
  ContentContainer,
  TitleContainer,
  TextContainer,
  formWidth,
} from "../components/Layouts";

import { monospaceFont } from "../utils/fonts";
import * as firestore from "../utils/firestore";

const getCardsArray = (cardsString: string) => {
  const cardRegex = /[,\s]/;
  let cards = cardsString.split(cardRegex);
  return cards.filter((card) => card);
};

export default () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Scrumy Cards</title>
      </Head>
      <ActionPane>
        <ContentContainer>
          <Formik
            initialValues={{ Topic: "", Cards: "" }}
            validate={({ Topic, Cards }) => {
              let errors: { Topic?: string; Cards?: string } = {};

              Topic = Topic.trim();
              Cards = Cards.trim();

              if (!Topic) errors.Topic = "Required";
              if (!Cards) errors.Cards = "Required";

              const cardsArray = getCardsArray(Cards);

              cardsArray.forEach((card) => {
                if (card.length > 4)
                  errors.Cards = "A card has a maximum of 4 characters";
              });

              return errors;
            }}
            onSubmit={async ({ Topic, Cards }) => {
              Topic = Topic.trim();
              Cards = Cards.trim();

              const cardsArray = getCardsArray(Cards);

              await firestore.init();
              const gameRef = await firestore.createGame(Topic, cardsArray);

              if (gameRef) {
                await router.push(`/game?id=${gameRef.id}`);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: `min(${formWidth}px, 100%)` }}>
                <LabelView name="Topic" />
                <TextField
                  placeholder="Implement Super Duper Code"
                  name="Topic"
                  id="Topic"
                />
                <LabelView name="Cards" />
                <TextField
                  style={{ fontFamily: monospaceFont }}
                  placeholder="0.5 1 2 3 5 8 20 40 100"
                  name="Cards"
                  id="Cards"
                />
                <Button type="submit" disabled={isSubmitting}>
                  Start
                </Button>
              </Form>
            )}
          </Formik>
        </ContentContainer>
      </ActionPane>
      <InfoPane>
        <ContentContainer style={{ textAlign: "center" }}>
          <TitleContainer>
            <TitleView>Simply</TitleView>
            <TitleView>Scrum Poker</TitleView>
          </TitleContainer>
          <TextContainer style={{ maxWidth: 350, marginTop: 0 }}>
            <TextView>
              A simple tool to play Scrum Poker with your team anywhere you are.
            </TextView>
          </TextContainer>
        </ContentContainer>
      </InfoPane>
    </>
  );
};
