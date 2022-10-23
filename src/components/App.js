import './App.css';
import Products from './Products';
import React, { useCallback, useState } from 'react';
import Cart from './Cart';
import useFetch from '../hooks/useFetch';
import CategorySelector from './CategorySelector';

class Product {
  #price = 0;

  constructor(category, description, id, image, price, rating, title) {
    this.category = category;
    this.description = description;
    this.id = id;
    this.image = image;
    this.#price = price;
    this.rating = rating;
    this.title = title;
  }

  getPrice() {
    const price = this.category === "electronics" ? this.#price * 0.9 : this.#price;
    return parseFloat(price.toFixed(2));
  }
}

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

  const catalog = useFetch("https://fakestoreapi.com/products")
    .filter(product => selectedCategory !== "all" ? product.category === selectedCategory : true)
    .map(product => new Product(
      product.category,
      product.description,
      product.id,
      product.image,
      product.price,
      product.rating,
      product.title,
    ));

  console.log("App rendering");

  const removeFromCart = useCallback((product) => {
    const newCartItems = cartItems.filter(item => item.id !== product.id);
    setCartItems(newCartItems);
  });

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
  });

  return (
    <div className="container">
      {catalog.length === 0 ? "Loading..." : (
        <>
          <CategorySelector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          <Products catalog={catalog} addToCart={addToCart} />
        </>
      )}
    </div>
  );
}

export default App;
