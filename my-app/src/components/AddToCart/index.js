import React from 'react';
import { useState } from 'react';

// Create a button component 
// create a count state
// When click it updates the state 
// display the count (items in cart)





function Button(props) {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count +1)
        console.log(count)
    }

    return <button onClick={handleClick}>{props.title}</button>
}


export default Button;