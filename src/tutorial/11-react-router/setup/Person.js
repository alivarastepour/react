import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
    const [name, setName] = useState('name')
    const {id} = useParams();
    useEffect(()=>{
        const np = data.find((p)=>p.id === parseInt(id));
        setName(np.name);
    },[])
  return (
    <div>
      <h1>{name}</h1>
        <Link to='/people'>People</Link>
    </div>
  );
};

export default Person;
