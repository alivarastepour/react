import React, {useState} from "react";

const set = () =>{
    // triggers error -> hooks must be called inside function components or custom hooks
    const [wrong, setWrong] = useState(12);
    return wrong;
}

const Setup = () => {
    // triggers error - > hooks must be called at top level
    for (let i = 0; i < 12; i++) {
        var [temp, setTemp] = useState();
        setTemp(i);
    }
    return <>
        <h1>{temp}</h1>
        <h1>{set()}</h1>
    </>
}
export default Setup;