import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product , addToCart}) => {
const { name , img , seller , rating , price , stock} = product
    return (
        <div className='product'>
            <img src={img} width="100%" alt="" />
            <h3>Name : {name}</h3>
            <h4>Price : {price}</h4>
            <p>From : {seller}</p>
            <p>{rating}</p>
            <p>Avilable : {stock}</p>
            
            <button onClick={()=>addToCart(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
        </div>
    );
};

export default Product;