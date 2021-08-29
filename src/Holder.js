import React from "react";

const Holder = (props) => {
    const { img , value } = props
    const func = (x) => {
        alert(x)
    }
    return (
        <article>
            <img className={'ig'} src={img} alt=""/>
            <h1>
                {value}
            </h1>
            <button onClick={() => func('salam')}>this has to wait for click</button>
        </article>
    )
}

export default Holder