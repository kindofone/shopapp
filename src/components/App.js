import './App.css';
import Products from './Products';
import React, { useCallback, useState } from 'react';
import Cart from './Cart';
import Header from './Header';
import CategorySelector from './CategorySelector';
import useProducts, { Product } from '../hooks/useProducts';
import {ThemeProvider} from '../contexts/ThemeContext';

class CartItem extends Product {
  constructor(id, image, price, title, quantity) {
    super(null, null, id, image, price, null, title);
    this.price = price;
    this.quantity = quantity;
  }

  add() {
    this.quantity++;
  }
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const products = useProducts(selectedCategory);

  const removeFromCart = useCallback((product) => {
    const newCartItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(newCartItems);
  }, [cartItems]);

  const addToCart = useCallback((product) => {
    let newCartItems = [...cartItems];
    let item = cartItems.find(item => item.id === product.id);

    if (item === undefined) { // product NOT FOUND in cartItems
      item = new CartItem(
        product.id,
        product.image,
        product.getPrice(),
        product.title,
        1,
      );
      newCartItems.push(item);
    } else { // product FOUND in cartItems
      item.add();
    }

    setCartItems(newCartItems);
  }, [cartItems]);

  return (
    <ThemeProvider>
      <div className="container">
        <Header title="Hello!" />
        {products.length === 0 ? "Loading..." : (
          <>
            <CategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            <Products catalog={products} addToCart={addToCart} />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
