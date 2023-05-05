import { useState, useEffect } from 'react';
import Button from "../AddToCart"
import React from 'react';
import SearchBar from '../SearchBar';

const ProductInfo = () => {
const [products, setProducts] = useState([]);
const [searchText, setSearchText] = useState("");

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
<SearchBar setSearchText={setSearchText} />
{filteredProducts.map(product => (
<div key={product.id}>
<h2>{product.title}</h2>
<p>{product.description}</p>
<p>£{product.price}</p>
<img src={product.image} alt={product.title} />
<Button title="Add To Cart"/>
</div>
))}
</div>
);
};

export default ProductInfo;