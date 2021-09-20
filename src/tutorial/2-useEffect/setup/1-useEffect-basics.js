import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [state,setState] = useState(true);
  const [value,setValue] = useState('');



  useEffect(()=>{
    if (state){
      setValue('salam');
    }else{
      setValue('oodafes');
    }
  },[state])

  return <>

    <h1>{value}</h1>
    <button onClick={()=>setState(!state)} className="btn">change state</button>

  </>
};




export default UseEffectBasics;
