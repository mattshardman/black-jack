import React from 'react';
import PropTypes from 'prop-types';

function BarButton({ icon, isDisabled, clickFunction }) {
  return (
    <button
      type="button"
      className="btn"
      disabled={isDisabled}
      onClick={clickFunction}
    >
      {icon}
      <style jsx>{`
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
      `}
      </style>
    </button>
  );
}

BarButton.propTypes = {
  icon: PropTypes.element.isRequired,
  isDisabled: PropTypes.func.isRequired,
  clickFunction: PropTypes.func.isRequired,
};

export default BarButton;
