import React from "react";
import useData from "./data";


const App3 = () => {
    return <>
        {
            useData().map(a => {
                return <h3 key={a.id}>{a.login}</h3>
            })
        }
    </>
}

export default App3;