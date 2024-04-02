import React from 'react';
import './checkout.css'

const Checkout = ({ products, cart, total }) => {

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    };

  return (
    <>
        <div className='cart-items'>
            {cart.map(item => (
                <div key={item.id} className='cart-item'>
                    <p>{item.title}</p>
                    <p>Unit Price: {formatPrice(item.price)}</p>
                    <p>Quantity: 1</p> {/* You can adjust this based on your logic */}
                    <p>Total: {total}</p>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
            ))}
        </div>
    
    </>
    
  );
};

export default Checkout;
