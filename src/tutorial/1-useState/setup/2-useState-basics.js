import React, { useState } from 'react';

const UseStateBasics = () => {

  function func() {
    if (text === 'random')
      setText('hello Friend')
    else
      setText('random')
  }
  // const var1 = useState('salam')[0];
  // const var2 = useState('salam')[1];
  // console.log(var1, var2)
  const [text, setText] = useState('random')
  return <React.Fragment>
    <h1>{text}</h1>
    <button onMouseOver={func} className='btn'>click me</button>
  </React.Fragment>;
};

export default UseStateBasics;
