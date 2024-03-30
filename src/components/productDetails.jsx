import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './productDetails.css'; 

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = match.params.id; 
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err));
  }, [match.params.id]);

  if (!product) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Preço: {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })}</p>
      <p>{product.description}</p>
      <p>Avaliação: {product.rating.rate} estrelas ({product.rating.count} avaliações)</p>
    </div>
  );
};

export default ProductDetails;


