import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Asegúrate de importar Link
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  // Lista de administradores (usuario y contraseña)
  const admins = [
    { username: 'admin1', password: 'admin123' },
    { username: 'admin2', password: 'admin456' },
    { username: 'admin3', password: 'admin789' }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!username || !password) {
      setMessage('Por favor, completa todos los campos.');
      setIsSuccess(false);
      return;
    }

    // Verificar si el usuario y la contraseña coinciden con algún administrador
    const admin = admins.find((admin) => admin.username === username && admin.password === password);

    if (admin) {
      setMessage(`¡Bienvenido, ${username}!`);
      setIsSuccess(true);
    } else {
      setMessage('Usuario o contraseña incorrectos.');
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    // Redirigir después de 3 segundos si el login fue exitoso
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate('/');  // Cambiar '/home' a la ruta que desees
      }, 3000); // Redirigir después de 3 segundos (3000 ms)
      
      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }
  }, [isSuccess, navigate]);  // Dependencia de isSuccess para iniciar el redireccionamiento solo si es exitoso

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingresa tu usuario"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit">Ingresar</button>
        
        <div className="links-container">
          <Link to="/" className="link">¿Prefieres usar MongoDB?</Link>
          <Link to="/" className="link">¿Quieres Volver?</Link>
        </div>
      </form>

      {message && (
        <div className={`alert ${isSuccess ? 'alert-success' : 'alert-error'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Login;
