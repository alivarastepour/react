// import {add, sayBye, sayHi} from './customModule'
// import * as module from './customModule'
const Setup = () => {
    const loadModule = (param, val1, val2) => {
        import("./customModule").then(a => {
            if (param === 'add')
                a.add(val1,val2);
        })
    }
    return <>
        {
            loadModule('add', 1, 2)
            // add(1,5)
            // module.add(2,3)
        }
        {
            <p>
                {
                    // module.sayHi()
                    // sayHi()
                }
            </p>
        }
        <span>
            {
                // module.default()
            }
        </span>
        <div>
            {
                // module.sayBye()
                // sayBye()
            }
        </div>
    </>
}
export default Setup;