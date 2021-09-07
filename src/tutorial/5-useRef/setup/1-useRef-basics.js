import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const ref = useRef(null)
  const hs = (e) => {
    e.preventDefault();
    if (ref.current.valueOf().toString() === 'close')
      window.close()
  }
  return <>

    <form onSubmit={hs} className="form">
      <input ref={ref} type="text"/>{/*ref attribute is for all tags*/}
      <button type='submit' className="btn">submit</button>
    </form>

  </>;
};

export default UseRefBasics;
