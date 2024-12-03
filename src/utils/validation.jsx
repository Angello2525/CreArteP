export const validateLogin = (email, password) => {
  const errors = {};

  // Validación de email
  if (!email) {
    errors.email = 'El correo electrónico es requerido';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'El correo electrónico no es válido';
  }

  // Validación de contraseña
  if (!password) {
    errors.password = 'La contraseña es requerida';
  } else if (password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const isAdmin = (user) => {
  // Puedes personalizar esta lógica según tus necesidades
  return user && (
    user.email === 'admin@admin.com' || 
    user.isAdmin === true
  );
};

export const validateUserForm = (userData) => {
  const errors = {};

  if (!userData.name) {
    errors.name = 'El nombre es requerido';
  }

  if (!userData.email) {
    errors.email = 'El correo electrónico es requerido';
  } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = 'El correo electrónico no es válido';
  }

  if (!userData.password) {
    errors.password = 'La contraseña es requerida';
  } else if (userData.password.length < 6) {
    errors.password = 'La contraseña debe tener al menos 6 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};