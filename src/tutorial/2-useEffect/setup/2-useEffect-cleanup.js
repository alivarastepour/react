import React, {useEffect, useState} from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  // const [size, setSize] = useState(window.innerWidth)
  // console.log(size)

  // const checkSize = () => {
  //   setSize(window.innerWidth)
  // }

  const askName = () => {
    // console.log('salam')
    // const x =  prompt('enter ur name')
    // document.getElementById('oi').innerHTML = 'hi ' + x
    const temp = prompt('what is ur name')
    if (temp === ''){
      setValue('hi unknown !')
      setValue1('add your Name !')
    }
  else{
      setValue('hello ' + temp + " ! ")
      setValue1('change ur name !')
    }
  }
  // useEffect(() => {
  //   window.addEventListener('resize', checkSize)
  //   return () => {
  //     window.removeEventListener('resize', checkSize)
  //   }
  // })

  const [value, setValue] = useState('hi unknown !')
  const [value1, setValue1] = useState('add your Name !')


  // useEffect(() => {
  //   window.addEventListener('load', askName);
  // },)


  return <>

    <h1 id='oi'>{value}</h1>
    {/*<h2>{size} px</h2>*/}
    {/*<input id='o' type="text" placeholder='enter ur name'/>*/}
    {/*<input onSubmit={() => askName()} type="button" placeholder='enter'/>*/}
  <button className='btn' onClick={() => askName()}>{value1}</button>

  </>;
};

export default UseEffectCleanup;
