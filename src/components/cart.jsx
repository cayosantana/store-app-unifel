import React from 'react';
import './cart.css'
import { FiShoppingCart } from "react-icons/fi";


const Cart = ({ cart }) => {
    return (
      <div className='container-cart'>
        <div className='container-title'>
          <FiShoppingCart />
          <h1>Carrinho</h1>
        </div>
        {/*<ul>
          {cart.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>Preço: {formatPrice(product.price)}</p>
            </li>
          ))}
          </ul>*/}
      </div>
    );
  };
  
  export default Cart;