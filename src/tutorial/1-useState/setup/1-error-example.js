import React from 'react';

const ErrorExample = () => {
  function func() {
    title = 'oi' /*no change*/
  }



  let title = 'salam';
  return <React.Fragment>
    <h2>{title}</h2>
    <button className='btn' onClick={func}>change title</button>
  </React.Fragment>;
};

export default ErrorExample;
