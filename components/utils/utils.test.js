import * as utils from './utilFunctions';

describe('Make cards function', () => {
  it('Length should be 52', () => {
    const cards = utils.makeCards();
    expect(cards.length).toBe(52);
  });

  it('Should contain 4 aces', () => {
    const cards = utils.makeCards();
    const aces = cards.filter(card => card.value === 1);
    expect(aces.length).toBe(4);
  });
});

describe('Make decks function', () => {
  it('Length should be 208', () => {
    const cards = utils.makeDecks(4);
    expect(cards.length).toBe(208);
  });

  it('Should contain 4 aces', () => {
    const cards = utils.makeDecks(4);
    const aces = cards.filter(card => card.value === 1);
    expect(aces.length).toBe(16);
  });
});

describe('Return card to be dealt', () => {
  it('Should return the first card from the decks', () => {
    const cards = utils.makeDecks(4);
    const card = utils.returnCardToBeDealt(cards);
    expect(card).toEqual(cards[0]);
  });
});

describe('Return new deck with specific card removed', () => {
  const cards = utils.makeDecks(4);
  const card = utils.returnCardToBeDealt(cards);
  const newCards = utils.returnNewDeckOfCardsWithSpecificCardRemoved(card, cards);

  it('Length of new decks should be 208', () => {
    expect(newCards.length).toBe(208);
  });

  it('Last card should be the card removed', () => {
    const finalCard = newCards[newCards.length - 1];
    expect(finalCard).toBe(card);
  });
});

describe('Total value of cards', () => {
  it('Returns 20 for queen and king', () => {
    const cards = [{
      number: 'Q',
      value: 10,
    },
    {
      number: 'K',
      value: 10,
    }];

    const total = utils.totalValueOfCards(cards);
    expect(total).toBe(20);
  });

  it('Returns 21 for king and ace', () => {
    const cards = [{
      number: 'A',
      value: 1,
    },
    {
      number: 'K',
      value: 10,
    }];

    const total = utils.totalValueOfCards(cards);
    expect(total).toBe(21);
  });

  it('Returns 12 for 2 aces', () => {
    const cards = [{
      number: 'A',
      value: 1,
    },
    {
      number: 'A',
      value: 1,
    }];
    const total = utils.totalValueOfCards(cards);
    expect(total).toBe(12);
  });

  it('To return 15 for Ace, Ace, three', () => {
    const cards = [{
      number: 'A',
      value: 1,
    },
    {
      number: 'A',
      value: 1,
    },
    {
      number: '3',
      value: 3,
    }];
    const total = utils.totalValueOfCards(cards);
    expect(total).toBe(15);
  });
});

describe('Determine winner', () => {
  it('Dealer wins if dealer score is higher', () => {

  });
});
