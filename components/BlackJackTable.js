import React, { useState, useEffect } from 'react';
import ButtonSection from './ButtonSection';
import {
  makeDecks, returnCardToBeDealt,
  returnNewDeckOfCardsWithSpecificCardRemoved, totalValueOfCards,
  didUserWin,
  endOfGameMessage, deal2CardsToUserAnd1CardToDealer,
} from './utils/utilFunctions';
import { TableStyles } from './Styles';
import WhoWonMessage from './WhoWonMessage';
import DisplayCards from './DisplayCards';
import Logo from './Logo';


const BlackJackTable = () => {
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

  function keepDealingCardsToDealerUntilTotalGreaterThan14(input, currentMainDeckOfCards) {
    if (totalValueOfCards(input) < 15) {
      const card = returnCardToBeDealt(currentMainDeckOfCards);
      const dealerCards = [...input, card];
      const newCards = returnNewDeckOfCardsWithSpecificCardRemoved(card, currentMainDeckOfCards);

      setCardState(prevCardState => ({
        ...prevCardState,
        cardsDealtToDealer: dealerCards,
        mainDeckOfCards: newCards,
      }));
      return keepDealingCardsToDealerUntilTotalGreaterThan14(dealerCards, newCards);
    }
    return null;
  }

  function start() {
    const currentMainDeckOfCards = [...cardState.mainDeckOfCards];
    const initialDeal = deal2CardsToUserAnd1CardToDealer(currentMainDeckOfCards);
    const deckOfCardsWithDealtCardsRemoved = initialDeal.cards;
    const [dealerCard, ...userCards] = initialDeal.dealtCards;

    setGameState({
      gameInitiated: true,
      started: true,
      userTotalCardValue: totalValueOfCards(userCards),
      finished: false,
    });

    setCardState({
      mainDeckOfCards: deckOfCardsWithDealtCardsRemoved,
      cardsDealtToUser: userCards,
      cardsDealtToDealer: [dealerCard],
    });

    keepDealingCardsToDealerUntilTotalGreaterThan14([dealerCard], deckOfCardsWithDealtCardsRemoved);
  }

  function reset() {
    setGameState(prevGameState => ({
      ...prevGameState,
      started: false,
      totalValueOfCards: 0,
      winner: null,
    }));

    setCardState(prevCardState => ({
      ...prevCardState,
      cardsDealtToUser: [],
      cardsDealtToDealer: [],
    }));
  }

  function stick() {
    setGameState((prevGameState) => {
      const userTotal = totalValueOfCards(cardState.cardsDealtToUser);
      const dealerTotal = totalValueOfCards(cardState.cardsDealtToDealer);
      const userWon = didUserWin(userTotal, dealerTotal);
      const winnerMessage = endOfGameMessage(userTotal, dealerTotal);

      setScores((prevScore) => {
        const newScores = userWon
          ? { ...prevScore, userScore: prevScore.userScore + 1 }
          : { ...prevScore, dealerScore: prevScore.dealerScore + 1 };
        localStorage.clear();
        localStorage.setItem('scores', JSON.stringify(newScores));
        return newScores;
      });

      return {
        ...prevGameState,
        winner: winnerMessage,
        userTotalCardValue: userTotal,
        finished: true,
      };
    });
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
      stick();
      setGameState(prevGameState => ({
        ...prevGameState,
        userTotalCardValue: 0,
      }));
    }
  });

  const btnProps = {
    start,
    stick,
    reset,
    hit,
    started: gameState.started,
    finished: gameState.finished,
    setCardsDealtToDealer: cardState.setCardsDealtToUser,
    cardsDealtToUser: gameState.cardsDealtToUser,
  };

  return (
    <section className="table">
      <div className="content">
        {!gameState.gameInitiated && <Logo />}

        <div className="total-wrapper">
          { gameState.gameInitiated && (
          <div className="scores">
            <div>You: <span className="score-number">{scores.userScore}</span></div>
            <div>Dealer: <span className="score-number">{scores.dealerScore}</span></div>
            <div>Hand total: <span className="score-number">{gameState.userTotalCardValue}</span></div>
          </div>
          )}
        </div>

        <div className="section-title">
          {gameState.started && <p>Dealer&apos;s Cards</p>}
        </div>

        <DisplayCards
          isDisplayed={gameState.started}
          title="Dealers Cards"
          cardsToBeDealt={gameState.winner ? cardState.cardsDealtToDealer : [cardState.cardsDealtToDealer[0]]}
        />

        <WhoWonMessage winner={gameState.winner} />

        <div className="section-title">
          {gameState.started && <p>Your Cards</p>}
        </div>

        <DisplayCards
          isDisplayed
          title="Your Cards"
          cardsToBeDealt={cardState.cardsDealtToUser}
        />

        <ButtonSection
          {...btnProps}
        />

        <TableStyles />
      </div>
      <div className="bg" />
    </section>
  );
};

export default BlackJackTable;
