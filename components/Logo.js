import React, { useState, useEffect } from 'react';

const logoText = 'Wack Jack';

function Logo() {
  const [titleLetters, setTitleLetters] = useState('');

  function addText(counter) {
    if (counter < logoText.length) {
      setTimeout(() => {
        setTitleLetters(state => `${state}${logoText[counter]}`);
        counter += 1; //eslint-disable-line
        addText(counter);
      }, 50);
    }
  }

  useEffect(() => {
    addText(0);
  }, []);

  return (
    <div className="logo-wrapper">
      <img
        className="logo-image"
        src="https://res.cloudinary.com/dgdniqfi9/image/upload/v1550240315/lambda/cards.png"
        alt=""
        width="25%"
      />
      <div className="logo">
        {!!titleLetters[0] && <span>{titleLetters[0]}</span>}
        {!!titleLetters[1] && <span>{titleLetters[1]}</span>}
        {!!titleLetters[2] && <span>{titleLetters[2]}</span>}
        {!!titleLetters[3] && <span>{titleLetters[3]}</span>}
        {!!titleLetters[4] && <span>{titleLetters[4]}</span>}
        {!!titleLetters[5] && <span>{titleLetters[5]}</span>}
        {!!titleLetters[6] && <span>{titleLetters[6]}</span>}
        {!!titleLetters[7] && <span>{titleLetters[7]}</span>}
        {!!titleLetters[8] && <span>{titleLetters[8]}</span>}
      </div>
      <style jsx>{`
      .logo-wrapper {
        position: absolute;
        top: 20%;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
      }

      .logo {
        font-size: 75px;
        height: 90px;
        color: #000;
        display: flex;
        width: 300px;
      }

      span {
        display: block;
        animation-name: pop;
        animation-iteration-count: 1;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        font-family: 'Lobster', cursive;
      }

      @keyframes pop {
        0% {
          opacity: 0;
          text-shadow: none;
          transform: scale(1.05) translateX(0);
        }

        70% {
          opacity: 1;
          color: #000;
          text-shadow: 20px 40px 4px  rgba(80,80,80,0.3);
          transform: scaleY(1.2) scaleX(1.1);
        }

        100% {
          opacity: 1;
          color: #000;
          text-shadow: none;
          transform: scale(0.95);
        }
      }
    `}
      </style>
    </div>
  );
}

export default Logo;
