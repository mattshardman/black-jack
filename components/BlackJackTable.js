import React, { useState, useEffect } from 'react';
import Card from './Card';
import ButtonSection from './ButtonSection';
import {
  make5Decks, returnCardToBeDealt,
  returnNewDeckOfCardsWithSpecificCardRemoved, totalValueOfCards,
  didUserWin,
  endOfGameMessage, deal2CardsToUserAnd1CardToDealer,
} from './utils/utilFunctions';
import { TableStyles } from './Styles';
import WhoWonMessage from './WhoWonMessage';

const BlackJackTable = () => {
  // state
  const [gameInitiated, setGameInitiated] = useState(false);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [mainDeckOfCards, setMainDeckOfCards] = useState(make5Decks());
  const [scores, setScores] = useState({ userScore: 0, dealerScore: 0 });
  const [userTotalCardValue, setUserTotalCardValue] = useState(0);
  const [cardsDealtToUser, setCardsDealtToUser] = useState([]);
  const [cardsDealtToDealer, setCardsDealtToDealer] = useState([]);
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
      setScores({ ...currentScores, userScore: currentScores.userScore + 1 });
    } else {
      setScores({ ...currentScores, dealerScore: currentScores.dealerScore + 1 });
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
      <div className={gameInitiated ? 'title title-left' : 'title title-center'}>Black Jack</div>

      <div className="total-wrapper">
        { gameInitiated && (
        <div className="scores">
          <div>You: {scores.userScore}</div>
          <div>Dealer: {scores.dealerScore}</div>
        </div>
        )}
        { gameInitiated && <div className="total">{totalValueOfCards(cardsDealtToUser)}</div>}
      </div>

      <div className="cards">
        <div className="card-slider">
          { winner
            && cardsDealtToDealer.map(card => <Card info={card} />)
          }
        </div>
      </div>

      <WhoWonMessage winner={winner} />

      <div className="cards">
        <div className="card-slider">
          {cardsDealtToUser.map(card => (
            <Card info={card} />
          ))}
        </div>
      </div>

      <ButtonSection
        {...btnProps}
      />

      <TableStyles />

    </section>
  );
};

export default BlackJackTable;
