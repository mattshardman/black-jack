import React from 'react';
import PropTypes from 'prop-types';
import { TableStyles } from './Styles';

const WhoWonMessage = ({ winner }) => (
  <div className="message">
    { winner && <h3 className="winner">{winner}</h3> }
    <TableStyles />
  </div>
);

WhoWonMessage.propTypes = {
  winner: PropTypes.string.isRequired,
};

export default WhoWonMessage;
