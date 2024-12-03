import axios from 'axios';

const API_URL = 'https://api.escuelajs.co/api/v1/users';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    // Filtrar datos para asegurar estructura consistente
    const filteredUsers = response.data.map(user => ({
      id: user.id,
      name: user.name || 'Sin nombre',
      email: user.email || 'Sin correo',
      avatar: user.avatar || 'https://api.lorem.space/image/face'
    }));
    return filteredUsers;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, {
      ...userData,
      role: 'customer' // Agregar rol por defecto
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};