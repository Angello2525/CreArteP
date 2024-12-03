import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createUser, updateUser, fetchUsers } from '../services/api';
import { validateUserForm } from '../utils/validation';
import { toast, Toaster } from 'react-hot-toast';
import { 
  UserPlus, 
  User, 
  Mail, 
  Lock, 
  SaveIcon, 
  XCircle 
} from 'lucide-react';

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    avatar: 'https://api.lorem.space/image/face'
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      loadUser();
    }
  }, [id]);

  const loadUser = async () => {
    try {
      const users = await fetchUsers();
      const user = users.find(u => u.id === parseInt(id));
      if (user) {
        setUserData({
          name: user.name,
          email: user.email,
          password: '', 
          avatar: user.avatar || 'https://api.lorem.space/image/face'
        });
      }
    } catch (error) {
      toast.error('Error al cargar usuario');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateUserForm(userData);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (id) {
        await updateUser(id, userData);
        toast.success('Usuario actualizado exitosamente');
      } else {
        await createUser(userData);
        toast.success('Usuario creado exitosamente');
      }
      navigate('/usuarios');
    } catch (error) {
      toast.error('Error al guardar usuario');
    }
  };

  return (
    <div className="container mx-auto px-4 pt-[130px] pb-8">
      <Toaster position="top-right" />
      
      <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-blue-600 text-white p-6 flex items-center">
          {id ? <UserPlus className="mr-4" size={36} /> : <User className="mr-4" size={36} />}
          <h1 className="text-2xl font-bold">
            {id ? 'Editar Usuario' : 'Crear Nuevo Usuario'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 flex items-center">
              <User className="mr-2 text-blue-600" size={20} />
              Nombre
            </label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu nombre"
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 flex items-center">
              <Mail className="mr-2 text-blue-600" size={20} />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="nombre@ejemplo.com"
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2 flex items-center">
              <Lock className="mr-2 text-blue-600" size={20} />
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Contraseña segura"
            />
            {errors.password && <p className="text-red-500 mt-1">{errors.password}</p>}
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              type="submit" 
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              <SaveIcon className="mr-2" />
              {id ? 'Actualizar' : 'Crear'}
            </button>
            <button 
              type="button"
              onClick={() => navigate('/usuarios')}
              className="flex items-center bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              <XCircle className="mr-2" />
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;