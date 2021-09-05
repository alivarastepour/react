import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  const handleSubmit = (e) => {/*e is the event object. preventDefault stops browser from reloading*/
    e.preventDefault();
    if (firstName && email){
      // const person = {firstName:firstName, email : email}
      // const person = {firstName, email}this line is similar to the above one
      const person = {id: new Date().getTime().toString(),firstName, email};
      // setPeople((people) => {
      //   return [...people, person];
      // });
      setPeople((people)=>{
        return [...people, person];
      });
      setEmail('');
      setFirstName('');
    }

  }

  return <>
    <article>
      <form className='form' onSubmit={handleSubmit}>{/*attention here as well*/}
        <div className='form-control'>
          <label htmlFor="firstName">name : </label>
          <input type="text" name="firstName" id="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
        </div>
        <div className='form-control'>
          <label htmlFor="email">email : </label>
          <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <button type='submit'>add person</button>
        {/*<button type='submit' onClick={handleChange}>add person</button>*/} {/*you can submit a form like this. remember that type should be submit*/}
      </form>
      {
        people.map((x) => {
          const [id, name, email ] = x ;
          return (
              <div className='item' key={id}>
                <h1>{name}</h1>
                <h2>{email}</h2>
              </div>

          )
        })
      }
    </article>



  </>;
};

export default ControlledInputs;
