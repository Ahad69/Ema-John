import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products , setProducts] = useState([])
    const [ cart , setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[])

    const addToCart = (product) =>{
        const newCart = [...cart , product]
        setCart(newCart)
    }

    const handleRemove = (id) => {
        const newPeople = cart.filter((person) => person.id !== id);
        setCart(newPeople);
      };

    return (
        <div className='shop-container'>
            
            <div className="product-parent">
                 <h1>Total Products : {products.length}</h1>
                  <div className='product-container'>
                  {
                        products.map(product => <Product product={product} key={product.id} addToCart={addToCart}></Product>)
                    }
                  </div>
            </div>
            <div className="cart-container">
                <h4>Order Summery</h4>
                <h2>{cart.length}</h2>
                {
                    cart.map(carts => <Cart carts={carts} handleRemove={handleRemove}></Cart>)
                }
            </div>
        </div>
    );
};

export default Shop;