import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    // console.log('aaaa');
    if (value === 0)
      document.title = `No New Messages`
    else if (value === 1)
      document.title = `1 New Message`
    else
      document.title = `${value} New Messages`
  }, [value])/*the second parameter is a dependency list, if u pass empty array it will just run on init\
  if u pass different values, it will run everytime one of this value change*/

  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={() => setValue(value + 1)}>click me</button>

  </>;
};

export default UseEffectBasics;
