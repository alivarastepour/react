import React, {useEffect, useState} from "react";
import {createPortal} from "react-dom";

const Setup = (props) => {
    const [value, setValue] = useState()
    const elements =
        <div>
            <input className='form' value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
            <div className='modal'>{value}</div>
        </div>
    return createPortal(elements, document.querySelector('#portal-root'))
}



export default Setup;