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

    function f3(person: {age?:number, name:string}) : string{
        return person.name + ' is ' + person.age;
    }

    const o1:a = {name:'mamad', age:13};
    const o2:b = {name:'zohre', age:53};

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
    </>

}
export default Setup;