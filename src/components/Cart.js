import React from 'react';
import useProducts from '../hooks/useProducts';
import './Cart.css';
import CartItem from './CartItem';

function Cart({cartItems, removeFromCart}) {
  const products = useProducts();

  return (
    <div className='cart'>
      {cartItems.map(itemId => (
      <CartItem 
        key={itemId} 
        item={products.find(product => product.id === itemId)} 
        removeFromCart={removeFromCart} 
      />
      ))}
    </div>
  )
}

export default Cart;