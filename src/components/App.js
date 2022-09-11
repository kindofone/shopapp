import './App.css';
import catalog from '../catalog';
import Products from './Products';
import { useState } from 'react';
import Cart from './Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    let newCartItems = [...cartItems];
    let item = cartItems.find(item => item.id === product.id);

    if (item === undefined) { // product NOT FOUND in cartItems
      item = {
        ...product,
        quantity: 1,
      };
      newCartItems.push(item);
    } else { // product FOUND in cartItems
      item.quantity++;
    }

    setCartItems(newCartItems);
  };

  return (
    <div className="container">
      <Cart cartItems={cartItems} />
      <Products catalog={catalog} addToCart={addToCart} />
    </div>
  );
}

export default App;
