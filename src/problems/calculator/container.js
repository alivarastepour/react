import React from "react";
import './styles.scss'
const Setup = ({handleCLick, value, setValue, calculate}) => {
    return <>
        <div className='holder'>
            <h4 className='header'>my calculator</h4>
            <input value={value} onChange={e => setValue(e.target.value)} autoFocus={true} onKeyDown={(e) => handleCLick(e)} className='GridItem form input' type="text"/>
            <div className='gridContainer'>
                <button onClick={() => setValue(prev => prev+1)}  className='GridItem btn'>1</button>
                <button onClick={() => setValue(prev => prev+2)}  className='GridItem btn'>2</button>
                <button onClick={() => setValue(prev => prev+3)}  className='GridItem btn'>3</button>
                <button onClick={() => setValue(prev => prev+'+')}  className='GridItem btn increment'>+</button>
                <button onClick={() => setValue(prev => prev+4)}  className='GridItem btn'>4</button>
                <button onClick={() => setValue(prev => prev+5)}  className='GridItem btn'>5</button>
                <button onClick={() => setValue(prev => prev+6)}  className='GridItem btn'>6</button>
                <button onClick={() => setValue(prev => prev+'-')}  className='GridItem btn'>-</button>
                <button onClick={() => setValue(prev => prev+7)}  className='GridItem btn'>7</button>
                <button onClick={() => setValue(prev => prev+8)}  className='GridItem btn'>8</button>
                <button onClick={() => setValue(prev => prev+9)}  className='GridItem btn'>9</button>
                <button onClick={() => setValue(prev => prev+'*')}  className='GridItem btn'>*</button>
                <button onClick={() => setValue(prev => prev+0)}  className='GridItem btn'>0</button>
                <button onClick={() => setValue(prev => prev+'^')}  className='GridItem btn'>^</button>
                <button onClick={() => calculate()}  className='GridItem btn calculate'>=</button>
            </div>
        </div>
    </>
}

export default Setup;