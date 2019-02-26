import React from 'react';
import PropTypes from 'prop-types';
import CentralButton from './CentralButton';
import BarButton from './BarButton';

const BtnIcon = ({ icon, fontSize, fontColor }) => (
  <i className="material-icons" style={{ fontSize, fontColor }}>
    {icon}
  </i>
);

const AppBar = ({
  started, start, stick, finished, reset, hit, background, height,
}) => {
  const appBarButtons = [{
    icon: 'pan_tool',
    isDisabled: finished,
    clickFunction: stick,
    fontSize: 16,
    fontColor: '#fff',
  },
  {
    icon: 'refresh',
    isDisabled: !finished,
    clickFunction: reset,
    fontSize: 20,
    fontColor: '#fff',
  }];

  return (
    <div className="app-bar">
      <div className="central-btn-wrapper">
        <CentralButton
          icon={<BtnIcon icon="play_arrow" fontColor="#17262a" fontSize={30} />}
          background="#faab1a"
          color="#17262a"
          isDisabled={!!started && finished}
          clickFunction={started ? hit : start}
        />
      </div>

      <div className="buttons-section">
        { appBarButtons.map(each => (
          <BarButton
            icon={<BtnIcon {...each} />}
            isDisabled={each.isDisabled}
            clickFunction={each.clickFunction}
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
              padding: 0 10%;
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
  started: PropTypes.bool.isRequired,
  finished: PropTypes.bool.isRequired,
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
