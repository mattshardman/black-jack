import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({
  gameStarted, title, showScore, userCardValue,
}) => (
  <div className="section-title">
    { gameStarted && (
    <>
      <div className="wrapper">
        <small>{title}</small>
      </div>
      {showScore
      && (
      <div className="wrapper">
        <small className="score">{userCardValue}</small>
      </div>
      )}
    </>
    )}
    <style jsx>{`
        .section-title {
          box-sizing: border-box;
          font-size: 16px;
          width: 90%;
          margin: 0 5%;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .wrapper {
          box-sizing: border-box;
          background: #fff;
          height: 30px;
          padding: 2px 20px;
          border: 1px #eaeaea solid;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .score {
          color: #faab1a;
        }
    `}
    </style>
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  showScore: PropTypes.bool.isRequired,
  userCardValue: PropTypes.number.isRequired,
  gameStarted: PropTypes.bool.isRequired,
};


export default SectionTitle;
