import React from 'react';
import './Cards.css';

const BrandCard = ({ logo, name }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <img src={logo} alt={name} className="w-full h-24 object-contain mb-2" />
    <h3 className="text-center text-gray-800 font-medium">{name}</h3>
  </div>
);

const Cards = () => {
  const brands = [
    { name: 'DAS', logo: 'https://logo.clearbit.com/clearbit.com' },
    { name: 'DRAC', logo: '/logos/drac.png' },
    { name: 'GELLI ARTS', logo: '/logos/gelli.png' },
    { name: 'HERBIN', logo: '/logos/herbin.png' },
    { name: 'LUKAS', logo: '/logos/lukas.png' },
    { name: 'MABEF', logo: '/logos/mabef.png' },
    { name: 'MAPED', logo: '/logos/maped.png' },
    { name: 'MICHAEL', logo: '/logos/michael.png' },
    { name: 'SAKURA', logo: '/logos/sakura.png' },
    { name: 'SCULPEY', logo: '/logos/sculpey.png' }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-red-600 text-center mb-8">MARCAS Y PROVEDORES</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <BrandCard key={brand.name} {...brand} />
        ))}
      </div>
    </section>
  );
};

export default Cards;