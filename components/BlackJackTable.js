import React, { useState } from 'react';
import Card from './Card';
import ButtonSection from './ButtonSection';
import {
  makeCards, make5Decks, returnCardToBeDealt,
  returnNewDeckOfCardsWithSpecificCardRemoved, totalValueOfCards,
  endOfGameMessage, deal2CardsToUserAnd1CardToDealer,
} from './utils/utilFunctions';
import { TableStyles } from './Styles';

const BlackJackTable = () => {
  // state
  const [mainDeckOfCards, setMainDeckOfCards] = useState(make5Decks());
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [cardsDealtToUser, setCardsDealtToUser] = useState([]);
  const [cardsDealtToDealer, setCardsDealtToDealer] = useState([]);
  const [winner, setWinner] = useState(null);

  function hit() {
    const currentMainDeckOfCards = [...mainDeckOfCards];
    const cardChosen = returnCardToBeDealt(currentMainDeckOfCards);
    setCardsDealtToUser([...cardsDealtToUser, cardChosen]);
    const newPack = returnNewDeckOfCardsWithSpecificCardRemoved(cardChosen, currentMainDeckOfCards);
    setMainDeckOfCards(newPack);
  }

  function dealerHit(input, currentMainDeckOfCards) {
    if (totalValueOfCards(input) < 15) {
      const card = returnCardToBeDealt(currentMainDeckOfCards);
      const dealerCards = [...input, card];
      const newCards = returnNewDeckOfCardsWithSpecificCardRemoved(card, currentMainDeckOfCards);
      setCardsDealtToDealer(dealerCards);
      setMainDeckOfCards(newCards);
      return dealerHit(dealerCards, newCards);
    }
    return null;
  }

  function stick() {
    const userTotal = totalValueOfCards(cardsDealtToUser);
    const dealerTotal = totalValueOfCards(cardsDealtToDealer);
    const winnerMessage = endOfGameMessage(userTotal, dealerTotal);

    setWinner(winnerMessage);
    setFinished(true);
  }

  function start() {
    const currentMainDeckOfCards = [...mainDeckOfCards];

    const initialDeal = deal2CardsToUserAnd1CardToDealer(currentMainDeckOfCards);
    const deckOfCardsWithDealtCardsRemoved = initialDeal.cards;
    const [dealerCard, ...userCards] = initialDeal.dealtCards;

    setFinished(false);
    setStarted(true);
    setMainDeckOfCards(deckOfCardsWithDealtCardsRemoved);
    setCardsDealtToUser(userCards);
    setCardsDealtToDealer([dealerCard]);
    dealerHit([dealerCard], deckOfCardsWithDealtCardsRemoved);
  }

  function reset() {
    const userCards = [];
    const dealerCards = [];
    setStarted(false);
    setMainDeckOfCards(makeCards());
    setCardsDealtToUser(userCards);
    setCardsDealtToDealer(dealerCards);
    setWinner(null);
  }

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
      <div className={started ? 'title title-left' : 'title title-center'}>Black Jack</div>

      <div className="total-wrapper">
        { started && <div className="total">{totalValueOfCards(cardsDealtToUser)}</div>}
      </div>

      <div className="cards">
        <div className="card-slider">
          { winner && cardsDealtToDealer.map(card => <Card info={card} />) }
        </div>
      </div>

      <div className="message">
        { winner && <h1 className="winner">{winner}</h1> }
      </div>

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
