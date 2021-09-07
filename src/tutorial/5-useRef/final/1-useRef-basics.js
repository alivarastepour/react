import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
    const text = useRef();
    useEffect(() => {
      text.current.focus();
    })
  return (
    <>
      <input ref={text} type="text"/>
    </>
  );
};

export default UseRefBasics;
