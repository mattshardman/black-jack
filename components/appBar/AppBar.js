import React from 'react';
import PropTypes from 'prop-types';
import { PlayArrow, PanTool, Refresh } from '@material-ui/icons';
import CentralButton from './CentralButton';
import BarButton from './BarButton';

const BtnIcon = ({ icon, fontSize, fontColor }) => (
  <i className="material-icons" style={{ fontSize, fontColor }}>
    {icon}
  </i>
);

const AppBar = ({
  gameStarted, start, stick, gameFinished, reset, hit, background, height,
}) => {
  const appBarButtons = [{
    id: 1,
    icon: <PanTool style={{ fontSize: 16, color: '#fff' }} />,
    isDisabled: gameFinished,
    clickFunction: stick,
  },
  {
    id: 2,
    icon: <Refresh style={{ fontSize: 20, color: '#fff' }} />,
    isDisabled: !gameFinished,
    clickFunction: reset,
  }];

  const userWasDealt21 = false;

  return (
    <div className="app-bar">
      <div className="central-btn-wrapper">
        <CentralButton
          icon={(
            <PlayArrow
              style={{ color: '#17262a', fontSize: 30 }}
            />
          )}
          background="#faab1a"
          color="#17262a"
          isDisabled={!!gameStarted && gameFinished}
          clickFunction={gameStarted ? hit : start}
        />
      </div>

      <div className="buttons-section">
        { appBarButtons.map(each => (
          <BarButton
            key={each.id}
            icon={each.icon}
            isDisabled={each.isDisabled}
            clickFunction={() => each.clickFunction(userWasDealt21)}
          />
        )) }
      </div>
      <style jsx>{`
            .app-bar {
              position: fixed;
              bottom: 0;
              width: 100%;            
            }

            .buttons-section {
              box-sizing: border-box;
              position: fixed;
              bottom: 0;
              width: 100%;
              height: ${height};
              background: ${background};
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 12%;
              -webkit-mask-image: radial-gradient(36px at 50% 0% , transparent 98%, ${background} 100%);
            }

            .central-btn-wrapper {
              z-index: 20;
              position: absolute;
              bottom: 30px;
              left: 50%;
              transform: translateX(-50%);
            }
            `}
      </style>
    </div>
  );
};

AppBar.propTypes = {
  gameStarted: PropTypes.bool.isRequired,
  gameFinished: PropTypes.bool.isRequired,
  start: PropTypes.func.isRequired,
  stick: PropTypes.func.isRequired,
  hit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

BtnIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  fontColor: PropTypes.string.isRequired,
};

export default AppBar;
