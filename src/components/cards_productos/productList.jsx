import React from 'react';
import ProductCard from './productCard';
import './productList.css';

const productsData = [
{
    id: 1,
    name: 'Holbein Artists Tosai Pigment Paste',
    description: 'Pigmentos puros en base de agua...',
    price: 60000,
    colors: ['#E8E8E8', '#F5D442', '#F55A42', '#42C1F5', '#72F542', '#5A42F5'],
    image: 'https://via.placeholder.com/100',
},
{
    id: 2,
    name: 'Holbein Artists Tosai Pigment Paste',
    description: 'Pigmentos puros en base de agua...',
    price: 60000,
    colors: ['#E8E8E8', '#F5D442', '#F55A42', '#42C1F5', '#72F542', '#5A42F5'],
    image: 'https://via.placeholder.com/100',
},
{
    id: 3,
    name: 'Holbein Artists Tosai Pigment Paste',
    description: 'Pigmentos puros en base de agua...',
    price: 60000,
    colors: ['#E8E8E8', '#F5D442', '#F55A42', '#42C1F5', '#72F542', '#5A42F5'],
    image: 'https://via.placeholder.com/100',
},
{
    id: 4,
    name: 'Holbein Artists Tosai Pigment Paste',
    description: 'Pigmentos puros en base de agua...',
    price: 60000,
    colors: ['#E8E8E8', '#F5D442', '#F55A42', '#42C1F5', '#72F542', '#5A42F5'],
    image: 'https://via.placeholder.com/100',
}
];

const ProductList = ({ viewMode }) => {
return (
    <div className={`product-list ${viewMode}`}>
    {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))}
    </div>
);
};

export default ProductList;
