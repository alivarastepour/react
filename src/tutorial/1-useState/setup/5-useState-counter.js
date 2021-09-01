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

  const complexIncrease = () => {
    setTimeout(() =>{
      // setValue(value + 1) wont work
      // setValue(value++) will work
      setValue(++value) //will work
    }, 2000)
  }

  const complexIncrease1 = () => {
    setTimeout(() => {
      setValue((prevState => {
        return prevState + 1
      }))
    },2000)
  }

  let [value, setValue] = useState(0)
  return <>
    <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
      <button className='btn' onClick={() => inc()}>+</button>
      <button className='btn' onClick={() => de()}>-</button>
      <button className='btn' onClick={() => re()}>reset</button>
      <h2>complex counter</h2>
      <button className='btn' onClick={()=> complexIncrease()}>increase after two seconds</button>
      {/*<button className='btn' onClick={()=> complexIncrease1()}>increase after two seconds</button> /!*more complex ex*!/*/}
      <h1>{value}</h1>
    </section>
  </>;
};

export default UseStateCounter;
