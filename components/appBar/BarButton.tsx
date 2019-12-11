import React, { ReactChild, ReactElement } from 'react';

interface BarButtonProps {
  icon: ReactElement,
  isDisabled: boolean,
  clickFunction: any
}

function BarButton({ icon, isDisabled, clickFunction } : BarButtonProps) {
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

export default BarButton;
