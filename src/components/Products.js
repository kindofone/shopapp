import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from './Product';
import './Products.css';

function Products({catalog, addToCart}) {
  const catalogAlt = useProducts();

  return (
    <div className='products'>
      {(catalog ?? catalogAlt).map(product => <Product key={product.id} product={product} addToCart={addToCart} />)}
    </div>
  )
}

export default Products;