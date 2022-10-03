import React from 'react';
import './Cart.css';
import CartItem from './CartItem';

function Cart({cartItems, removeFromCart}) {
  return (
    <div className='cart'>
      {cartItems.map(item => <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />)}
    </div>
  )
}

export default Cart;