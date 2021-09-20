import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const useTimer = (reset,ss) => {
  let [value,setValue] = useState(0);
  useEffect(()=>{
    if (reset){
      setValue(0);
      ss(true)
    }
    // setInterval(()=>setValue(++value), 1000);
  },[reset,[]])
  return value ;
}

const UseEffectBasics = () => {
  let [s,ss] = useState(false);
  let value = useTimer(s,ss);

  const reset = () => {
    // value = useTimer() ;
  }

  return <>

  <div>
    <h1>{value}</h1>
    <button onClick={()=>ss(true)} className='btn'>reset</button>
  </div>

  </>


};




export default UseEffectBasics;
