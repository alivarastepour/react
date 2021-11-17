import React, {useReducer} from "react";
import reducerHook, {initState} from "./ReducerHook";


const Setup = () => {

    const [state, dispatch] = useReducer(reducerHook, initState);

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