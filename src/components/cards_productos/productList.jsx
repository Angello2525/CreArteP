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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXAJD-K0EsfQb02_oTmo9SHNFmRbMy6Rdkxw&s',
  },
  {
    id: 2,
    name: 'PINTURA SOLE MATTE',
    description: 'Pigmentos puros en base de agua...',
    price: 60000,
    colors: ['#E8E8E8', '#F5D442', '#F55A42', '#42C1F5', '#72F542', '#5A42F5'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23z8uw-c-RfUSF1rdtEO5x8pLcWLqJiDaNOHD0-y-GefOBf1Px8f5sDnQyefG9xndpoE&usqp=CAU',
  },
  {
    id: 3,
    name: 'ACLIRICO ROSS PASTEL',
    description: 'Pigmentos puros en base de agua...',
    price: 30000,
    colors: ['#E8E8E8', '#F5D442', '#F55A42', '#42C1F5', '#72F542', '#5A42F5'],
    image: 'https://solograffic.co/wp-content/uploads/2021/02/Pintura-Acrilica-Franco-Arte-Tubo-100ml.jpg ',
  },
  {
    id: 4,
    name: 'VINILO ELE FLURESENTE',
    description: 'Pigmentos puros en base de agua...',
    price: 90000,
    colors: ['#E8E8E8', '#F5D442', '#F55A42', '#42C1F5', '#72F542', '#5A42F5'],
    image: 'https://http2.mlstatic.com/D_NQ_NP_860568-MCO31539745026_072019-O.webp',
  }
];


const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};


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
      [productId]: color, 
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