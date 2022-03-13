import {createContext, useContext, useState} from "react";

const context = createContext();
const Test = (props) => {
    const [state,setState] = useState('salam');
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