import React, { useState } from 'react';

const UseStateCounter = () => {

  const setRange = () => {
      setEndValue(endValue);
      setStartValue(startValue);
      setValue(startValue);
  }
  const add = () => {
    if (value + 1 > endValue)
      setValue(startValue);
    else
      setValue(++value);
  }
  const sub = () => {
    if (value - 1 < startValue)
      setValue(endValue);
    else
      setValue(--value);
  }

  const reset = () => {
    setValue(startValue);
  }

  let [value,setValue] = useState(0);
  let [startValue,setStartValue] = useState(0);
  let [endValue,setEndValue] = useState(0);

    return <>
      <div>
        <label htmlFor="from">from : </label>
        <input value={startValue} onChange={(e) => setStartValue(e.target.value)} className='form' id='from' type="text"/>
        <label htmlFor="to">to : </label>
        <input value={endValue} onChange={(e) => setEndValue(e.target.value)} className='form' id='to' type="text"/>
        <button className='btn' onClick={setRange}>apply range</button>
      </div>
      <br/>
      <h4>number range is from ${startValue} to ${endValue}</h4>
      <h1>{value}</h1>
      <div >
        <button onClick={add} className='btn'>increment</button>
        <button onClick={sub} className='btn'>decrement</button>
        <button onClick={reset}  className='btn'>reset</button>
      </div>


    </>
};

export default UseStateCounter;
