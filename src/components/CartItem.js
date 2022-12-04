import React from 'react';

function CartItem({item, removeFromCart}) {
  const {id, image, title, quantity, price} = item;

  return (
    <div className='cart-item' key={id}>
      <img alt={title} src={image} className='cart-item-image' />
      <div className='cart-item-details'>
        <h3>{title} <button onClick={() => removeFromCart(item)}>-</button></h3>
        <div>${price}</div>
        <div>Quantity: {quantity}</div>
      </div>
    </div>
  )
}

export default CartItem;