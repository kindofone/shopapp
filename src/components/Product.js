import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './Product.css';

function Product({product, addToCart}) {
  const {color, font} = useTheme();
  const {title, description, category, image} = product;

  return (
    <div className='product' style={{color, fontFamily: font}}>
      <img className='product-image' src={image} />
      <span className='product-category'>{category}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => addToCart(product)}>Buy ${product.getPrice()}</button>
    </div>
  )
}

export default Product;