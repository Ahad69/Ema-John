import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart} from '../../utilities/fakedb';
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

    const addToCart = (selectedProduct) =>{
        let newCart = []  
        const exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart , selectedProduct]
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1 ;
            newCart = [...rest , exist]

        }
       
        setCart(newCart)
        addToDb(selectedProduct.id)
    } 
    
    

    useEffect(() =>{
        const loadData = getStoredCart();
        const savedStorage = [] ;
        for(const id in loadData){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = loadData[id]
                addedProduct.quantity = quantity;
                savedStorage.push(addedProduct)
            }   
        }
        setCart(savedStorage)
    },[products])


      const handleRemove = id =>{
          console.log(id)
        const storedCart = localStorage.getItem('shopping-cart');
        if(storedCart){
            const shoppingCart = JSON.parse(storedCart);
            if(id in shoppingCart){
                delete shoppingCart[id];
                localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
            }
        }

        
        const newPeople = cart.filter((person) => person.id !== id);
        setCart(newPeople);
    }


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
                <Cart cart={cart} key={cart.id} handleRemove={handleRemove}></Cart>
            
            </div>
        </div>
    );
};

export default Shop;