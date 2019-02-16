import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function DisplayCards({ isDisplayed, cardsToBeDealt }) {
  return (
    <div id="cards" className="cards">

      <div className="card-slider">
        { isDisplayed
        && cardsToBeDealt.map(card => <Card info={card} />)
      }
      </div>
      <style jsx>{`
      .cards {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: 180px;
        perspective: 800px;
        width: 50%;
        transition: min-width 400ms;
      }
      
      .cards::-webkit-scrollbar { 
        display: none; 
      }
      
      .card-slider {
        display: flex;
        minWidth: 100%;
      }
      
      @media (max-width: 500px) {
        .cards {
          padding-left: 5%;
          width: 100%;
          overflow-X: scroll;
          transition: all 400ms;
        }
      }
      `}
      </style>
    </div>
  );
}

DisplayCards.propTypes = {
  isDisplayed: PropTypes.bool.isRequired,
  cardsToBeDealt: PropTypes.array.isRequired, //eslint-disable-line
};

export default DisplayCards;
