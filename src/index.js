import React from 'react';
import ReactDom from 'react-dom';
import './index.css'


const list = [

/*each child in a list should have a unique 'key' prop*/
{
    id : 1 ,
    value : 'Publication Manual of the American Psychological Association',
    img : 'https://images-na.ssl-images-amazon.com/images/I/71tqt4VL%2BdS._AC_UL200_SR200,200_.jpg'
}
,
{
    id : 2 ,
    value : 'It Ends with Us: A Novel',
    img : 'https://images-na.ssl-images-amazon.com/images/I/71lk10uajiL._AC_UL200_SR200,200_.jpg'
}
,
{
    id : 3 ,

    value : 'Our Class is a Family',
    img : 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg'
}
,
{
    id : 4 ,
    value : 'American Marxism',
    img : 'https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL200_SR200,200_.jpg'
}
]
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
  return (
      <article>
      <img className={'ig'} src={img} alt=""/>
    <h1>
        {value}
    </h1>
      </article>
  )
}
ReactDom.render(<Main/> , document.getElementById('root'))