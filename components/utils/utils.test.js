import {
  makeCards,
  makeDecks,
} from './utilFunctions';

describe('Make cards function', () => {
  it('Length should be 52', () => {
    const cards = makeCards();
    expect(cards.length).toBe(52);
  });

  it('Should contain 4 aces', () => {
    const cards = makeCards();
    const aces = cards.filter(card => card.value === 1);
    expect(aces.length).toBe(4);
  });
});

describe('Make decks function', () => {
  it('Length should be 208', () => {
    const cards = makeDecks(4);
    expect(cards.length).toBe(208);
  });

  it('Should contain 4 aces', () => {
    const cards = makeDecks(4);
    const aces = cards.filter(card => card.value === 1);
    expect(aces.length).toBe(16);
  });
});
