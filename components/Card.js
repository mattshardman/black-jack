import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ info }) => {
  const mobileWidth = process.browser ? `${window.innerWidth / 3}px` : '100px';
  return (
    <div className="card">
      <div className="info-top">
        <h1 className="number">{info.number}</h1>
        <img className="suit-img" src={info.img} alt="" />
      </div>
      <div className="center-section">
        <img src={info.img} className="main-img" alt="" />
      </div>
      <div className="info-bottom">
        <h1 className="number">{info.number}</h1>
        <img className="suit-img" src={info.img} alt="" />
      </div>
      <style jsx>{`
        h1 {
          font-size: 12px;
          margin: 0;
        }

        @media (max-width: 500px) {
          h1 {
            font-size: 12px;
          }
        }

        .card {
          display: flex;
          position: relative;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          height: 180px;
          width: 126px;
          background: radial-gradient(#fff, #ddd);
         
          margin-right: 10px;
          animation-name: rotate;
          animation-iteration-count: 1;
          animation-duration: 1s;
          box-shadow: 0 3px 25px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 500px) {
          .card {
            height: 175px;
            width: ${mobileWidth};
          }
        }

        @keyframes rotate {
          from {
            opacity: 0;
            transform: translateX(100%) rotate3d(1, 0, 0, -70deg);
          }

          to {
            opacity: 1;
            transform: rotate3d(0, 1, 0, 0deg);
          }
        }

        .center-section {
          height: 65%;
          width: 60%;
          border-radius: 5px;
          border: 1px #ddd solid;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .main-img {
          height: 50px;
        }

        @media (max-width: 500px) {
          .main-img {
            height: 30px;
          }
        }

        .suit-img {
          height: 15px;
        }

        @media (max-width: 500px) {
          .suit-img {
            height: 12px;
          }
        }

        .info-top {
          position: absolute;
          top: 5px;
          left: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .info-bottom {
          position: absolute;
          bottom: 5px;
          right: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transform: rotate(180deg);
        }
      `}
      </style>
    </div>
  );
};

Card.propTypes = {
  info: PropTypes.string.isRequired,
};

export default Card;
