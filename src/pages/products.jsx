import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './products.css'
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import logoImageProd from './image/logo-flashstore.png'
import { Link } from 'react-router-dom';
import { CgDetailsMore } from "react-icons/cg";


const Products = () => {
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
    <div>
      <div className='container-top'>
        <div className='container-product-img'>
          <img src={logoImageProd} alt="" />
        </div>
        <div className='container-product-filter'>
          <div className='container-input'>
            <IoSearch className='icon-search'/>
            <input
                type="text"
                placeholder="Filtrar produto por nome"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
          </div>
          <div className='container-shop-car'>
            <div className='container-total'>
              <FiShoppingCart className='icon-total'/>
              <h2>Total: {formatPrice(total)} </h2>
            </div>
            <Link to='/checkout'><button>Teste</button></Link>
            <button onClick={() => alert('Finalizar compra')}>Checkout</button>
          </div>
        </div>
      </div>
      <div className='container-product'>
        {products.filter(product => product.title.toLowerCase().includes(filter.toLowerCase())).map(product => (
          <div key={product.id} className='container-item'>
            <div className='container-item-img'><img src={product.image} alt={product.title} /></div>
            <div className='container-item-txt'>
                <div className='item-txt-name'>
                  <h5>{product.title}</h5>
                  <div className='container-price'>
                    <p>{formatPrice(product.price)}</p>
                    <Link to={`/products/${product.id}`}><button><CgDetailsMore className='.icon-details'/>Detalhes</button></Link>
                  </div>
                </div>
                <div className='item-btn'>
                  <button className='btn-add'onClick={() => addToCart(product)}><FiShoppingCart className='icon-shop'/>Adicionar ao carrinho</button>
                  <button onClick={() => removeFromCart(product)}>Remover do carrinho</button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

