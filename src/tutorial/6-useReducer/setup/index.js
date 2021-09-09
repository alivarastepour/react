import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import {reducer} from "./reducer";
// import {reducer} from "../final/reducer";
// reducer function










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

  const closeModal = () => {
      dispatch({type:'CLOSE_MODAL'})
  }

  return <>

    {state.isModelOpen && <Modal closeModal={closeModal} modelContent={state.modelContent}/>}
    <form onSubmit={handler} className='form'>
      <div>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
      </div>
      <button type='submit'>add</button>
    </form>
    {
      state.people.map((p)=>{
        return <div key={p.id} className='item'>
          <h4>{p.name}</h4>
          <button onClick={()=> dispatch({type : 'REMOVE_ITEM', payload:p.id})}>remove</button>
        </div>
      })
    }
  </>;
};

export default Index;
