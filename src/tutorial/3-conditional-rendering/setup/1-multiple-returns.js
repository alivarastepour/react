import React, { useState } from 'react';
const MultipleReturns = () => {
  const [value, setValue] = useState('')
  return (
      <div>
        <h1>{value}</h1>
      </div>
  )

};

export default MultipleReturns;
