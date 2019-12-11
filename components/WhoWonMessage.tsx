import React from 'react';
import { TableStyles } from './Styles';

const WhoWonMessage = ({ winner }: { winner: string }) => (
  <div className="message">
    { winner && <h3 className="winner">{winner}</h3> }
    <TableStyles />
  </div>
);

export default WhoWonMessage;
