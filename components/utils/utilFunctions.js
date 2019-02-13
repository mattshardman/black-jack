const makeCards = () => {
  const suits = [{ suit: 'Hearts', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550000293/lambda/heart.png' },
    { suit: 'Spades', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550000103/lambda/club.png' },
    { suit: 'Clubs', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550010525/lambda/clubs.png' },
    { suit: 'Diamonds', img: 'https://res.cloudinary.com/dgdniqfi9/image/upload/v1550010523/lambda/diamond.png' }];

  const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1];

  const cards = suits.reduce((acc, suit) => {
    const cardObj = numbers.map((number, index) => ({
      suit: suit.suit,
      img: suit.img,
      number,
      value: values[index],
    }));
    acc.push(cardObj);
    return acc;
  }, []);

  return [].concat(...cards);
};

const rand = max => Math.floor(Math.random() * max);

function returnNewDeckOfCardsWithSpecificCardRemoved(card, currentPackCards) {
  const cardIndex = currentPackCards.indexOf(card);
  const newPackCards = currentPackCards.filter((each, index) => index !== cardIndex);
  return newPackCards;
}

function returnCardToBeDealt(currentPackCards) {
  const card = currentPackCards[rand(currentPackCards.length)];
  return card;
}

function totalValueOfCards(input) {
  const cardTotal = input.reduce((acc, each) => {
    const newAcc = acc + each.value;
    return newAcc;
  }, 0);

  const result = cardTotal > 21 ? 'BUST' : cardTotal;
  return result;
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
  rand,
  returnNewDeckOfCardsWithSpecificCardRemoved,
  returnCardToBeDealt,
  totalValueOfCards,
  endOfGameMessage,
  deal2CardsToUserAnd1CardToDealer,
};
