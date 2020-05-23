import { Formik, Form } from "formik";

import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

import { Button, SelectionField } from "../components/Inputs";
import { ContentContainer, formWidth } from "../components/Layouts";
import {
  ActionPane,
  InfoPane,
  TopicSubtitleView,
  TitleView,
  LabelView,
} from "../components/Views";

import * as firestore from "../utils/dataAccess";
import { redirect } from "../utils/routing";
import { monospaceFont } from "../utils/fonts";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  if (!id || id == "") return redirect(context, "/");

  await firestore.init();

  const gameRef = await firestore.getGame(id as string);
  if (!gameRef.exists) return redirect(context, "/");

  const gameDataString = JSON.stringify(gameRef.data());

  return {
    props: {
      gameId: id,
      gameDataString,
    },
  };
};

interface Play {
  gameId: string;
  gameDataString: string;
}

export default ({ gameId, gameDataString }: Play) => {
  const router = useRouter();

  const gameData = JSON.parse(gameDataString);

  return (
    <>
      <ActionPane>
        <ContentContainer>
          <Formik
            initialValues={{ "Choose a Card": gameData.cards[0] }}
            validate={(values) => {
              let errors: { "Choose a Card"?: string } = {};

              if (!gameData.cards.includes(values["Choose a Card"]))
                errors["Choose a Card"] = "Nice Try ;)";

              console.log(values["Choose a Card"]);

              return errors;
            }}
            onSubmit={async (values) => {
              await firestore.init();
              console.log(values["Choose a Card"]);
              firestore.playCard(gameId, values["Choose a Card"]);
              await router.push(`/game?id=${gameId}&result=1`);
            }}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: `min(${formWidth}px, 100%)` }}>
                <LabelView name="Choose a Card" />
                <SelectionField
                  options={gameData.cards}
                  name="Choose a Card"
                  style={{ fontFamily: monospaceFont }}
                />
                <Button type="submit" disabled={isSubmitting}>
                  Play Card
                </Button>
              </Form>
            )}
          </Formik>
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
