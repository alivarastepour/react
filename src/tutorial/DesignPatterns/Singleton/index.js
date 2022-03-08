import sin from "./Singleton";

const Setup = () =>{
    console.log(sin.getCount());
    return <>
        <div>{sin.getCount()}</div>
        <div>
            <button className='btn' onClick={() => sin.add()}>add</button>
            <button className='btn' onClick={() => sin.sub()}>sub</button>
        </div>
    </>
}
// this pattern is not good(anti pattern)
// unexpected global behaviour
// not causing component to re render
export default Setup;