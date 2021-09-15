import React from 'react';
import PropTypes from "prop-types";
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
  const url = image && image.url
  return <article className='product'>
    <h4>{name || 'unNamed'}</h4>
    <img src={url || defaultImage} alt="image not found"/>
    <p>{price || 'not priced'}</p>
  </article>;
};
Product.propTypes = {
  image:PropTypes.object.isRequired,
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired
}
// Product.defaultProps = {
//   name:'unNamed',
//   price:'not in stock',
//   image:defaultImage
// }
export default Product;
