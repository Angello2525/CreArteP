import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from '../src/redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

// Selecciona el elemento root
const rootElement = document.getElementById('root');

// Crea el root usando createRoot de React 18
const root = ReactDOM.createRoot(rootElement);

// Renderiza tu aplicación
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
