import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { groupBy, sortBy } from "lodash";

let firestore: firebase.firestore.Firestore;

let userId: string;

export const init = async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDsUR4TnXTNmms8GP47JaKz0l8lLzv40b8",
    authDomain: "scrumycards.firebaseapp.com",
    databaseURL: "https://scrumycards.firebaseio.com",
    projectId: "scrumycards",
    storageBucket: "scrumycards.appspot.com",
    messagingSenderId: "387100948234",
    appId: "1:387100948234:web:cbfde291ce96f6cf072cf3",
    measurementId: "G-XCZECQXMQV",
  };

  // Initialize Firebase
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  // Create Anonymous user
  if (!firebase.auth().currentUser || !userId) {
    const userRef = await firebase.auth().signInAnonymously();

    if (!userRef.user) console.error("Anonymous user creation failed.");
    else userId = userRef.user?.uid;
  }

  // Initialize Firestore
  if (!firestore) {
    firestore = firebase.firestore();
  }
};

export const createGame = async (topic: string, cards: string[]) => {
  if (!userId) return console.error("No user found!");

  const gameData = {
    topic,
    cards,
    userId,
    createdAt: new Date(),
  };

  return await firestore.collection("Games").add(gameData);
};

export const getGame = async (id: string) => {
  if (!userId) console.warn("No user found!");
  return await firestore.collection("Games").doc(id).get();
};

export const playCard = async (gameId: string, card: string) => {
  if (!userId) return console.error("No user found!");

  const cardData = {
    card,
    createdAt: new Date(),
  };

  await firestore
    .collection("Games")
    .doc(gameId)
    .collection("PlayedCards")
    .doc(userId)
    .set(cardData);
};

export const subscribePlayedCards = async (
  gameId: string,
  setPlayedCards: Function
) => {
  if (!userId) console.warn("No user found!");

  firestore
    .collection("Games")
    .doc(gameId)
    .collection("PlayedCards")
    .onSnapshot((playedCardsRef) => {
      let playedCards: any[] = [];

      playedCardsRef.forEach((ref) => {
        playedCards.push({ ...ref.data(), userId: ref.id });
      });

      playedCards = sortBy(
        groupBy(playedCards, (x: any) => x.card),
        (x: any) => x.length
      )
        .reverse()
        .map((cardType: any) => {
          return {
            card: cardType[0].card,
            players: cardType.map((card: any) => card.userId),
          };
        });

      setPlayedCards(playedCards);
    });
};

export const getUserId = () => userId;
