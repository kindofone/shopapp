import React from 'react';
import Product from './Product';
import './Products.css';

function Products({catalog, addToCart}) {
  return (
    <div className='products'>
      {catalog.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)}
    </div>
  )
}

export default Products;