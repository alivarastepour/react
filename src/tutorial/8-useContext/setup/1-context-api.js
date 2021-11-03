import React, {createContext, useContext, useState} from "react";


// const myContext = createContext("salam");
//
// const App = () => {
//     const [v,s] = useState();
//     return <>
//         <input value={v} onChange={(e) => s(e.target.value)} type="text" className="form"/>
//         <myContext.Provider value={v}>
//             <User/>
//         </myContext.Provider>
//     </>
// }
//
// const User = () => {
//     return (
//         <Avatar/>
//     )
// }
//
// const Avatar = () => {
//     const value = useContext(myContext);
//     return (
//         <h1>{value}</h1>
//     )
// }

function App () {
    const [s,v] = useState();
    return <>

        <input value={s} onChange={(e)=>v(e.target.value)} type="text" className="form"/>
        <User text={s}/>

    </>

}
function User (props) {
    return (
        <Avatar text={props.text} />
    )
}
function Avatar (props) {
    return (
        <h1>{props.text}</h1>
    )
}


export default App;