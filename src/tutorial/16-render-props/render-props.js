import React from "react";

const Setup = () => {
    return (
        <App/>
    )
}

const App = () => {
    return (
        <API render={() => <div>FUCK</div>}/>
    )
}
const API = (props) => {
    return <>
        <div>{props.render()}</div>
    </>
}

export default Setup