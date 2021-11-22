import React, {useRef} from "react";

const Setup = () => {
    const value = useRef(0);
    console.log(value)
    return <>
        <h3>sample useRef</h3>
        <button onClick={() => {
            value.current++
            console.log(value.current)
        } } className="btn">click to increment</button>
    </>
}
export default Setup;