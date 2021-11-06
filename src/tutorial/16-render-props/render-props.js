import React, {useState} from "react";

const Setup = () => {
    return (
        <App/>
    )
}

const App = () => {
    return (
        <API value='me' render1={() => <OtherComponent/>} render={() => <div>FUCK</div>}/>
    )
}
const API = (props) => {
    const [state,setState] = useState(false)
    return <>
        <div>{state ? props.render() : props.render1()}<h1>{props.value}</h1></div>
    </>
}

const OtherComponent = ( )=> {
    return <h2>Fuck</h2>
}

export default Setup