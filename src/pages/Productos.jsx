import React, { useState } from 'react';
import ProductList from '../components/cards_productos/productList';
import ViewToggle from '../components/cards_productos/viewToggle';
import './productos.css';

const productos = () => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="pagina-container">
      <br/>
      <br/>
      <br/>
      <br />
      <br />
      <br />
      <br/>
      {/* ViewToggle para alternar entre Grid y Row */}
      <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
      {/* Lista de productos que cambia según el modo de vista */}
      <ProductList viewMode={viewMode} />
    </div>
  );
};

export default productos;
