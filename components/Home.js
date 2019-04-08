import React, { useState } from 'react';
import * as utils from './utils/utilFunctions';
import { BlackJackTable } from './BlackJackTable';

function Home() {
  const storedScores = process.browser ? JSON.parse(localStorage.getItem('scores')) : null;
  const startingScores = storedScores || { userScore: 0, dealerScore: 0 };

  // state
  const [scores, setScores] = useState(startingScores);
  const [gameInitiated, setGameInitiated] = useState(false);
  const initialDecksOfCards = utils.makeDecks(5);

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
