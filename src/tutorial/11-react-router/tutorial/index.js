import React from "react";
import {Link} from "react-router-dom";

const x = {
    display: 'block'
}
const Setup = () => {
    return <>
        <h2>hello world</h2>
        <Link style={x} to='/link1'>link1</Link>
        <Link style={x}  to='/link2'>link2</Link>
    </>
}
export default Setup ;