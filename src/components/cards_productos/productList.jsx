import React, { useState } from 'react';
import ProductCard from './productCard'; 
import './productList.css';

const productsData = [
  {
    id: 1,
    name: 'PIGMENTOS MULTICOLOR',
    description: 'Pigmentos puros en base de agua...',
    price: 80000,
    colors: ['#E8E8E8', '#F5D442', '#F55A42', '#42C1F5', '#72F542', '#5A42F5'],
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'PINTURA SOLE MATTE',
    description: 'Pigmentos puros en base de agua...',
    price: 60000,
    colors: ['#E8E8E8', '#F5D442', '#F55A42', '#42C1F5', '#72F542', '#5A42F5'],
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'ACLIRICO ROSS PASTEL',
    description: 'Pigmentos puros en base de agua...',
    price: 30000,
    colors: ['#E8E8E8', '#F5D442', '#F55A42', '#42C1F5', '#72F542', '#5A42F5'],
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 4,
    name: 'VINILO ELE FLURESENTE',
    description: 'Pigmentos puros en base de agua...',
    price: 90000,
    colors: ['#E8E8E8', '#F5D442', '#F55A42', '#42C1F5', '#72F542', '#5A42F5'],
    image: 'https://via.placeholder.com/100',
  }
];

const ProductList = ({ viewMode }) => {
  const [productColors, setProductColors] = useState(
    productsData.reduce((acc, product) => {
      acc[product.id] = product.colors[0];
      return acc;
    }, {})
  );

  const handleColorChange = (productId, color) => {
    setProductColors((prevColors) => ({
      ...prevColors,
      [productId]: color, // Cambia el color del producto
    }));
  };

  return (
    <div className={`product-list ${viewMode}`}>
      {productsData.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          selectedColor={productColors[product.id]}
          onColorChange={handleColorChange}
        />
      ))}
    </div>
  );
};

export default ProductList;
