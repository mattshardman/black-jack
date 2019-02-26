import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ gameStarted, title }) => (
  <div className="section-title">
    { gameStarted && <p>{title}</p>}
    <style jsx>{`
        .section-title {
            font-size: 16px;
            width: 90%;
            padding: 0;
          }
    `}
    </style>
  </div>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  gameStarted: PropTypes.bool.isRequired,
};


export default SectionTitle;
