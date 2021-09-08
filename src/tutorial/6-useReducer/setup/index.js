import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// import {reducer} from "../final/reducer";
// reducer function




const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM'){
    const newPeople = [...state.people,action.payload]
    return {...state,people: newPeople,isModelOpen: true,modalContent: 'item added'}
  }
  if (action.type === 'NO_VALUE'){
    return {state,isModelOpen: true,modelContent: 'enter value'}
  }
}





const defaultState = {
  people:[],
  isModelOpen:false,
  modelContent:''
}





const Index = () => {

  const[state, dispatch] = useReducer(reducer,defaultState);

  const [name, setName] = useState('')

  const handler = (e) => {
    e.preventDefault();
    if (name){
      const newItem = {id:Math.random() * 100, name}
      dispatch({type:'ADD_ITEM', payload:newItem})
      setName(' ')
    }else{
      dispatch({type:'NO_VALUE'})
    }
  }



  return <>

    {state.isModelOpen && <Modal modelContent={state.modelContent}/>}
    <form onSubmit={handler} className='form'>
      <div>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
      </div>
      <button type='submit'>add</button>
    </form>
    {
      state.people.map((p)=>{
        return <div key={p.id}>
          <h4>{p.name}</h4>
        </div>
      })
    }
  </>;
};

export default Index;
