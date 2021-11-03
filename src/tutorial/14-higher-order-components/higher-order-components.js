import React, {useState} from "react";

const S = (props) => {
    return <>
        {props.list.map(e => (<div>{e}</div>))}
    </>
}

const T = props => {
    return <>
        {props.list.map(e => (<span>{e}</span>))}
    </>
}


const x = (Component,list) => {
    return () => {
        const [a, b] = useState(list);
        return <>
            <Component list={a}/>
        </>
    }
}

const Ecomponent = x(S,['a','b','c'])
const Wcomponent = x(T,[1,2,3,4])

export default Wcomponent;