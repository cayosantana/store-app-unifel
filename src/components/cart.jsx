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
        <div className='sombra'>
          <div className='container-item-cart'>
            {cart.map(product => (
              <div key={product.id}>
                <div className='item-img'>
                  <img width="50px" src={product.image} alt={product.title} />
                </div>
                <div className='item-txt'>
                  <h5>{product.title}</h5>
                  <p>{formatPrice(product.price)}</p>
                  <button onClick={() => removeFromCart(product)}>Remover   do carrinho</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;