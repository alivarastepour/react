import React from "react";
import './styles.scss'
const Setup = ({handleCLick, value, setValue}) => {
    return <>
        <div className='holder'>
            <h4 className='header'>my calculator</h4>
            <input value={value} onChange={e => setValue(e.target.value)} autoFocus={true} onKeyDown={(e) => handleCLick(e)} className='GridItem form input' type="text"/>
            <div className='gridContainer'>
                <button  className='GridItem btn'>1</button>
                <button  className='GridItem btn'>2</button>
                <button  className='GridItem btn'>3</button>
                <button  className='GridItem btn increment'>+</button>
                <button  className='GridItem btn'>4</button>
                <button  className='GridItem btn'>5</button>
                <button  className='GridItem btn'>6</button>
                <button  className='GridItem btn'>-</button>
                <button  className='GridItem btn'>7</button>
                <button  className='GridItem btn'>8</button>
                <button  className='GridItem btn'>9</button>
                <button  className='GridItem btn'>*</button>
                <button  className='GridItem btn'>0</button>
                <button  className='GridItem btn'>(</button>
                <button  className='GridItem btn'>)</button>
                <button  className='GridItem btn'>^</button>
                <button  className='GridItem btn calculate'>=</button>
            </div>
        </div>
    </>
}

export default Setup;