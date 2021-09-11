import React, { useState } from 'react';
import {data} from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {

  const [people, setPeople] = useState(data);

  const removePerson = id => {
    setPeople((people)=>{
      return people.filter((p) => p.id !== id);
    });
  }


  return <section>
    <h3>prop drilling</h3>
    <List removePerson={removePerson} people={people}/>
  </section>;
};

const List = ({people,removePerson}) => {
  return <>
    {
      people.map((p)=>{
        return <SinglePerson {...p} removePerson={removePerson} key={p.id}/>
      })
    }
  </>
}

const SinglePerson = ({id, name, removePerson}) => {
  return <div className='item'>
    <h4>{name}</h4>
    <button onClick={() => removePerson(id)}>remove</button>
  </div>
}


export default PropDrilling;
