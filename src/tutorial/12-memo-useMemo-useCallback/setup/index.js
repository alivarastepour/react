import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'
import {data} from "../../../data";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

// every time props or state changes, component re-renders
const calculateMostExpensive = data => {
    console.log('12')
    return data.reduce((t,i)=>{
        const price = i.fields.price;
        if (price >= t)
            t = price
        return t ;
    },0)/100;
}
const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0);
  const [cart,setCart] = useState(0);

  const addToCart = useCallback(() => {
      setCart(cart + 1);
  },[cart])

    const me = useMemo(()=>calculateMostExpensive(products),[products])

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
        <h1>cart : {cart}</h1>
        <h1>most expensive : ${me}</h1>
      <BigList products={products} addToCart = {addToCart} />
    </>
  )
}



const BigList = React.memo(({ products, addToCart }) => {
    console.log(1)
  return (
    <section className='products'>
      {products.map((product) => {
        return <SingleProduct addToCart = {addToCart}  key={product.id} {...product}>

        </SingleProduct>
      })}
    </section>
  )
})




const SingleProduct = ({ fields,addToCart }) => {
    console.log(2)
    let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
        <button onClick={addToCart}>add to cart</button>
    </article>
  )
}
export default Index
