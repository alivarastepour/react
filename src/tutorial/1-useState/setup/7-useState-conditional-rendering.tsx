import React, {useState} from "react";

const Setup = () => {
    let [value, setValue] = useState('')
    return <>
        <input className='form' value={value} placeholder='choose tom, dick or henry' onChange={e => setValue(e.target.value)} type="text"/>
        {
            value === 'tom' ? <Tom/> : value === 'dick' ? <Dick/> : value === 'henry' ? <Henry/> : <Error/>
        }
    </>
}

const Tom = () => {
    return <>

        <h1>tom rendered</h1>

    </>
}

const Dick = () => {
    return <>

        <h1>Dick rendered</h1>

    </>
}
const Henry = () => {
    return <>

        <h1>Henry rendered</h1>

    </>
}

const Error = () => {
    return <>
        <h1>Not Valid</h1>
    </>
}
export default Setup;