import React, {useState} from "react";

const Setup = () => {
    let [value, setValue] = useState(false);
    return <>
        <div>toggle button to change the text</div>
        <input  onChange={(e) => setValue(e.target.checked)} className='btn' type="checkbox"/>
        {
            value ? <h2>hello world</h2> : <h2>bye bye world</h2>
        }
    </>

}
export default Setup;