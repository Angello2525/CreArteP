import React, { useState, useEffect } from 'react';
import { fetchUsers, deleteUser, createUser, updateUser } from '../services/api';
import { toast, Toaster } from 'react-hot-toast';
import { Trash2, Edit, PlusCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { validateUserForm } from '../utils/validation';
import './userestilo.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [userToDelete, setUserToDelete] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [userFormModalVisible, setUserFormModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    password: '',
    avatar: 'https://api.lorem.space/image/face'
  });
  const [errors, setErrors] = useState({});
  const usersPerPage = 5;

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      toast.error('Error al cargar usuarios', { duration: 4000 });
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors: validationErrors } = validateUserForm(currentUser);

    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (currentUser.id) {
        await updateUser(currentUser.id, currentUser);
        toast.success('Usuario actualizado exitosamente');
      } else {
        await createUser(currentUser);
        toast.success('Usuario creado exitosamente');
      }
      loadUsers();
      setUserFormModalVisible(false);
    } catch (error) {
      toast.error('Error al guardar usuario');
    }
  };

  const handleDelete = async () => {
    if (userToDelete) {
      try {
        await deleteUser(userToDelete.id);
        setUsers(users.filter(user => user.id !== userToDelete.id));
        toast.success(`Usuario ${userToDelete.name} eliminado`, { duration: 4000 });
        setModalVisible(false);
      } catch (error) {
        toast.error('Error al eliminar usuario', { duration: 4000 });
      }
    }
  };

  const confirmDelete = (user) => {
    setUserToDelete(user);
    setModalVisible(true);
  };

  const handleNewUser = () => {
    setCurrentUser({
      name: '',
      email: '',
      password: '',
      avatar: 'https://api.lorem.space/image/face'
    });
    setErrors({});
    setUserFormModalVisible(true);
  };

  const handleEditUser = (user) => {
    setCurrentUser(user);
    setErrors({});
    setUserFormModalVisible(true);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '140px 30px' }}>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      <div className="mb-3 text-left">
        <button
          className="btn btn-sm btn-danger d-inline-flex align-items-center"
          onClick={handleNewUser}
          style={{ width: '90px', height: '35px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <PlusCircle size={18} className="me-2" />
          Agregar
        </button>
      </div>
      
      <div className="card shadow">
        <div className="card-header bg-danger text-white">
          Lista de Usuarios
        </div>
        <div className="card-body">
          <table className="table table-hover">
            <thead className="table-danger">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th className="text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="text-right">
                    <div className="btn-group" role="group">
                      <button
                        className="btn btn-sm btn-outline-success"
                        onClick={() => handleEditUser(user)}
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => confirmDelete(user)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card-footer d-flex justify-content-between align-items-center">
          <button
            className={`btn btn-sm btn-outline-danger ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={() => paginate(currentPage - 1)}
            style={{ minWidth: '60px', padding: '4px 7px' }} // Botones más pequeños
          >
            <ChevronLeft size={16} /> Anterior
          </button>

          <span
            className="text-danger mx-2 text-center"
            style={{ flexGrow: 2, fontSize: '14px', letterSpacing: '2px' }} 
          >
            Página {currentPage} de {totalPages}
          </span>

          <button
            className={`btn btn-sm btn-outline-danger ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => paginate(currentPage + 1)}
            style={{ minWidth: '60px', padding: '4px 7px' }} // Botones más pequeños
          >
            Siguiente <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Modal Eliminar */}
      {modalVisible && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">Confirmar Eliminación</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setModalVisible(false)}></button>
              </div>
              <div className="modal-body">
                ¿Estás seguro de eliminar al usuario {userToDelete?.name}?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setModalVisible(false)}>Cancelar</button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Crear/Editar Usuario */}
      {userFormModalVisible && (
        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">
                  {currentUser.id ? 'Editar Usuario' : 'Crear Nuevo Usuario'}
                </h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setUserFormModalVisible(false)}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={currentUser.name}
                      onChange={handleChange}
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={currentUser.email}
                      onChange={handleChange}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                      type="password"
                      name="password"
                      value={currentUser.password}
                      onChange={handleChange}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Avatar</label>
                    <input
                      type="text"
                      name="avatar"
                      value={currentUser.avatar}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setUserFormModalVisible(false)}>Cancelar</button>
                  <button type="submit" className="btn btn-danger">
                    {currentUser.id ? 'Actualizar' : 'Crear'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
