import React, {useState} from "react";
import internal from "stream";

const Setup = () => {
    type a = {
        name:string,
        age:number
    }
    interface b {
        name:string,
        age:number
    }

    interface c {
        readonly location:string
    }

    interface d {
        [index : number] : number;
        length:number
        age:number
    }

    interface e {
        name:string,
        age:number
    }
    interface f extends e {
        location:string
    }

    interface g {
        age:number
    }
    interface h {
        name:string
    }
    type i = g & h

    const o6:i = {name:'ali', age:123}

    const o5:f = {name:'kolsoom', age:14, location:'isf'}

    let o4:d = {length:12, age:14}
    console.log(o4['age'])
    o4['age'] = 1333 // updating prev properties
    console.log(o4)
    o4[1] = 12 //adding new properties
    function f(person: {name:string, age:number}):number {
        return person.age;
    }
    function f1(person:a): number{
        return person.age;
    }
    function f2(person:b):number{
        return person.age;
    }

    function f3(person: {age?:number, name:string}) : string{
        return person.name + ' is ' + person.age;
    }
    const [error, setError] = useState('');
    const o1:a = {name:'mamad', age:13};
    const o2:b = {name:'zohre', age:53};
    const o3:c = {location:'foolad shahr'}
    // try {
    //     o3.location = 'ABCD';
    // }catch (E:any){
    //     setError(E.stack)
    // }

    return <>

        <h4>objects can be defined anonymously, via interface or by type alias</h4>
        <h5>{f({name:'ali', age:12})}</h5>
        <h5>{f1(o1)}</h5>
        <h5>{f2(o2)}</h5>
        <h4>object properties can be optional</h4>
        <p>both parameters :
            {f3({name:"reza", age:43})}
        </p>
        <p>
            only name parameter :
            {f3({name: 'hadi'})}
        </p>
        <p>trying to set a value to readonly property : </p>
        <div>{error} it should be a error but it aint because assigning new value to read only property causes compile error; suppressing it with ts-ignore either wont throw exceptions</div>


    </>

}
export default Setup;