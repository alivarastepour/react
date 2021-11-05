import React, {useState} from "react";
import {Profiler} from "react";
const Setup = () => {
    let [value, setValue] = useState(0)
    function onRenderCallback(
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
    ) {
        console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions)
    }
    return <>
        <Profiler id='a1a' onRender={onRenderCallback}>
            <div>
                <button onClick={() => setValue(++value)} className="btn">clicked for {value} {value === 0 ? '' : value > 1 ? 'times' : 'time'}</button>
            </div>

        </Profiler>

    </>


}



export default Setup;