import { useState } from 'react';
import ServiceCard from '../components/ServiceCard/ServiceCard'
import './Conocemos.css'
import primero from '../assets/img/primero.jpg';
import segundo from '../assets/img/segundo.jpg';
import tercero from '../assets/img/tercero.png';
import cuarto from '../assets/img/cuarto.jpg';

const Conocenos = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: primero,
      title: "¿QUIENES SOMOS?",
      description: "creArte es mucho más que una tienda online de arte: somos el punto de encuentro para mentes creativas que buscan tanto admirar como crear. Nuestro nombre nace de la combinación de dos conceptos fundamentales: crear y arte. Nos enorgullece ofrecer una selección diversa y curada de obras de arte únicas, y también todos los materiales necesarios para que puedas dar vida a tus propias creaciones.Nuestro objetivo es ser la tienda ideal para mentes que innovan, para aquellos que buscan no solo decorar, sino también crear, experimentar y transformar sus ideas en obras de arte."
    },
    {
      icon: segundo,
      title: "PRODUCTOS EN STOCK",
      description: "Contamos con una variedad de obras de arte, desde pinturas y esculturas hasta ilustraciones y piezas más vanguardistas. Además, tenemos materiales artísticos como pinceles, lienzos, pinturas, arcilla, papel especializado, y mucho más, todo disponible en stock para que puedas recibir tu pedido rápidamente."
    },
    {
      icon: tercero,
      title: "METODOS DE PAGOS SEGUROS",
      description: "Tu seguridad es nuestra prioridad. Te ofrecemos múltiples opciones de pago seguras, para que puedas comprar con total confianza."
    },
    {
      icon: cuarto,
      title: "GARANTIA DE SATISFACCION",
      description: "Queremos que estés completamente feliz con tu compra. Si no estás satisfecho, contamos con un sistema de devoluciones fácil y rápido."
    }
  ];

  return (
    <div className="conocenos-container">
      <div className="service-icons-row">
        {services.map((service, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedService(selectedService === index ? null : index)}
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>

      {selectedService !== null && (
        <div className="service-info-container">
          <div className="service-info-modal">
            <div className="service-info-content">
              <h3 className="service-title">{services[selectedService].title}</h3>
              <p className="service-description">{services[selectedService].description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Conocenos;