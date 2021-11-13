import React, { useState, useEffect } from 'react';

const Setup = () => {
  let [state, setState] = useState(0);
  useEffect(() => {
    console.log('here')
    document.title = state
  },[state])
  return <>
    <button className='btn' onClick={() => setState(++state)}>click me</button>
    <h3>the value is {state}</h3>
  </>
}


export default Setup;
