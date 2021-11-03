import React, {createRef, forwardRef, useState} from "react";


const Setup = () => {
    const ref = createRef();
    const [val,setVal] = useState();
    console.log(ref)
    return (
        <Sec ref={ref}>{val}</Sec>
        )
}

const Sec = forwardRef((props,ref) => {
    return (
        <button ref={ref} className='btn'>{props.children}</button>
    )
})

export default Setup ;