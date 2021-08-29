import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import {list} from "./list"; /*this one is a normal export import so the names have to match*/
import Holder from "./Holder";/*this is a default import and names dont have to match*/

const Main = () => {
  return (
      <section className={'keeper'}>
          {list.map((x) => {
              return <Holder key={x.id} {...x}></Holder>
          })}
      </section>
  )
}
ReactDom.render(<Main/> , document.getElementById('root'))