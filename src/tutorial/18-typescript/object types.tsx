import React from "react";

const Setup = () => {
    type a = {
        name:string,
        age:number
    }
    interface b {
        name:string,
        age:number
    }
    function f(person: {name:string, age:number}):number {
        return person.age;
    }
    function f1(person:a): number{
        return person.age;
    }
    function f2(person:b):number{
        return person.age;
    }

    const o1:a = {name:'mamad', age:13};
    const o2:b = {name:'zohre', age:53};

    return <>

        <h4>objects can be defined anonymously, via interface or by type alias</h4>
        <h5>{f({name:'ali', age:12})}</h5>
        <h5>{f1(o1)}</h5>
        <h5>{f2(o2)}</h5>
    </>

}
export default Setup;