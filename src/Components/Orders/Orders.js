import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../CartSingle/Review';




const Orders = () => {
    const [products] = useProducts([])
    const [cart , setCart] = useCart(products)

    
    const handleRemove = id =>{
   
        const newPeople = cart.filter((person) => person.id !== id);
        setCart(newPeople);
        removeFromDb(id)
    }

    return (
        <div>
           <div className='shop-container'>
             
             <div className="product-parent">
                {
                    cart.map(cart => <Review carts={cart} key={cart.id} handleRemove={handleRemove}></Review>)
                }
                  
             </div>
 
             <div className="cart-container">
                 <Cart cart={cart} key={cart.id} > 
                 <Link to='/inventory'>
                        <button>Place Order</button>
                    </Link>
                  </Cart>
             
             </div>
         </div>
        </div>
    );
};

export default Orders;