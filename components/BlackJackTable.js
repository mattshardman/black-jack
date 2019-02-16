import React, { useState, useEffect } from 'react';
import ButtonSection from './ButtonSection';
import {
  make5Decks, returnCardToBeDealt,
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
  const [gameInitiated, setGameInitiated] = useState(false);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [mainDeckOfCards, setMainDeckOfCards] = useState(make5Decks());
  const [scores, setScores] = useState(startingScores);
  const [userTotalCardValue, setUserTotalCardValue] = useState(0);
  const [cardsDealtToUser, setCardsDealtToUser] = useState([]);
  const [cardsDealtToDealer, setCardsDealtToDealer] = useState([[]]);
  const [winner, setWinner] = useState(null);

  function keepDealingCardsToDealerUntilTotalGreaterThan14(input, currentMainDeckOfCards) {
    if (totalValueOfCards(input) < 15) {
      const card = returnCardToBeDealt(currentMainDeckOfCards);
      const dealerCards = [...input, card];
      const newCards = returnNewDeckOfCardsWithSpecificCardRemoved(card, currentMainDeckOfCards);
      setCardsDealtToDealer(dealerCards);
      setMainDeckOfCards(newCards);
      return keepDealingCardsToDealerUntilTotalGreaterThan14(dealerCards, newCards);
    }
    return null;
  }

  function start() {
    const currentMainDeckOfCards = [...mainDeckOfCards];
    const initialDeal = deal2CardsToUserAnd1CardToDealer(currentMainDeckOfCards);
    const deckOfCardsWithDealtCardsRemoved = initialDeal.cards;
    const [dealerCard, ...userCards] = initialDeal.dealtCards;

    setGameInitiated(true);
    setStarted(true);
    setFinished(false);
    setMainDeckOfCards(deckOfCardsWithDealtCardsRemoved);
    setCardsDealtToUser(userCards);
    setUserTotalCardValue(totalValueOfCards(userCards));
    setCardsDealtToDealer([dealerCard]);
    keepDealingCardsToDealerUntilTotalGreaterThan14([dealerCard], deckOfCardsWithDealtCardsRemoved);
  }

  function reset() {
    setStarted(false);
    setWinner(null);
    setCardsDealtToUser([]);
    setCardsDealtToDealer([]);
  }

  function stick() {
    const currentScores = scores;
    const userTotal = totalValueOfCards(cardsDealtToUser);
    const dealerTotal = totalValueOfCards(cardsDealtToDealer);
    const userWon = didUserWin(userTotal, dealerTotal);
    const winnerMessage = endOfGameMessage(userTotal, dealerTotal);

    setWinner(winnerMessage);
    if (userWon) {
      const newScores = { ...currentScores, userScore: currentScores.userScore + 1 };
      setScores(newScores);
      localStorage.clear();
      localStorage.setItem('scores', JSON.stringify(newScores));
    } else {
      const newScores = { ...currentScores, dealerScore: currentScores.dealerScore + 1 };
      setScores(newScores);
      localStorage.clear();
      localStorage.setItem('scores', JSON.stringify(newScores));
    }
    setFinished(true);
  }

  function hit() {
    const currentMainDeckOfCards = [...mainDeckOfCards];
    const cardDealtToUser = returnCardToBeDealt(currentMainDeckOfCards);
    const newCardsDealtToUser = [...cardsDealtToUser, cardDealtToUser];
    const newPack = returnNewDeckOfCardsWithSpecificCardRemoved(cardDealtToUser, currentMainDeckOfCards);

    setMainDeckOfCards(newPack);
    setCardsDealtToUser(newCardsDealtToUser);
    setUserTotalCardValue(totalValueOfCards(newCardsDealtToUser));
  }

  useEffect(() => {
    const isUserBust = userTotalCardValue === 'BUST';
    if (isUserBust) {
      stick();
      setUserTotalCardValue(0);
    }
  });

  const btnProps = {
    started,
    start,
    finished,
    stick,
    setCardsDealtToUser,
    cardsDealtToUser,
    reset,
    hit,
  };

  return (
    <section className="table">
      <div className="content">
        {!gameInitiated && <Logo />}

        <div className="total-wrapper">
          { gameInitiated && (
          <div className="scores">
            <div>You: <span className="score-number">{scores.userScore}</span></div>
            <div>Dealer: <span className="score-number">{scores.dealerScore}</span></div>
            <div>Hand total: <span className="score-number">{userTotalCardValue}</span></div>
          </div>
          )}
        </div>

        <div className="section-title">
          {started && <p>Dealer&apos;s Cards</p>}
        </div>

        <DisplayCards
          isDisplayed={started}
          title="Dealers Cards"
          cardsToBeDealt={winner ? cardsDealtToDealer : [cardsDealtToDealer[0]]}
        />

        <WhoWonMessage winner={winner} />

        <div className="section-title">
          {started && <p>Your Cards</p>}
        </div>

        <DisplayCards
          isDisplayed
          title="Your Cards"
          cardsToBeDealt={cardsDealtToUser}
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
