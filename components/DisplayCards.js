import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function DisplayCards({ id, isDisplayed, cardsToBeDealt }) {
  // useEffect(() => {
  //   const mobileWidth = process.browser ? (window.innerWidth / 3) : 100;
  //   const slider = document.querySelector(`#${id}`);
  //   const width = mobileWidth * cardsToBeDealt.length;
  //   console.log(width);
  //   slider.scrollLeft = width;
  //   slider.scrollTo({
  //     top: 0,
  //     left: width,
  //     behavior: 'smooth',
  //   });
  // });

  return (
    <div id={id} className="cards">
      <div className="card-slider">
        { isDisplayed
        && cardsToBeDealt.map(card => <Card key={card.id} info={card} />)
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
  id: PropTypes.string.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  cardsToBeDealt: PropTypes.array.isRequired, //eslint-disable-line
};

export default DisplayCards;
