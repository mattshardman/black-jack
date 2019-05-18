import React from 'react';
import PropTypes from 'prop-types';

function ScoresSection({ userCardValue, gameInitiated, scores }) {
  return (
    <div className="total-wrapper">
      { gameInitiated && (
      <div className="scores">
        <div>You: <span className="score-number">{scores.userScore}</span></div>
        <div>Dealer: <span className="score-number">{scores.dealerScore}</span></div>
        <div>Hand total: <span className="score-number">{userCardValue}</span></div>
      </div>
      )}
    </div>
  );
}

ScoresSection.propTypes = {
  userCardValue: PropTypes.number.isRequired,
  gameInitiated: PropTypes.bool.isRequired,
  scores: PropTypes.shape().isRequired,
};

export default ScoresSection;
