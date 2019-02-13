import React from 'react';
import PropTypes from 'prop-types';

const ButtonSection = ({
  started, start, stick, finished, reset, hit,
}) => (
  <div className="buttons">
    { !started
      ? (
        <button
          type="button"
          className="btn start-btn"
          onClick={start}
        >
              START
        </button>
      )
      : (
        <>
          <button
            type="button"
            className="btn"
            disabled={finished}
            onClick={stick}
          >
                STICK
          </button>
          <button
            type="button"
            className="btn"
            disabled={finished}
            onClick={hit}
          >
                HIT ME
          </button>
          <button
            type="button"
            className="btn"
            onClick={reset}
          >
                RESET
          </button>

        </>
      )
      }
    <style jsx>{`
            .buttons {
              height: 20%;
              width: 50%;
              display: flex;
              align-items: center;
              justify-content: space-around;
            }

            @media (max-width: 500px) {
              .buttons { width: 100%; }
            }

            .btn {
              height: 50px;
              width: 120px;
              color: #fff;
              border: none;
              border-radius: 3px;
              outline: none;
              font-size: 15px;
              background: #FF0266;
              box-shadow: 0 3px 4px rgba(0,0,0,.2);
            }

            

            @media (max-width: 500px) {
              .btn {
                  height: 30px;
                  width: 80px;
                  font-size: 10px;
              }
            }

            .start-btn {
              width: 140px;
              height: 55px;
              font-size: 14px;
            }
            `}
    </style>
  </div>
);

ButtonSection.propTypes = {
  started: PropTypes.bool.isRequired,
  finished: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  stick: PropTypes.func.isRequired,
  hit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default ButtonSection;
