import React from 'react';

interface Info {
  number: string,
  img: string,
}

const Card = ({ info } : { info: Info }) => {
  const mobileWidth = process.browser ? window.innerWidth / 3 : 100;
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

        @media (max-width: 600px) {
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
          height: 75%;
          width: 126px;
          border-radius: 5px;
          background: radial-gradient(#fff, #fafafa);   
          margin-right: 10px;
          animation-name: rotate;
          animation-iteration-count: 1;
          animation-duration: 1s;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 600px) {
          .card {
            box-sizing: border-box;
            max-height: 90%;
            height: ${mobileWidth * 3.5 / 2.25}px;
            width: ${mobileWidth}px;
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
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .main-img {
          height: 50px;
        }

        @media (max-width: 500px) {
          .main-img {
            height: 40px;
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

export default Card;
