import React, { useState, useEffect } from 'react';
import AppBar from './appBar/AppBar';
import {
  makeDecks, returnCardToBeDealt,
  returnNewDeckOfCardsWithSpecificCardRemoved, totalValueOfCards,
  didUserWin, returnScores,
  endOfGameMessage, startGame,
} from './utils/utilFunctions';
import { TableStyles } from './Styles';
import WhoWonMessage from './WhoWonMessage';
import DisplayCards from './DisplayCards';
import Logo from './Logo';
import SectionTitle from './SectionTitle';
import ScoresSection from './ScoresSection';


export const BlackJackTable = () => {
  const storedScores = process.browser ? JSON.parse(localStorage.getItem('scores')) : null;
  const startingScores = storedScores || { userScore: 0, dealerScore: 0 };

  // state
  const [gameState, setGameState] = useState({
    gameInitiated: false,
    started: false,
    finished: false,
    userTotalCardValue: 0,
    winner: null,
  });

  const [cardState, setCardState] = useState({
    mainDeckOfCards: makeDecks(5),
    cardsDealtToUser: [],
    cardsDealtToDealer: [],
  });

  const [scores, setScores] = useState(startingScores);

  function keepDealingCardsToDealerUntilTotalGreaterThan15(input, currentMainDeckOfCards) {
    if (totalValueOfCards(input) < 15) {
      const card = returnCardToBeDealt(currentMainDeckOfCards);
      const dealerCards = [...input, card];
      const newCards = returnNewDeckOfCardsWithSpecificCardRemoved(card, currentMainDeckOfCards);

      setCardState(prevCardState => ({
        ...prevCardState,
        cardsDealtToDealer: dealerCards,
        mainDeckOfCards: newCards,
      }));

      return keepDealingCardsToDealerUntilTotalGreaterThan15(dealerCards, newCards);
    }
    return null;
  }

  function reset() {
    setGameState(prevGameState => ({
      ...prevGameState,
      started: false,
      userTotalCardValue: 0,
      winner: null,
    }));

    setCardState(prevCardState => ({
      ...prevCardState,
      cardsDealtToUser: [],
      cardsDealtToDealer: [],
    }));
  }

  function stick(userWasDealt21) {
    setGameState((prevGameState) => {
      const userTotal = totalValueOfCards(cardState.cardsDealtToUser);
      const dealerTotal = totalValueOfCards(cardState.cardsDealtToDealer);
      const userWon = didUserWin(userTotal, dealerTotal, userWasDealt21);
      const winnerMessage = endOfGameMessage(userTotal, dealerTotal);

      setScores(prevScore => returnScores(prevScore, userWon));

      return {
        ...prevGameState,
        winner: winnerMessage,
        userTotalCardValue: userTotal,
        finished: true,
      };
    });
  }

  function start() {
    const { newGameState, newCardState } = startGame(cardState, stick);
    setGameState(newGameState);
    setCardState(newCardState);

    const { cardsDealtToDealer, mainDeckOfCards } = newCardState;
    return keepDealingCardsToDealerUntilTotalGreaterThan15(cardsDealtToDealer, mainDeckOfCards);
  }


  function hit() {
    setCardState((prevCardState) => {
      const cardDealtToUser = returnCardToBeDealt(prevCardState.mainDeckOfCards);
      const newCardsDealtToUser = [...cardState.cardsDealtToUser, cardDealtToUser];
      const newPack = returnNewDeckOfCardsWithSpecificCardRemoved(cardDealtToUser, prevCardState.mainDeckOfCards);

      setGameState(prevGameState => ({
        ...prevGameState,
        userTotalCardValue: totalValueOfCards(newCardsDealtToUser),
      }));

      return {
        ...prevCardState,
        mainDeckOfCards: newPack,
        cardsDealtToUser: newCardsDealtToUser,
      };
    });
  }

  useEffect(() => {
    const isUserBust = gameState.userTotalCardValue === 'BUST';
    if (isUserBust) {
      stick(false);
      setGameState(prevGameState => ({
        ...prevGameState,
        userTotalCardValue: 0,
      }));
    }
  });

  const appBarProps = {
    start,
    stick,
    reset,
    hit,
    started: gameState.started,
    finished: gameState.finished,
  };

  return (
    <section className="table">
      <div className="content">
        {!gameState.gameInitiated && <Logo />}

        <ScoresSection gameState={gameState} scores={scores} />

        <SectionTitle
          title="Dealer's Cards"
          gameStarted={gameState.started}
        />

        <DisplayCards
          isDisplayed={gameState.started}
          id="dealer-cards"
          cardsToBeDealt={gameState.winner ? cardState.cardsDealtToDealer : [cardState.cardsDealtToDealer[0]]}
        />

        <WhoWonMessage winner={gameState.winner || ''} />

        <SectionTitle
          title="Your Cards"
          gameStarted={gameState.started}
        />

        <DisplayCards
          isDisplayed
          id="your-cards"
          cardsToBeDealt={cardState.cardsDealtToUser}
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
};

export default BlackJackTable;
