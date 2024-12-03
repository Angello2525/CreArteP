import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '../services/api';
import { validateLogin, isAdmin } from '../utils/validation';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const ADMIN_EMAIL = 'admin@admin.com';
  const ADMIN_PASSWORD = 'Admin123!';

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const { isValid, errors: validationErrors } = validateLogin(email, password);
    
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    // Credenciales admin directas
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const adminUser = {
        email: ADMIN_EMAIL,
        name: 'Administrador',
        isAdmin: true
      };
      localStorage.setItem('user', JSON.stringify(adminUser));
      navigate('/usuarios');
      return;
    }

    try {
      const users = await fetchUsers();
      const user = users.find(u => u.email === email);
      
      if (user) {
        if (!isAdmin(user)) {
          setErrors({ login: 'No tienes permisos de administrador' });
          return;
        }

        localStorage.setItem('user', JSON.stringify(user));
        navigate('/usuarios');
      } else {
        setErrors({ login: 'Credenciales inválidas' });
      }
    } catch (error) {
      setErrors({ login: 'Error al iniciar sesión' });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Iniciar Sesión</h2>
        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu correo"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        {errors.login && <p className="error">{errors.login}</p>}
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;