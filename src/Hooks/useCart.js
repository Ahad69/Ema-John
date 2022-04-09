import  { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = (products) => {


const [ cart , setCart] = useState([])

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
    },[products]);



    return [
        cart ,
        setCart
    ]
};

export default useCart;