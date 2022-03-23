import React from 'react';
import './CartSingle.css'

const CartSingle = ({carts , handleRemove}) => {
    const {img , name , id , quantity} = carts
    return (
       
            
            <div className="cart-items">
               
                <img src={img} width="50" alt="" />
                <p> X {quantity}</p>
 
               
                <h4>{name}</h4>
                
            
                <button className='button' onClick={() => handleRemove(id)}>X</button>
            </div>
     
    );
};

export default CartSingle;