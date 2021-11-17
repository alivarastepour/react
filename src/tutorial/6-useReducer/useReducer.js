import React, {useReducer} from "react";



const Setup = () => {

    const initState = {
        name:'ali',
        age:19,
        address:'22 roadIsland'
    }

    const reducer = (state, action) => {
        let newState ;
        switch (action.type) {
            case 'ageAdd':
                newState = {...state, age: state.age+1};
                break;
            case 'ageRem':
                newState = {...state, age: state.age-1};
                break;
            case 'changeAddress':
                newState = {...state, address: action.payload};
                break;
        }
        return newState ;
    }

    const [state, dispatch] = useReducer(reducer, initState);

    return <>

        <div>hello world</div>
        <div>
            <button onClick={() => dispatch({type: 'ageAdd'})} className="btn">increment</button>
            <button onClick={() => dispatch({type: 'ageRem'})} className="btn">decrement</button>
            <p>current age : {state.age}</p>
            <input onChange={(e) => dispatch({type:'changeAddress', payload:e.target.value})} type="text"/>
            <p>current address : {state.address}</p>
        </div>
    </>
}

export default Setup;