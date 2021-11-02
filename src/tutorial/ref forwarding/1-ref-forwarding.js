import React, {createRef, forwardRef} from "react";


const Setup = () => {
    const ref = createRef()
    console.log(ref)
    return <>
        <Sec ref={ref}>io</Sec>
    </>

}


const Sec = forwardRef((props,ref) => {
    return <>
        <button ref={ref} className="btn">{props.children}</button>
    </>
})

export default Setup;






