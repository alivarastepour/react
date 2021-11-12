import React, {useState} from "react";

const Setup = () => {
    let [show, setShow] = useState(true)
    return <>
        <Button changeState={() => setShow(!show)} state={show ? 'hide' : 'show'}/>
        <Text current={show}/>
    </>
}

const Button = (props) => {

    return <>
        <button onClick={props.changeState} className="btn">{props.state}</button>
    </>
}

const Text = (props) => {
    return <>

        {
            props.current && <Details/>
        }

    </>
}

const Details = () => {
    return <>
        <h1>hello i am ali</h1>
    </>
}

export default Setup;