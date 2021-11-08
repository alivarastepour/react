// @flow
import React, {useState} from "react";

const users = ["ali", 'mamad', 'taghi'];
// const ID = [1,2,4,5,6] ;

const App = ({data, name} ) => {
    return <>
            <div className='users'>{name}</div>
            <div>
                {
                    data.map(a => {
                        return <h1>{a}</h1>
                    })
                }
            </div>
    </>
}

const Setup = () => {
    const [a, b] = useState(0)
    const x = (s, t) => {
        t(++s)
    }
    return <>

        <App data={users} name='ID'/>
        {/*<App data={ID} name='users'/>*/}
        <button onClick={() => x(a, b)} className='btn'>click me {a}</button>

    </>
}

export default Setup;