import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAdmin } from '../utils/validation';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    // Si no hay usuario, redirige al login
    return <Navigate to="/" replace />;
  }

  if (!isAdmin(user)) {
    // Si el usuario no es admin, redirige al login
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;