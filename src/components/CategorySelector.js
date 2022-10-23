import React from 'react';
import useFetch from '../hooks/useFetch';

function CategorySelector({selectedCategory, setSelectedCategory}) {
  const categories = useFetch("https://fakestoreapi.com/products/categories");
  
  return (
    <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
      <option value="all">Select category...</option>
      {categories.map(category => (
        <option value={category}>{category}</option>
      ))}
    </select>
  )
}

export default CategorySelector;