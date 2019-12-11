import React, { useState, useEffect } from 'react';

import { CardType, Scores } from './utils/types';
import * as utils from './utils/utilFunctions';
import { BlackJackTable } from './BlackJackTable';

function Home() {
  const startingScores = { userScore: 0, dealerScore: 0 };

  const [scores, setScores] = useState(startingScores);
  const [gameInitiated, setGameInitiated]: [boolean, any] = useState(false);
  const initialDecksOfCards: Array<CardType> = utils.makeDecks(5);

  useEffect(() => {
    const savedScores: Scores = JSON.parse(localStorage.getItem('scores'));
    if (scores) {
      setScores(savedScores);
    }
  }, []);

  return (
    <>
      <BlackJackTable
        cards={initialDecksOfCards}
        scores={scores}
        setScores={setScores}
        gameInitiated={gameInitiated}
        setGameInitiated={setGameInitiated}
      />
    </>
  );
}

export default Home;
