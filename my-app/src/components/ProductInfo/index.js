import { useState, useEffect } from 'react';
import Button from "../AddToCart"
import React from 'react';
import SearchBar from '../SearchBar';
import './style.css';

const ProductInfo = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div>
      <div className="nav-bar">
        <h1>MAD Clothing</h1>
        <div>Cart: {cart.length}</div>
      </div>
      <SearchBar setSearchText={setSearchText} searchText={searchText}/>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>£{product.price}</p>
            <img src={product.image} alt={product.title} className="product-image" />
            <Button title="Add To Cart" product={product} setCart={setCart}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
