import { useState } from 'react';
import './Marca.css';

const Marca = () => {
  const [marcas] = useState([
    { nombre: 'MAPED', logo: 'https://logo.clearbit.com/maped.com', descripcion: 'Útiles de dibujo' },
    { nombre: 'ARTEMIRAND', logo: 'https://logo.clearbit.com/artemiranda.com', descripcion: 'Pinturas profesionales' },
    { nombre: 'DRAC', logo: 'https://logo.clearbit.com/drac.com', descripcion: 'Materiales artísticos' },
    { nombre: 'LUKAS', logo: 'https://logo.clearbit.com/luka.com', descripcion: 'Pinturas y medios' },
    { nombre: '3M', logo: 'https://logo.clearbit.com/3m.com', descripcion: 'Material de dibujo' },
    { nombre: 'HERBIN', logo: 'https://logo.clearbit.com/herbi.com', descripcion: 'Tintas y caligrafía' },
    { nombre: 'MABEF', logo: 'https://logo.clearbit.com/mab.com', descripcion: 'Caballetes y muebles' },
    { nombre: 'SAKURA', logo: 'https://logo.clearbit.com/sakura.com', descripcion: 'Rotuladores artísticos' },
    { nombre: 'SCULPEY', logo: 'https://logo.clearbit.com/SCULPey.com', descripcion: 'Arcillas poliméricas' },
    { nombre: 'DUX', logo: 'https://logo.clearbit.com/dux.com', descripcion: 'Lápices y materiales' },
    { nombre: 'CANSON', logo: 'https://logo.clearbit.com/CANSON.com', descripcion: 'Papeles artísticos' },
    { nombre: 'REMBRANDT', logo: 'https://logo.clearbit.com/REMBRAND.com', descripcion: 'Óleos y acrílicos' },
    { nombre: 'STAEDTLER', logo: 'https://logo.clearbit.com/STAEDTLER.com', descripcion: 'Material de dibujo' }
  ]);

  const handleImageError = (e) => {
    e.target.src = '/logos/default-logo.png';
  };

  return (
    <div className="marcas-container">
      <h1 className="marcas-titulo">MARCAS Y PROVEEDORES</h1>
      
      <div className="marcas-grid">
        {marcas.map((marca) => (
          <div key={marca.nombre} className="marca-card">
            <img 
              src={marca.logo}
              alt={`Logo de ${marca.nombre}`}
              onError={handleImageError}
              className="marca-logo"
            />
            <h2 className="marca-nombre">{marca.nombre}</h2>
            <p className="marca-descripcion">{marca.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marca;