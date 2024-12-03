import React, { useState, useEffect } from 'react';
import './Marca.css';

const Marca = () => {
  const [marcas, setMarcas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const brands = [
    { nombre: 'MAPED', descripcion: 'Útiles de dibujo' },
    { nombre: 'ARTEMIRANDA', descripcion: 'Pinturas profesionales' },
    { nombre: 'DRAC', descripcion: 'Materiales artísticos' },
    { nombre: 'LUKAS', descripcion: 'Pinturas y medios' },
    { nombre: '3M', descripcion: 'Material de dibujo' },
    { nombre: 'HERBI', descripcion: 'Tintas y caligrafía' },
    { nombre: 'MABE', descripcion: 'Caballetes y muebles' },
    { nombre: 'SAKURA', descripcion: 'Rotuladores artísticos' },
    { nombre: 'SCULPEY', descripcion: 'Arcillas poliméricas' },
    { nombre: 'DUX', descripcion: 'Lápices y materiales' },
    { nombre: 'CANSON', descripcion: 'Papeles artísticos' },
    { nombre: 'REMBRAND', descripcion: 'Óleos y acrílicos' },
    { nombre: 'STAEDTLER', descripcion: 'Material de dibujo' }
  ];

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const logoPromises = brands.map(async (brand) => {
          try {
            const response = await fetch(`https://logo.clearbit.com/${brand.nombre.toLowerCase()}.com`);
            return {
              ...brand,
              logo: response.ok ? response.url : '/logos/default-logo.png'
            };
          } catch (err) {
            return {
              ...brand,
              logo: '/logos/default-logo.png'
            };
          }
        });

        const fetchedMarcas = await Promise.all(logoPromises);
        setMarcas(fetchedMarcas);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar las marcas');
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  const handleImageError = (e) => {
    e.target.src = '/logos/default-logo.png';
  };

  if (loading) {
    return <div className="marcas-container">Cargando marcas...</div>;
  }

  if (error) {
    return <div className="marcas-container">{error}</div>;
  }

  return (
    <div className="marcas-container">
      <h1 className="marcas-titulo">MARCAS Y PROVEEDORES</h1>
      
      <div className="marcas-grid">
        {marcas.map((marca) => (
          <div key={marca.nombre} className="marca-card">
            <div className="marca-imagen">
              <img 
                src={marca.logo}
                alt={`Logo de ${marca.nombre}`}
                onError={handleImageError}
                className="marca-logo"
              />
            </div>
            <h2 className="marca-nombre">{marca.nombre}</h2>
            <p className="marca-descripcion">{marca.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marca;