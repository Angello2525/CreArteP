import React, { useState } from "react";
import './contacto.css';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  return (
    <div className="contact-container">

      {/* Sección de texto adicional */}
      <div className="text-section">
        <h1>Contáctanos</h1>
        <p>
          En CreArte, estamos siempre disponibles para ayudarte. Ya sea que tengas
          preguntas sobre nuestros productos, necesites asesoramiento sobre materiales
          de arte, o quieras saber más sobre un pedido, nuestro equipo está aquí para ti.
        </p>
        <h3 className="h3roj">Formulario de contacto</h3>
        <p>
          Si prefieres escribirnos directamente, también puedes completar el siguiente
          formulario y nos pondremos en contacto contigo lo más rápido posible:
        </p>

      {/* Formulario de contacto */}

        <form>
          <input type="text" id="name" placeholder="Tu nombre" />

          <input type="email" id="email" placeholder="Tu correo electrónico" />

          <textarea id="message" placeholder="Escribe tu mensaje aquí"></textarea>

          <button type="submit">Enviar</button>
        </form>
      </div>

      {/* Mapa interactivo */}
      <div className="map-section">
        <MapContainer
          center={[6.2442, -75.5812]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker position={[6.2442, -75.5812]}>
            <Popup>¡CreArte está aquí! Visítanos.</Popup>
          </Marker>
        </MapContainer>
        {/* Texto debajo del mapa */}
        <div className="map-text">
          <h5>Dirección física:</h5>
          <p>
          Si deseas visitarnos en persona, puedes encontrarnos en:
          </p>
          <h5 className="call1">📍 Calle del Arte, 123, Ciudad, País</h5>
          <p>
          Horario de atención: Lunes a viernes, de 10:00 a 18:00.
          </p>
        </div>
      </div>
    </div>
      
  );
};

export default Contact;
