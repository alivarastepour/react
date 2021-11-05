import React, {useEffect} from "react";
import {createPortal} from "react-dom";

const Setup = (props) => {
    const mount = document.getElementById('portal-root');
    const element = document.createElement('div');


    useEffect(() => {
        mount.appendChild(element);
        return () => mount.removeChild(element);
    },[element, mount])

    return createPortal(props.children, element)
}



export default Setup;