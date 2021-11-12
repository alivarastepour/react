import React, {Fragment} from "react";


const Setup = () => {

    function f<T>(obj: T[]): T[] {
        return new Array<T>().concat(obj)
    }



    return <>
            <div className='item'>- calling function with generic type number</div>
            {
                f<number>([1,2,3,4]).map(num => <h6 key={num} className='container'>this is the returned number : {num}</h6>)
            }
            <div className='item'>- calling function with generic type string</div>
            {
                f<string>(['a', 'b', 'c', 'd']).map(num => <h6 className='container' key={num}>this is the returned string : {num}</h6>)
            }
    </>
}

export default Setup;