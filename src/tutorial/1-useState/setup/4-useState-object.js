import React, { useState } from 'react';

const UseStateObject = () => {
  function func() {
    setPerson({...person, msg: 'i changed'})
  }

  const [person, setPerson] = useState(
      {
        name: 'ali',
        age: '19',
        msg: 'OOOO yeah'
      }
  )
  return <>

      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.msg}</h3>
    <button className='btn' onClick={() => func()}>click me!</button>


  </>;
};

export default UseStateObject;
