import React, {useState} from "react";
import {Wrapper} from "./styles";


const Setup = () => {

    const [dark, setDark] = useState(false);

    const themeLIGHT = {
        bgc: 'white',
        color: '#1c1c1c'
    }
    const themeDARK = {
        bgc: '#1c1c1c',
        color: 'white'
    }
    return <>
        <Wrapper color={dark ? themeDARK : themeLIGHT} >
            <div>
                hello world
            </div>
            <h3>
                hello class
            </h3>
        </Wrapper>
        <div>
            <label htmlFor="x">dark mode</label>
            <input id='x' value={dark} onChange={e=>setDark(e.target.checked)} type="checkbox" className="form"/>
        </div>
    </>
}
export default Setup