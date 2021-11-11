import React, {useState} from "react";

const Setup = () => {
  return <>
    <h1>events - clipboard events</h1>
    <br/>
    <br/>
    <br/>
    <div>
      <Text/>
    </div>
  </>
}

const Text = () => {
  const [state, setState] = useState('default value');

  const myFunc = () => {
    navigator.clipboard.writeText(document.getElementById('idx').innerHTML);
  }
  const myFunc1 =  async () => {
    let text = await  navigator.clipboard.readText();
    setState(text);
  }

  return <>

    <h3>copy the text below</h3>
    <div id='idx'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, provident?</div>
    <button onClick={() => myFunc()} className="btn">copy</button>
    <br/>
    <br/>
    <br/>
    <input autoFocus={true} onChange={e => setState(e.target.value)} onPaste={() =>myFunc1()} value={state} className='form' type="text"/>
    <div>paste it in the above input field</div>
  </>
}


export default Setup