import React from "react";
import useData from "./data";
import {Link} from "react-router-dom";


const App3 = () => {
    const data = useData();
    return <>
        {
            data && data.map(a => {
                return (
                    <div  key={a.id}>
                        <Link to={`/person/${a.id}`}><h3>{a.login}</h3></Link>
                    </div>

                )
            })
        }
    </>
}

export default App3;