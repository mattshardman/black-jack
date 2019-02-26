import uuid from 'uuid';

const makeCards = () => {
  const suits = [{ suit: 'Hearts', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550000293/lambda/heart.png' },
    { suit: 'Spades', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550000103/lambda/club.png' },
    { suit: 'Clubs', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550010525/lambda/clubs.png' },
    { suit: 'Diamonds', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550010523/lambda/diamond.png' }];

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
    return true;
  }

  if (userTotal === 'BUST') {
    return false;
  }

  if (dealerTotal === 'BUST') {
    return true;
  }

  if (userTotal > dealerTotal) {
    return true;
  }

  if (userTotal === dealerTotal) {
    return 'draw';
  }

  return false;
}

function returnScores(prevScore, userWon) {
  let newScores;
  if (userWon === 'draw') {
    newScores = { ...prevScore };
  } else {
    newScores = userWon
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
};
