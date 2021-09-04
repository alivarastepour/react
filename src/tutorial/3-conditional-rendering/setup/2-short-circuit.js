import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('alo!')/*empty string returns false*/
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [isError, setError] = useState(false)

  return <>
    {/*<h1>{firstValue}</h1>*/}
    {/*<h1>{secondValue}</h1>*/}
    <h1>{text || 'hola!'}</h1>
    <button className='btn' onClick={() => setError(!isError)}>toggle error</button>
    {isError && <h1>Error..</h1>}
  </>;
};

export default ShortCircuit;
