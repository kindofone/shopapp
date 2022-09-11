import React from 'react';
import './Product.css';

function Product({product, addToCart}) {
  const {title, price, description, category, image} = product;

  return (
    <div className='product'>
      <img className='product-image' src={image} />
      <span className='product-category'>{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => addToCart(product)}>Buy ${price}</button>
    </div>
  )
}

export default Product;