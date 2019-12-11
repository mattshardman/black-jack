import React from 'react';
import Card from './Card';
import { CardType } from './utils/types';

interface CardInfo {
  id: string,
  isDisplayed: boolean,
  cardsToBeDealt: Array<CardType>
}

function DisplayCards({ id, isDisplayed, cardsToBeDealt } : CardInfo) {
  const slideRight = () => {
    const mobileWidth = process.browser ? window.innerWidth / 3 : 100;
    const slider = document.getElementById(id);
    const width = mobileWidth * cardsToBeDealt.length;

    slider.scrollTo({
      top: 0,
      left: width,
      behavior: 'smooth',
    });
  };

  return (
    <div className="display-card-wrapper">
      {cardsToBeDealt.length > 2 && (
        <button type="button" onClick={slideRight} className="btn">
          <i className="material-icons" style={{ fontSize: 16 }}>
            arrow_forward
          </i>
        </button>
      )}
      <div id={id} className="cards">
        <div className="card-slider">
          {isDisplayed
            && cardsToBeDealt.map(card => <Card key={card.id} info={card} />)}
        </div>
      </div>
      <style jsx>
        {`
          .display-card-wrapper {
            width: 100%;
            height: 35%;
            overflow: hidden;
            position: relative;
          }

          .cards {
            position: relative;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            height: 100%;
            perspective: 800px;
            width: 50%;
          }

          .cards::-webkit-scrollbar {
            display: none;
          }

          .card-slider {
            display: flex;
            height: 100%;
            align-items: center;
          }

          .btn {
            z-index: 10;
            position: absolute;
            height: 35px;
            width: 35px;
            color: #344955;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
            background: #fff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: none;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
            outline: none;
          }

          @media (max-width: 600px) {
            .cards {
              padding-left: 5%;
              width: 100%;
              overflow-x: scroll;
              transition: all 400ms;
            }
          }
        `}
      </style>
    </div>
  );
}

export default DisplayCards;
