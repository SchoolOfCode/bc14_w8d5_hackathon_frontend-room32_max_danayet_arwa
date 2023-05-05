import { useState, useEffect } from 'react';
import Button from "../AddToCart"
import React from 'react';
import SearchBar from '../SearchBar';

const ProductInfo = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(`${SearchBar}`.toLowerCase());
    });

  return (
    <div>
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

    
/*

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => console.log(json))
    }, []);
    return (
        <div>
            <h1>Product Info</h1>
        </div>
    );

     id:1,
                    title:'...',
                    price:'...',
                    category:'...',
                    description:'...',
                    image:'...'


            const response = await fetch ("https://fakestoreapi.com/products"); //use a https website here
            const data = await response.json(); //use the .json method to unpack our json data from our response object
            console.log(data);
    */