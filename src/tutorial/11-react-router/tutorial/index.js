import React from "react";
import {Link, Outlet} from "react-router-dom";

const x = {
    display: 'block'
}
const Setup = () => {
    return <>
        <nav>
            <h4><Link style={x} to='/'>homepage</Link></h4>
            <h4><Link style={x} to='/link1'>link1</Link></h4>
            <h4><Link style={x} to='/link2'>link2</Link></h4>
            <h4><Link style={x} to='/link3'>link3</Link></h4>
        </nav>
        <Outlet/>

    </>
}
export default Setup ;