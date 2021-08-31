import React, { useState } from 'react';

const UseStateCounter = () => {
  function inc() {
    setValue(++value)
  }
  function de() {
    if (value === 0)
      setValue(0)
    else
      setValue(--value)
  }
  function re() {
    setValue(0)
  }

  let [value, setValue] = useState(0)
  return <>
    <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
      <button className='btn' onClick={() => inc()}>+</button>
      <button className='btn' onClick={() => de()}>-</button>
      <button className='btn' onClick={() => re()}>reset</button>
    </section>
  </>;
};

export default UseStateCounter;
