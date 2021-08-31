import React, { useState } from 'react';

const UseStateBasics = () => {
  function func() {
    if (text === 'hi, leave me')
      setText('i said leave me')
    else if (text === 'i said leave me')
      setText('rock u')
    else
      setText('hi, leave me')
  }
  // const var1 = useState('salam')[0];
  // const var2 = useState('salam')[1];
  // console.log(var1, var2)
  const [text, setText] = useState('hi, leave me')
  return <React.Fragment>
    <h1>{text}</h1>
    <button onClick={func} className='btn'>click me</button>
  </React.Fragment>;
};

export default UseStateBasics;
