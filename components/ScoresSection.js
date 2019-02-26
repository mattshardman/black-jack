import React from 'react';
import PropTypes from 'prop-types';

function ScoresSection({ gameState, scores }) {
  return (
    <div className="total-wrapper">
      { gameState.gameInitiated && (
      <div className="scores">
        <div>You: <span className="score-number">{scores.userScore}</span></div>
        <div>Dealer: <span className="score-number">{scores.dealerScore}</span></div>
        <div>Hand total: <span className="score-number">{gameState.userTotalCardValue}</span></div>
      </div>
      )}
    </div>
  );
}

ScoresSection.propTypes = {
  gameState: PropTypes.shape().isRequired,
  scores: PropTypes.shape().isRequired,
};

export default ScoresSection;
