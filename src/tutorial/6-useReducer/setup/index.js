import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {

  const [people, setPeople] = useState(data);
  const [show,setShow] = useState(false)
  const [name, setName] = useState('')

  const handler = (e) => {
    e.preventDefault();
    if (name){
      setShow(true)
      setPeople([...people,{id: Math.random() * 100 , name}])
      setName('')
    }else{
      setShow(true)
    }
  }

  return <>

    {show && <Modal/>}
    <form onSubmit={handler} className='form'>
      <div>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
      </div>
      <button type='submit'>add</button>
    </form>
    {
      people.map((p)=>{
        return <div key={p.id}>
          <h4>{p.name}</h4>
        </div>
      })
    }
  </>;
};

export default Index;
