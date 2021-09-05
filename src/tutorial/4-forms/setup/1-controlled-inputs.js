import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const handleChange = (e) => {/*e is the event object. preventDefault stops browser from reloading*/
    e.preventDefault()

  }

  return <>
    <article>
      <form className='form' onSubmit={handleChange}>{/*attention here as well*/}
        <div className='form-control'>
          <label htmlFor="firstName">name : </label>
          <input type="text" name="firstName" id="firstName"/>
        </div>
        <div className='form-control'>
          <label htmlFor="email">email : </label>
          <input type="text" name="email" id="email"/>
        </div>
        <button type='submit'>add person</button>
        {/*<button type='submit' onClick={handleChange}>add person</button>*/} {/*you can submit a form like this. remember that type should be submit*/}
      </form>
    </article>
  </>;
};

export default ControlledInputs;
