import React from "react";
import {Link, Outlet} from "react-router-dom";

const x = {
    display: 'block'
}
const Setup = () => {
    return <>
        <h2>hello world</h2>
        <nav>
            <h2><Link style={x} to='/link1'>link1</Link></h2>
            <h2><Link style={x} to='/link2'>link2</Link></h2>
        </nav>
        <Outlet/>
    </>
}
export default Setup ;