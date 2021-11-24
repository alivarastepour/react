import React from "react";
import {useParams} from "react-router-dom";
import useData from "./data";


const Individual = () => {
    const data = useData();
    const person = useParams();
    return <>
        <div>
            <h3>{
                data.map(a => {
                    if (a.id === parseInt(person.id))
                        return <div key={a.id}>
                            <h3>{a.id } : {a.login}</h3>
                        </div>
                })
            }</h3>
        </div>
    </>
}
export default Individual;