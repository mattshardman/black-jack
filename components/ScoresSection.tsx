import React from "react";
import { Scores } from './utils/types'

interface ScoreData {
  userCardValue: number;
  gameInitiated: boolean;
  scores: Scores
}

function ScoresSection({ userCardValue, gameInitiated, scores }: ScoreData) {
  return (
    <div className="total-wrapper">
      {gameInitiated && (
        <div className="scores">
          <div className="score">
            You: <span className="score-number">{scores.userScore}</span>
          </div>

          <div className="score">
            Dealer: <span className="score-number">{scores.dealerScore}</span>
          </div>

          <div className="score">
            Hand total: <span className="score-number">{userCardValue}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScoresSection;
