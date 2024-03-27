import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productList.css'
import { IoSearch } from "react-icons/io5";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter(item => item.id !== product.id);
    setCart(newCart);
    setTotal(total - product.price);
  };

  return (
    <div>
      <div className='container-product-filter'>
        <IoSearch className='icon-search'/>
        <input
            type="text"
            placeholder="Filtrar produto por nome"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
      </div>
      <div className='container-product'>
        {products.filter(product => product.title.toLowerCase().includes(filter.toLowerCase())).map(product => (
          <div key={product.id} className='container-item'>
            <div className='container-item-img'><img src={product.image} alt={product.title} /></div>
            <div className='container-item-txt'>
                <h4>{product.title}</h4>
                <p>{product.price}</p>
                <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
                <button onClick={() => removeFromCart(product)}>Remover do carrinho</button>
            </div>
          </div>
        ))}
        <h2>Total: {total}</h2>
        <button onClick={() => alert('Finalizar compra')}>Checkout</button>
      </div>
    </div>
  );
};

export default ProductList;
