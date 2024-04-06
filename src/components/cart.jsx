import React from 'react';
import './cart.css'
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate} from 'react-router-dom'
import { useState } from 'react';


const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();
  
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setTotal(total + product.price);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
    setTotal(total - product.price);
    

    if (product.price <= total) {
      setTotal(total - product.price);
    } else {
      setTotal(0);
    }
  };

  const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
  };


  
    return (
      <div className='container-cart'>
        <div className='container-title'>
          <FiShoppingCart />
          <h1>Carrinho</h1>
          <button onClick={() => navigate('/checkout', { state: {cart}})}>Checkout</button>
        </div>
        <ul>
          {cart.map(product => (
            <li key={product.id}>
              <img width="50px" src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>Preço: {formatPrice(product.price)}</p>
              <button onClick={() => removeFromCart(product)}>Remover do carrinho</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Cart;