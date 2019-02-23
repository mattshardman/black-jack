import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function DisplayCards({ id, isDisplayed, cardsToBeDealt }) {
  const slideRight = () => {
    const mobileWidth = process.browser ? (window.innerWidth / 3) : 100;
    const slider = document.querySelector(`#${id}`);
    const width = mobileWidth * cardsToBeDealt.length;

    slider.scrollTo({
      top: 0,
      left: width,
      behavior: 'smooth',
    });
  };

  return (
    <div className="display-card-wrapper">
      { cardsToBeDealt.length > 2
      && (
      <button
        type="button"
        onClick={slideRight}
        className="btn"
      >
        <i
          className="material-icons"
          style={{ fontSize: 15 }}
        >arrow_forward
        </i>
      </button>
      )
    }
      <div id={id} className="cards">

        <div className="card-slider">
          { isDisplayed
        && cardsToBeDealt.map(card => <Card key={card.id} info={card} />)
      }
        </div>

      </div>
      <style jsx>{`
      .display-card-wrapper {
        width: 100%;
        overflow: hidden;
        position: relative;
      }

      .cards {
        position: relative;
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

      .btn {
        z-index: 10;
        position: absolute;
        height: 30px;
        width: 30px;
        background: red;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        background: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        outline: none;
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
  cardsToBeDealt: PropTypes.arrayOf().isRequired,
};

export default DisplayCards;
