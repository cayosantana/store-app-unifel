import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productDetails.css'
import { IoArrowBack } from "react-icons/io5";
import { SlStar } from "react-icons/sl";
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/1`);
        setProduct(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='container-details'>
      <div className='container-product-details'>
        <div className='details-top'>
          <Link to='/products'><button><IoArrowBack /></button></Link>
          <div className='rating'>
            <SlStar className='icon-star'/>
            <p>{product.rating.rate} Estrelas ({product.rating.count} Avaliações)</p>
          </div>
        </div>
        <div><img src={product.image} alt={product.title} /></div>
        <div className='details-txt'>
          <h2>{product.title}</h2>
          <p className='price'>Preço: {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



