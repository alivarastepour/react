import React, { useState, useReducer } from 'react';
import { data } from '../../../data';
import {reducer} from "./reducer";


const defaultState = {
    people : []
}

const Index = () => {

    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [state, dispatch] = useReducer(reducer, defaultState)

    const submitHandler = (e) => {
        e.preventDefault();
        if (name && lastname){
            const item = {
                id : Math.random() * 1000,
                name : name,
                lastname : lastname
            }
            dispatch({type:'ADD_USER', payload : item});
        }


        setName('');
        setLastName('');
    }

    const removeItem = (name) => {
        dispatch({type:'REMOVE_USER', payload:name})
    }

    return <>
        <form onSubmit={submitHandler} className='form'>
            <div className='item' >
                <label htmlFor="x">name : </label>
                <input onChange={(e)=>{setName(e.target.value)}} value={name} id='x' type="text"/>
            </div>
            <div className='item'>
                <label htmlFor="y">last name : </label>
                <input onChange={(e)=>{setLastName(e.target.value)}} value={lastname} id='y' type="text"/>
            </div>
            <button type='submit'>add user</button>
        </form>
        {
            state.people.map((p)=>{
                return <>
                <div key={Math.random() * 1000} className='item'>
                    <p>name : {p.name}</p>
                    <p>lastName : {p.lastname}</p>
                    <button onClick={() => removeItem(p.id)} className='btn'>remove</button>
                </div>
                </>
            })
        }

    </>
}


























// const defaultState = {
//   people:[],
//   isModelOpen:false,
//   modelContent:''
// }
// const Index = () => {
//
//   const[state, dispatch] = useReducer(reducer,defaultState);
//
//   const [name, setName] = useState('')
//
//   const handler = (e) => {
//     e.preventDefault();
//     if (name){
//       const newItem = {id:Math.random() * 100, name}
//       dispatch({type:'ADD_ITEM', payload:newItem})
//       setName(' ')
//     }else{
//       dispatch({type:'NO_VALUE'})
//     }
//   }
//
//   const closeModal = () => {
//       dispatch({type:'CLOSE_MODAL'})
//   }
//
//   return <>
//
//     {state.isModelOpen && <Modal closeModal={closeModal} modelContent={state.modelContent}/>}
//     <form onSubmit={handler} className='form'>
//       <div>
//         <input value={name} onChange={(e)=>setName(e.target.value)} type="text"/>
//       </div>
//       <button type='submit'>add</button>
//     </form>
//     {
//       state.people.map((p)=>{
//         return <div key={p.id} className='item'>
//           <h4>{p.name}</h4>
//           <button onClick={()=> dispatch({type : 'REMOVE_ITEM', payload:p.id})}>remove</button>
//         </div>
//       })
//     }
//   </>;
// };

export default Index;
