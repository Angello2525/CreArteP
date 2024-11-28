import React, { useState, useEffect } from 'react';
import './Cards.css';

const BrandCard = ({ name }) => {
  const [logoColor, setLogoColor] = useState('');

  useEffect(() => {
    // Generar un color de fondo único para cada marca
    setLogoColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }, [name]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div 
        className="w-full h-24 flex items-center justify-center mb-2 rounded-lg text-white text-2xl font-bold"
        style={{ backgroundColor: logoColor }}
      >
        {name.charAt(0)}
      </div>
      <h3 className="text-center text-gray-800 font-medium">{name}</h3>
    </div>
  );
};

const Cards = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch('https://autocomplete.clearbit.com/v1/companies/suggest?query=');
        const data = await response.json();
        setBrands(data.slice(0, 8)); // Obtener las primeras 8 marcas
        setLoading(false);
      } catch (err) {
        setError('Error al cargar las marcas');
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  if (loading) {
    return <div className="brands-section">Cargando marcas...</div>;
  }

  if (error) {
    return <div className="brands-section">{error}</div>;
  }

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-8">MARCAS DESTACADAS</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <BrandCard key={brand.name} name={brand.name} />
        ))}
      </div>
    </section>
  );
};

export default Cards;