import React from "react";
import {Wrapper, Details} from "./styles";


const Setup = () => {
    return <>
        <Wrapper alert>
            hello World
            <div>im a div</div>
            <button className="btn">im a button</button>
        </Wrapper>
        <Details>
            i have inherited my styles from Wrapper Component
            <p>welcome</p>
        </Details>

    </>
}
export default Setup