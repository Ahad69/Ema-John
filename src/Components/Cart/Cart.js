import React from 'react';
import './Cart.css'

const Cart = ({carts, handleRemove}) => {
    
    const {img , name , price , id} = carts

    return (
        <div className='cart'>
            <button className='button' onClick={() => handleRemove(id) }>X</button>
            <img src={img} width="100" alt="" />
            <h4 id='text'>{name}</h4>
            <p>Price : {price}</p>
        </div>
    );
};

export default Cart;