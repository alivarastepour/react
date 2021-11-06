import React, {useState} from "react";

const Setup = () => {
    return (
        <App/>
    )
}

const App = () => {
    return (
        <API value='me' render1={() => <h1>FUCK</h1>} render={() => <div>FUCK</div>}/>
    )
}
const API = (props) => {
    const [state,setState] = useState(false)
    return <>
        <div>{state ? props.render() : props.render1()}<h1>{props.value}</h1></div>
    </>
}

export default Setup