import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from './appBar/AppBar';
import * as utils from './utils/utilFunctions';
import { TableStyles } from './Styles';
import WhoWonMessage from './WhoWonMessage';
import DisplayCards from './DisplayCards';
import Logo from './Logo';
import SectionTitle from './SectionTitle';
import ScoresSection from './ScoresSection';


export function BlackJackTable({
  cards, scores, setScores, gameInitiated, setGameInitiated,
}) {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  const [deckOfCards, setDeckOfCards] = useState(cards);

  const [userCards, setUserCards] = useState([]);
  const [userCardValue, setUserCardValue] = useState(0);

  const [dealerCards, setDealerCards] = useState([]);
  const [dealerCardValue, setDealerCardValue] = useState(0);

  const [winner, setWinner] = useState(false);

  const [userStick, setUserStick] = useState(false);

  const start = () => {
    setGameInitiated(true);
    setGameStarted(true);
    setGameFinished(false);

    const startValues = utils.startGame(deckOfCards);
    setDeckOfCards(startValues.cards);
    setUserCards(startValues.userCards);
    setDealerCards(startValues.dealerCards);
  };

  const hit = () => {
    const card = utils.returnCardToBeDealt(deckOfCards);
    const newPack = utils.returnNewDeckOfCardsWithSpecificCardRemoved(card, deckOfCards);

    setUserCards([...userCards, card]);
    setDeckOfCards(newPack);
  };

  const stick = () => {
    setUserStick(true);
    setGameFinished(true);
  };

  const reset = () => {
    setGameStarted(false);
    setWinner(false);
    setUserStick(false);
    setUserCards([]);
    setDealerCards([]);
  };

  useEffect(() => {
    const value = utils.totalValueOfCards(userCards);
    const isBust = value > 21;

    setUserCardValue(value);

    if (isBust) {
      setUserCardValue('BUST');
      setWinner('You lost, you went BUST');
      setGameFinished(true);
    }
  }, [userCards]);

  useEffect(() => {
    const value = utils.totalValueOfCards(dealerCards);
    setDealerCardValue(value);
    if (gameStarted) {
      const hitAgain = value < 15;
      if (hitAgain) {
        const card = utils.returnCardToBeDealt(deckOfCards);
        const newDealerCards = [...dealerCards, card];
        const newCards = utils.returnNewDeckOfCardsWithSpecificCardRemoved(card, deckOfCards);

        setDealerCards(newDealerCards);
        setDeckOfCards(newCards);
      }
    }
  }, [dealerCards]);

  useEffect(() => {
    if (userStick) {
      const results = utils.determineWinner(userCardValue, dealerCardValue, scores);
      setWinner(results.message);
      setScores(results.score);
      localStorage.setItem('scores', JSON.stringify(results.score));
    }
  }, [userStick]);

  useEffect(() => {
    const value = utils.totalValueOfCards(userCards);
    const isBlackJack = value === 21;

    if (isBlackJack) {
      setGameFinished(true);
      const result = utils.determineWinner('black-jack', null, scores);
      setWinner(result.message);
      setScores(result.score);
    }
  }, [gameStarted]);

  const appBarProps = {
    start,
    stick,
    reset,
    hit,
    gameStarted,
    gameFinished,
  };

  return (
    <section className="table">
      <div className="content">
        {!gameInitiated && <Logo />}

        <ScoresSection
          userCardValue={userCardValue}
          gameInitiated={gameInitiated}
          scores={scores}
        />

        <SectionTitle
          title="Dealer's Cards"
          gameStarted={gameStarted}
        />

        <DisplayCards
          isDisplayed={gameStarted}
          id="dealer-cards"
          cardsToBeDealt={winner ? dealerCards : [dealerCards[0]]}
        />

        <WhoWonMessage winner={winner || ''} />

        <SectionTitle
          title="Your Cards"
          showScore
          userCardValue={userCardValue}
          gameStarted={gameStarted}
        />

        <DisplayCards
          id="your-cards"
          isDisplayed
          cardsToBeDealt={userCards}
        />

        <AppBar
          background="#344955"
          height="55px"
          {...appBarProps}
        />

        <TableStyles />
      </div>
    </section>
  );
}

BlackJackTable.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  scores: PropTypes.shape().isRequired,
  setScores: PropTypes.func.isRequired,
  gameInitiated: PropTypes.bool.isRequired,
  setGameInitiated: PropTypes.func.isRequired,
};

export default BlackJackTable;
