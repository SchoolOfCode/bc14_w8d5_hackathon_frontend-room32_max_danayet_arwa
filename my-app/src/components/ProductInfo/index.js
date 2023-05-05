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
  <SearchBar setSearchText={setSearchText} searchText={searchText} />
  <div className="cart-info">Cart: {cart.length}</div>
</div>
      <div className="product-grid">
  {filteredProducts.map(product => (
    <div key={product.id} className="product-item">
      <h2>{product.title}</h2>

      <p>£{product.price}</p>
      <div className="product-image-wrapper">
        <img className="product-image" src={product.image} alt={product.title} />
      </div>
      <p className="product-desc">{product.description}</p>
      <Button className="add-to-cart-button" title="Add To Cart" product={product} setCart={setCart}/>
    </div>
  ))}
</div>
    </div>
  );
};

export default ProductInfo;
