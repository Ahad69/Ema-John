import React from 'react';
import './Cart.css'

const Cart = ({cart , handleRemove}) => {
    
    // const {img , name , price , id ,} = cart

let total = 0 ;
let shipping = 0 ;
let quantity = 0 ;

for(const price of cart){
    quantity = quantity + price.quantity;
    total = total + price.price * price.quantity;
    shipping =  shipping + price.shipping;
}
const tax = total * 0.1 ;
const totalPrice = tax + total + shipping;

    return (
        <div className='cart-content'>
             <h4>Order Summery</h4>
                <h2>Selected Items : {quantity}</h2>
            <p>Price : $ {total}</p>
            <p>Include Shipping : $ {shipping}</p> 

            <p>Tax : {tax.toFixed(2)}</p>
            <h4>Total Price : {totalPrice.toFixed(2)}</h4>
        <div className='cart'>
          
            {
                cart.map(carts => <div className='cart-items'>
                    <button className='button' onClick={() => handleRemove(carts.id) }>X</button> 
                    <div>
                    <img src={carts.img} width="50" alt="" />
                    <p>{carts.quantity}</p>
                    </div>
                    <h4 id='text'>{carts.name}</h4>
                    
                </div> )
            }
            
            
        </div>
        </div>
    );
};

export default Cart;