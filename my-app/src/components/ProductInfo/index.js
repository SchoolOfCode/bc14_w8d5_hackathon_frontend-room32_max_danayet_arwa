import { useState, useEffect } from 'react';

const ProductInfo = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProduct(data)); // for example, using the first product in the array
      console.log(product);
  }, []);

  return (
    <div>
      {product && <h1>{product.title}</h1>}
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