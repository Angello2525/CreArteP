import React, { useState } from 'react';
import ProductCard from './productCard'; // Importar el componente ProductCard
import './ProductList.css';

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
  // Estado para almacenar el color de cada producto
const [productColors, setProductColors] = useState(
    productsData.reduce((acc, product) => {
      acc[product.id] = product.colors[0]; // Inicializa con el primer color de la lista de colores
    return acc;
    }, {})
);

  // Función para actualizar el color del producto
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
          selectedColor={productColors[product.id]} // Pasa el color seleccionado
          onColorChange={handleColorChange} // Pasa la función para cambiar el color
        />
    ))}
    </div>
);
};

export default ProductList;
