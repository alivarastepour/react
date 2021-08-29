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
        </article>
    )
}

export default Holder