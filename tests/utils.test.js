import {
  totalValueOfCards, didUserWin, endOfGameMessage,
} from '../components/utils/utilFunctions';

describe('Test totalValue func', () => {
  it('Ace should be low if ace high would cause bust', () => {
    const cards = [{
      value: 1,
      number: 'A',
    }, {
      value: 10,
      number: 'K',
    }, {
      value: 10,
      number: 'K',
    }];
    expect(totalValueOfCards(cards)).toEqual(21);
  });

  it('Ace should be high if it won\'t cause player to go bust', () => {
    const cards = [{
      value: 1,
      number: 'A',
    }, {
      value: 10,
      number: 'K',
    }];
    expect(totalValueOfCards(cards)).toEqual(21);
  });

  it('Should return "BUST" if cards add up to greater than 21', () => {
    const cards = [{
      value: 5,
      number: '5',
    }, {
      value: 10,
      number: 'K',
    },
    {
      value: 10,
      number: 'Q',
    }];
    expect(totalValueOfCards(cards)).toEqual('BUST');
  });
});

describe('Test didUserWin function', () => {
  it('If user was dealt 21 off the bat, user should win', () => {
    const userWasDealt21 = true;
    expect(didUserWin(21, 21, userWasDealt21)).toEqual({ userWon: true, draw: false });
    expect(didUserWin(21, 15, false)).toEqual({ userWon: true, draw: false });
  });

  it('Return "draw" if scores are equal', () => {
    expect(didUserWin(21, 21)).toEqual({ userWon: false, draw: true });
    expect(didUserWin(16, 16)).toEqual({ userWon: false, draw: true });
    expect(didUserWin(18, 18)).toEqual({ userWon: false, draw: true });
  });

  it('If dealer has a higher score dealer should win', () => {
    expect(didUserWin(20, 21)).toEqual({ userWon: false, draw: false });
  });

  it('If user has a higher score user should win', () => {
    expect(didUserWin(21, 10)).toEqual({ userWon: true, draw: false });
    expect(didUserWin(19, 18)).toEqual({ userWon: true, draw: false });
    expect(didUserWin(18, 17)).toEqual({ userWon: true, draw: false });
  });

  it('If user is BUST dealer should win', () => {
    expect(didUserWin('BUST', 10)).toEqual({ userWon: false, draw: false });
    expect(didUserWin('BUST', 18)).toEqual({ userWon: false, draw: false });
    expect(didUserWin('BUST', 17)).toEqual({ userWon: false, draw: false });
  });

  it('If dealer is BUST user should win', () => {
    expect(didUserWin(21, 'BUST')).toEqual({ userWon: true, draw: false });
    expect(didUserWin(19, 'BUST')).toEqual({ userWon: true, draw: false });
    expect(didUserWin(18, 'BUST')).toEqual({ userWon: true, draw: false });
  });
});

describe('Test returnScores func', () => {
  it('Should add 1 to userScore if user wins', () => {
    const prevScore = {
      userScore: 0,
      dealerScore: 0,
    };
    const userWon = { userWon: true, draw: false };
    expect(returnScores(prevScore, userWon)).toEqual({ userScore: 1, dealerScore: 0 });
  });

  it('Should add 1 to dealerScore if dealer wins', () => {
    const prevScore = {
      userScore: 0,
      dealerScore: 0,
    };
    const userWon = { userWon: false, draw: false };
    expect(returnScores(prevScore, userWon)).toEqual({ userScore: 0, dealerScore: 1 });
  });

  it('Should not add anything to either score if players draw', () => {
    const prevScore = {
      userScore: 9,
      dealerScore: 9,
    };
    const userWon = { userWon: false, draw: true };
    expect(returnScores(prevScore, userWon)).toEqual({ userScore: 9, dealerScore: 9 });
  });
});

describe('Test end of game messages', () => {
  it('Should return user won message', () => {
    const userTotal = 19;
    const dealerTotal = 16;
    expect(endOfGameMessage(userTotal, dealerTotal)).toEqual(`You won, the dealer got ${dealerTotal}`);
  });

  it('Should return dealer won message', () => {
    const userTotal = 16;
    const dealerTotal = 19;
    expect(endOfGameMessage(userTotal, dealerTotal)).toEqual(`You lost, the dealer got ${dealerTotal}`);
  });


  it('Should return you lost message if user total is BUST', () => {
    const userTotal = 'BUST';
    const dealerTotal = 19;
    expect(endOfGameMessage(userTotal, dealerTotal)).toEqual('You lost, you went BUST');
  });

  it('Should return you won message if dealer total is BUST', () => {
    const userTotal = 19;
    const dealerTotal = 'BUST';
    expect(endOfGameMessage(userTotal, dealerTotal)).toEqual('You won, the dealer went BUST');
  });

  it('Should return you lost message if both are BUST', () => {
    const userTotal = 'BUST';
    const dealerTotal = 'BUST';
    expect(endOfGameMessage(userTotal, dealerTotal)).toEqual('You lost, you went BUST');
  });
});
