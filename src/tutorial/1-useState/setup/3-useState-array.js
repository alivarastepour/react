import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const newArray = [
    {id:1, name:'mmd'},
    {id:2, name:'reza'},
    {id:3, name:'ali'},
    {id:4, name:'ho3ein'},
  ]
  function func(id){
    const x = people.filter((c) => c.id !== id)
    setPeople(x)
  }

  const [people, setPeople] = useState(data)
  return <>
    {
     people.map((person) =>{
       const {id, name} = person
       return <div key={id} className='item'>
         <h4>{name}</h4>
         <button className='btn' onClick={() => func(id)}>remove</button>
       </div>
     })
    }
    <button className='btn' onClick={() => setPeople(newArray)}>change</button>
  </>;
};

export default UseStateArray;
//to clear the list we just use []
