import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ButtonSection = ({
  started, start, stick, finished, reset, hit,
}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="buttons">
      <div className="buttons-section">
        { !started
          ? (
            <button
              type="button"
              className="hit-btn"
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
                <i className="material-icons" style={{ fontSize: 18 }}>
                pan_tool
                </i>
              </button>
              <button
                type="button"
                className={clicked ? 'hit-btn hit-btn-click' : 'hit-btn'}
                disabled={finished}
                onClick={hit}
                onTouchStart={() => setClicked(true)}
                onAnimationEnd={() => setClicked(false)}
              >
                <i className="material-icons" style={{ fontSize: 40 }}>
                play_arrow
                </i>
              </button>
              <button
                type="button"
                className="btn"
                onClick={reset}
              >
                <i className="material-icons">
                refresh
                </i>
              </button>
            </>
          )
      }
      </div>
      <style jsx>{`
            .buttons {
              height: 12%;
              width: 50%;
              display: flex;
              align-items: flex-start;
              justify-content: space-around;
            }

            @media (max-width: 500px) {
              .buttons { width: 70%; }
            }

            .buttons-section {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-around;
            }

            .hit-btn {
              width: 65px;
              height: 65px;
              border-radius: 50%;
              border: 1px solid #fff;
              color: #fff;
              background: none;
              outline: none;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .hit-btn-click {
              animation-name: spiral;
              animation-iteration-count: 1;
              animation-duration: 500ms;
            }

            @keyframes spiral {
              0% {
                box-shadow: none;
                transform: scale(1);
                border: 1px #fff solid;
              }

              50% {
                box-shadow: 3px 10px 300px rgba(250,250,250, 0.4);
                transform: scale(0.95);
                border: 1px #eaeaea solid;
              }

              100% {
                box-shadow: none;
                transform: scale(1);
                border: 1px #fff solid;
              }
            }

            .btn {
              color: #fff;
              border: none;
              outline: none;
              font-size: 15px;
              height: 40px;
              width: 40px;
              font-size: 10px;
              background: none;
              border: none;
              box-shadow: none;
              display: flex;
              justify-content: center;
              align-items: center;
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
};

ButtonSection.propTypes = {
  started: PropTypes.bool.isRequired,
  finished: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  stick: PropTypes.func.isRequired,
  hit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default ButtonSection;
