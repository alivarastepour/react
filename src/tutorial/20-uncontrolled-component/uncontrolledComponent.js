import React, {createRef} from "react";


let users = [{name:'ali',age:19}]

const Setup = () => {
  return <>
    <App/>
  </>
}
const App = () => {
    const reference = createRef();
    const reference1 = createRef();

    const myHandler = (e) => {
      e.preventDefault();
      console.log(reference.current.value);
      console.log(reference1.current.value);
      users = [...users, {name:reference.current.value, age:parseInt(reference1.current.value)}];
      // users.add({name:reference.current.value, age:reference1.current.value})
      console.log(users)
    }

    return <>
      <form onSubmit={(e) => myHandler(e)} className='form-control'>
        <div className='container'>
          <input name='alo' ref={reference} type="text" className='item'/>
          <input name='loa' ref={reference1} type="text" className='item'/>
          <button type='submit' className="btn">submit</button>
        </div>
      </form>
      {
        users.map(e => {
          return <div key={new Date().getMilliseconds()}>{e.name} is {e.age}</div> // this wont work because change in ref will not trigger rerender(uncontrolled component)
        })
      }

    </>
}

export default Setup;