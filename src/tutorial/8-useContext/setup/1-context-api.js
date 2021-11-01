import React, {createContext, useContext} from "react";


const myContext = createContext("salam");

const App = () => {
    return (
        <myContext.Provider value='salamm'>
            <User/>
        </myContext.Provider>
    )
}

const User = () => {
    return (
        <Avatar/>
    )
}

const Avatar = () => {
    const value = useContext(myContext);
    return (
        <h1>{value}</h1>
    )
}


export default App;