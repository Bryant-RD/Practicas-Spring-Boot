
import React, { useState } from 'react';
import Menu from '../Components/Menu'
// import userService from '../../services/userService';

const UserForm = () => {
  const [userData, setUserData] = useState({ name: '', userName: '', password: '', email: '' });
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    const inputValue = e.target.value;
    setConfirmPassword(inputValue);

    const input = document.getElementById('confirmPassword');

    if (inputValue !== userData.password) {
      input.classList.add('border-red-500');
      input.classList.add('focus:border-red-500');
      console.log('diferentes');
    } else {
      input.classList.remove('border-red-500');
      input.classList.remove('focus:border-red-500');
      console.log('iguales');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirmPassword != userData.password) {
      alert("Las contraseñas no coinciden")
      return;
    }
    // Llamada a la API para crear un nuevo usuario
    console.log(userData);
  };

  return (
    <div className=''>
      <Menu />
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-14">
      <h2 className="text-2xl font-bold mb-6 text-center">Crear Nuevo Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre Completo:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ej: Bryant Reynoso"
            value={userData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre de usuario:
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userData.userName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Confirmar Contraseña:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Crear Usuario
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UserForm;