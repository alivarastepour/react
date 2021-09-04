import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('alo!')/*empty string returns false*/
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  return <>
    {/*<h1>{firstValue}</h1>*/}
    {/*<h1>{secondValue}</h1>*/}
    <h1>{text || 'hola!'}</h1>
    {text && <h1>hola!</h1>}
  </>;
};

export default ShortCircuit;
