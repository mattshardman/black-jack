import uuid from 'uuid';

const makeCards = () => {
  const suits = [{ suit: 'Hearts', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182708/lambda/hearts.png' },
    { suit: 'Spades', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182715/lambda/spades.png' },
    { suit: 'Clubs', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182705/lambda/clubs.png' },
    { suit: 'Diamonds', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1551182712/lambda/diamonds.png' }];

  const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];

  const cards = suits.reduce((acc, suit) => {
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

  return deck;
};

function shuffleArray(array) {
  const shuffledArray = array.map(a => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value);
  return shuffledArray;
}

const makeDecks = (num) => {
  const decks = [...Array(num)].map(() => makeCards());
  const deckArray = [].concat(...decks);
  const shuffledDeckArray = shuffleArray(deckArray);
  return shuffledDeckArray;
};

const rand = max => Math.floor(Math.random() * max);

function returnNewDeckOfCardsWithSpecificCardRemoved(card, currentPackCards) {
  const cardIndex = currentPackCards.indexOf(card);
  const newPackCardsWithCardRemoved = currentPackCards.filter((each, index) => index !== cardIndex);
  const newPackOfCards = [...newPackCardsWithCardRemoved, card];
  return newPackOfCards;
}

function returnCardToBeDealt(currentPackCards) {
  const card = currentPackCards[0];
  return card;
}

function totalValueOfCards(input) {
  let hasAce = false;
  const cardTotal = input.reduce((acc, each) => {
    if (each.number === 'A') {
      hasAce = true;
    }
    const newAcc = acc + each.value;
    return newAcc;
  }, 0);

  // play ace high unless this makes hand go bust
  if (hasAce && (cardTotal + 10) <= 21) {
    const result = cardTotal + 10;
    return result;
  }

  const result = cardTotal > 21 ? 'BUST' : cardTotal;
  return result;
}

function didUserWin(userTotal, dealerTotal, userWasDealt21) {
  if (userWasDealt21) {
    return { userWon: true, draw: false };
  }

  if (userTotal === 'BUST') {
    return { userWon: false, draw: false };
  }

  if (dealerTotal === 'BUST') {
    return { userWon: true, draw: false };
  }

  if (userTotal > dealerTotal) {
    return { userWon: true, draw: false };
  }

  if (userTotal === dealerTotal) {
    return { userWon: false, draw: true };
  }

  return { userWon: false, draw: false };
}

function returnScores(prevScore, didUserWinObj) {
  let newScores;
  if (didUserWinObj.draw) {
    newScores = { ...prevScore };
  } else {
    newScores = didUserWinObj.userWon
      ? { ...prevScore, userScore: prevScore.userScore + 1 }
      : { ...prevScore, dealerScore: prevScore.dealerScore + 1 };
  }
  localStorage.clear();
  localStorage.setItem('scores', JSON.stringify(newScores));
  return newScores;
}

function endOfGameMessage(userTotal, dealerTotal) {
  if (userTotal === 'BUST') {
    return 'You lost, you went BUST';
  }

  if (dealerTotal === 'BUST') {
    return 'You won, the dealer went BUST';
  }

  if (userTotal === dealerTotal) {
    return 'It\'s a draw';
  }

  if (userTotal > dealerTotal) {
    return `You won, the dealer got ${dealerTotal}`;
  }
  return `You lost, the dealer got ${dealerTotal}`;
}

function deal2CardsToUserAnd1CardToDealer(currentPackCards) {
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

function startGame(cardState, stick) {
  const currentMainDeckOfCards = [...cardState.mainDeckOfCards];
  const initialDeal = deal2CardsToUserAnd1CardToDealer(currentMainDeckOfCards);
  const deckOfCardsWithDealtCardsRemoved = initialDeal.cards;
  const [dealerCard, ...userCards] = initialDeal.dealtCards;
  const userCardsInitialValue = totalValueOfCards(userCards);

  if (userCardsInitialValue === 21) {
    const userWasDealt21 = true;
    return stick(userWasDealt21);
  }

  return {
    newGameState: {
      gameInitiated: true,
      started: true,
      userTotalCardValue: userCardsInitialValue,
      finished: false,
    },
    newCardState: {
      mainDeckOfCards: deckOfCardsWithDealtCardsRemoved,
      cardsDealtToUser: userCards,
      cardsDealtToDealer: [dealerCard],
    },
  };
}

export {
  makeCards,
  makeDecks,
  rand,
  returnNewDeckOfCardsWithSpecificCardRemoved,
  returnCardToBeDealt,
  totalValueOfCards,
  didUserWin,
  returnScores,
  endOfGameMessage,
  deal2CardsToUserAnd1CardToDealer,
  startGame,
};
