import uuid from 'uuid';
import { CardType, Scores } from './types';

function shuffleArray(array: Array<CardType>) {
  const shuffledArray = array.map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
  return shuffledArray;
}

export const makeCards = () => {
  const suits = [{ suit: 'Hearts', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182708/lambda/hearts.png' },
    { suit: 'Spades', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182715/lambda/spades.png' },
    { suit: 'Clubs', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182705/lambda/clubs.png' },
    { suit: 'Diamonds', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182712/lambda/diamonds.png' }];

  const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];

  const cards: Array<CardType> = suits.reduce((acc, suit) => {
    const cardObj = numbers.map((number, index) => ({
      id: uuid(),
      suit: suit.suit,
      img: suit.img,
      number,
      value: values[index],
    }));
    acc.push(cardObj);
    return acc;
  }, []);

  const deck = [].concat(...cards);

  const shuffledDeck = shuffleArray(deck);
  return shuffledDeck;
};

export const makeDecks = (num: number) => {
  const decks = [...Array(num)].map(() => makeCards());
  const deckArray = [].concat(...decks);
  return deckArray;
};

export const rand = (max: number) => Math.floor(Math.random() * max);

export function returnNewDeckOfCardsWithSpecificCardRemoved(card: CardType, currentPackCards: Array<CardType>) {
  const cardIndex = currentPackCards.indexOf(card);
  const newPackCardsWithCardRemoved = currentPackCards.filter((each, index) => index !== cardIndex);
  return [...newPackCardsWithCardRemoved, card];
}

export function returnCardToBeDealt(currentPackCards: Array<CardType>) {
  return currentPackCards[0];
}

export function totalValueOfCards(card: Array<CardType>) {
  let hasAce = false;
  const cardTotal = card.reduce((acc, each) => {
    if (each.number === 'A') {
      hasAce = true;
    }
    return acc + each.value;
  }, 0);

  // play ace high unless this makes hand go bust
  if (hasAce && (cardTotal + 10) <= 21) {
    return cardTotal + 10;
  }

  return cardTotal;
}

export function determineWinner(userTotal: number, dealerTotal: number, score: Scores) {
  if (userTotal === -1) {
    return {
      userWon: true,
      draw: false,
      message: 'You won, you got black jack!',
      score: { ...score, userScore: score.userScore + 2 },
    };
  }

  if (userTotal > 21) {
    return {
      userWon: false,
      draw: false,
      message: 'You lost, you went bust',
      score: { ...score, dealerScore: score.dealerScore + 1 },
    };
  }

  if (dealerTotal > 21) {
    return {
      userWon: true,
      draw: false,
      message: 'You won, the dealer went bust',
      score: { ...score, userScore: score.userScore + 1 },
    };
  }

  if (userTotal > dealerTotal) {
    return {
      userWon: true,
      draw: false,
      message: `You won, the dealer got ${dealerTotal}`,
      score: { ...score, userScore: score.userScore + 1 },
    };
  }

  if (userTotal === dealerTotal) {
    return {
      userWon: false,
      draw: true,
      message: 'It\'s a draw',
      score: { ...score },
    };
  }

  return {
    userWon: false,
    draw: false,
    message: `You lost, the dealer got ${dealerTotal}`,
    score: { ...score, dealerScore: score.dealerScore + 1 },
  };
}

export function deal2CardsToUserAnd1CardToDealer(currentPackCards: Array<CardType>) {
  const cardsDealt = [...Array(3)].reduce((acc) => {
    const card = returnCardToBeDealt(acc.cards);
    const newCards = returnNewDeckOfCardsWithSpecificCardRemoved(card, acc.cards);
    acc.cards = newCards;
    acc.dealtCards.push(card);
    return acc;
  }, {
    cards: currentPackCards,
    dealtCards: [],
  });

  return cardsDealt;
}

export function startGame(deckOfCards: Array<CardType>) {
  const initialDeal = deal2CardsToUserAnd1CardToDealer(deckOfCards);
  const deckOfCardsWithDealtCardsRemoved = initialDeal.cards;
  const [dealerCard, ...userCards] = initialDeal.dealtCards;

  return {
    userCards,
    dealerCards: [dealerCard],
    dealerCardsValue: 0,
    cards: deckOfCardsWithDealtCardsRemoved,
  };
}
