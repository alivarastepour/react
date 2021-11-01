import React, {createContext, useContext} from "react";


const myContext = createContext("salam");

const App = () => {
    return (
        <myContext.Provider value='salam'>
            <User/>
        </myContext.Provider>
    )
}

const User = () => {
    console.log(myContext)
    const value = useContext(myContext)
    return (
        <h1>{value}</h1>
    )
}

export default App;