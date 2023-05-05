async function shopData() {
    const response = await fetch ("https://fakestoreapi.com/products"); //use a https website here
    const data = await response.json(); //use the .json method to unpack our json data from our response object
    console.log(data);
    }
    
    shopData();