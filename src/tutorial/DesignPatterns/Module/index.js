// import {add, sayBye, sayHi} from './customModule'
import * as module from './customModule'
const Setup = () => {
    return <>
        {
            // add(1,5)
            module.add(2,3)
        }
        {
            <p>
                {
                    module.sayHi()
                    // sayHi()
                }
            </p>
        }
        <span>
            {
                module.default()
            }
        </span>
        <div>
            {
                module.sayBye()
                // sayBye()
            }
        </div>
    </>
}
export default Setup;