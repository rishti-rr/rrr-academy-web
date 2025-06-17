import React from 'react';

const ToastMessage = ({ message, type }) => {
  const style = {
    padding: '10px',
    backgroundColor: type === 'error' ? '#f44336' : '#4caf50',
    color: 'white',
    margin: '10px 0',
    borderRadius: '4px',
  };
  return <div style={style}>{message}</div>;
};

export default ToastMessage;
