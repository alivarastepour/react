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
    return (
        <myContext.Consumer>
            {value => <h1>{value}</h1>}
        </myContext.Consumer>
    )
}

export default App;