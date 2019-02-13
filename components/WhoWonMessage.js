import React from 'react';
import PropTypes from 'prop-types';
import { TableStyles } from './Styles';

const WhoWonMessage = ({ winner }) => (
  <div className="message">
    { winner && <h1 className="winner">{winner}</h1> }
    <TableStyles />
  </div>
);



export default WhoWonMessage;
