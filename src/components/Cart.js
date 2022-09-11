import React from 'react';
import './Cart.css';

function Cart({cartItems}) {
  return (
    <div className='cart'>
      {cartItems.map(item => {
        return (
          <div className='cart-item' key={item.id}>
            <img src={item.image} className='cart-item-image' />
            <div className='cart-item-details'>
              <h3>{item.title}</h3>
              <div>${item.price}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Cart;