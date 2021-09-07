import React, {useEffect, useRef, useState} from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
    const [users, setUsers] = useState([])//array of users
    const [value, setValue] = useState('')// initial state = '' is important
    const [add,setAdd] = useState(false)//displays 'item added' or hides it
    const [remove,setRemove] = useState(false)//displays 'item removed' or hides it
    const [valid,setValid] = useState(true)//displays 'please enter value' or hides it
    const addUser = () => {
        if (value === ''){
            setValid(false)
            return
        }
        setValid(true)
        setUsers([...users,value])//adding a single value to a list
        setValue('')//clearing input
        setAdd(true)
        setTimeout(()=>setAdd(false),2000)
    }
    const change = (e) => {
        // e.preventDefault();
        // use ??
        setValue(e.target.value) //to have the current value
    }
    const rem = (r) => {
      const newUsers = users.filter((x) => x !== r);/*removes the given user*/
      setUsers(newUsers);
      setRemove(true);
      setTimeout(()=>setRemove(false),2000);
    }

    return <>
            <div className={add ? 'item' : 'temp'}>item added</div>
            <div className={remove ? 'item' : 'temp'}>item removed</div>
            <div className={!valid ? 'item': 'temp'}>please enter a value</div>
            <input value={value} onChange={(e)=>{change(e)}} className='form' type="text"/>
            <button onClick={() => addUser()} type='button' className='btn'>add user</button>
            {
                users.map((x)=>{
                    return(
                        <div className='item' key={Math.random() * 100}>
                            <p>{x}</p>
                            <button onClick={()=>rem(x)}  className='btn'>remove</button>
                        </div>
                    )
                })
            }
    </>
};

export default UseRefBasics;
