import React, {useEffect, useReducer} from "react";
import reducer,{initState} from "./reducer-stopwatch";

const Setup = () => {


    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {
        if (state.start){
            const i = setInterval(() => dispatch({type: 'add'}), 1000);
            return () => clearInterval(i);
        }
    })

    return <>

    <div>
        <h2>{state.counter}</h2>
        <button onClick={() => dispatch({type:'start'})} className="btn">start/resume</button>
        <button onClick={() => dispatch({type: 'reset'})} className="btn">reset</button>
        <button onClick={() => dispatch({type: 'stop'})} className="btn">stop</button>

    </div>
    </>
}
export default Setup;