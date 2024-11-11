// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; // Aquí puedes importar tus estilos globales si tienes un archivo CSS

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
