import React from 'react';
import './CartSingle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';



const Review = ({carts , handleRemove}) => {
    const {img , name , id , quantity , price} = carts
    return (
       
            
            <div className="cart-items">
               
               <img src={img} width="100" alt="" />
             
                <div>
                <h4 title={name}>Name :    {name}
                     {/* {
                        name.length > 20 ? name.slice(0,20) + '...' : name
                    } */}
                    
                    </h4>
                
                <p>Price : $ {price}</p>
                <p> Quantity : $ {quantity}</p>
                </div>
                
                <button  title="Want to remove ??" className='button' onClick={() => handleRemove(id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
            </div>
     
    );
};

export default Review;