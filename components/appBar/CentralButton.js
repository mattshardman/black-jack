import React, { useState } from 'react';
import PropTypes from 'prop-types';

function CentralButton({
  icon, background, color, isDisabled, clickFunction,
}) {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      type="button"
      className={clicked ? 'hit-btn hit-btn-click' : 'hit-btn'}
      disabled={isDisabled}
      onClick={clickFunction}
      onTouchStart={() => setClicked(true)}
      onAnimationEnd={() => setClicked(false)}
    >
      {icon}
      <style jsx>{`
         .hit-btn {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            border: 1px solid ${background};
            background: ${background};
            color: ${color};
            font-size: 12px;
            outline: none;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3);
          }

          .hit-btn-click {
            animation-name: spiral;
            animation-iteration-count: 1;
            animation-duration: 500ms;
          }

          @keyframes spiral {
            0% {
              box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            }

            50% {
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
            }

            100% {
              box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            }
          }
      `}
      </style>
    </button>

  );
}

CentralButton.propTypes = {
  icon: PropTypes.element.isRequired,
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isDisabled: PropTypes.func.isRequired,
  clickFunction: PropTypes.func.isRequired,
};

export default CentralButton;
