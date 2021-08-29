import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import {list} from "./list";


const Main = () => {
  return (
      <section className={'keeper'}>
          {list.map((x) => {
              return <Holder key={x.id} {...x}></Holder>
          })}
      </section>
  )
}

const Holder = (props) => {
    const { img , value } = props
    const func = (x) => {
      alert(x)
    }
  return (
      <article>
      <img className={'ig'} src={img} alt=""/>
    <h1>
        {value}
    </h1>
          <button onClick={() => func('salam')}>this has to wait for click</button>
      </article>
  )
}
ReactDom.render(<Main/> , document.getElementById('root'))