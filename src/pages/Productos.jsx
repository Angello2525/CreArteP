// // const NombrePagina = () => {
// //     return (
// //       <div className="pagina-container">
// //         <h1>Título de la Página</h1>
// //         {/* Contenido específico de la página */}
// //       </div>
// //     )
// //   }

// //   export default NombrePagina


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
      <h1></h1>
      {/* ViewToggle para alternar entre Grid y Row */}
      <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
      {/* Lista de productos que cambia según el modo de vista */}
      <ProductList viewMode={viewMode} />
    </div>
  );
};

export default productos;
