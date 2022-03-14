import {createContext, useContext, useEffect, useState} from "react";

const context = createContext();
const Test = (props) => {
    const [state,setState] = useState('salam');
    useEffect(() => {
        const t = setTimeout(() => setState('aaaa'), 1000)
        return () => clearTimeout(t);
    },[])
    return <>
        <context.Provider value={state}>
            {props.children}
        </context.Provider>
    </>
}

const Button = () => {
    const t = useContext(context);
    return <button>{t}</button>
}
Test.Button = Button;

export default Test;