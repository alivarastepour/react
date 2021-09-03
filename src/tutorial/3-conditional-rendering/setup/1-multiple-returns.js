import React, { useState } from 'react';
const MultipleReturns = () => {
  const [value, setValue] = useState('')
  return (
      <div>
        <h1>{value}</h1>
        <input className='form' placeholder='type to see the result' onChange={(e)=> setValue(e.target.value)} type="text"/>
      </div>
  )

};

export default MultipleReturns;
