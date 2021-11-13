import React, {useEffect, useState} from "react";

const array = [
    { key: '1', type: 'planet', value: 'Tatooine' },
    { key: '2', type: 'planet', value: 'Alderaan' },
    { key: '3', type: 'starship', value: 'Death Star' },
    { key: '4', type: 'starship', value: 'CR90 corvette' },
    { key: '5', type: 'starship', value: 'Star Destroyer' },
    { key: '6', type: 'person', value: 'Luke Skywalker' },
    { key: '7', type: 'person', value: 'Darth Vader' },
    { key: '8', type: 'person', value: 'Leia Organa' },
];

let available = []


const Setup = () => {
    const [state, setState] = useState('');

    // useEffect(() => {
        available = array.filter(a => a.value.startsWith(state));
    // },[state])

    const show = state ? available : array;

    return <>
        <input value={state} onChange={e => setState(e.target.value)} type="text" className="form"/>
        {show.map(a => {
            return <Data id={a.key} key={parseInt(a.key)} value={a.value} type={a.type}/>
        })}
    </>
}

const Data = (props) => {
    return <>
    <div>
        <p>{props.value}</p>
    </div>

    </>
}



export default Setup;