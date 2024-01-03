import React, { useEffect, useState } from 'react';
import logo from '../img/pixel-logo.png'; // Asegúrate de proporcionar la ruta correcta para tu logo
import { getToken } from '../API/auth';
import { getUserByUsername } from '../API/usersAPI';
import { MenuCliente } from './MenuCliente';
import { MenuEmplooyer } from './MenuEmplooyer';
import { MenuAdmin } from './MenuAdmin';

const Menu = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // if (!getToken()) {
        //   window.location.href = "/";
        // }

        const userName = localStorage.getItem('userName');
        const usuario = await getUserByUsername(userName);

        setUserRole(usuario.rol);
      } catch (error) {
        console.error(error);
        // Maneja el error según tus necesidades
      }
    };

    fetchData();
  }, []); // El segundo parámetro es una dependencia vacía para que el efecto se ejecute solo una vez al montar el componente


  // Renderizar según el rol del usuario
  switch (userRole) {
    case 'ADMIN':
      return <MenuAdmin />;
    case 'CLIENTE':
      return <MenuCliente />;
    case 'EMPLOYEER':
      window.location.href = "/homeEmployeer"

      return <MenuEmplooyer />;
    default:
      return null; // Otra opción en caso de un rol desconocido
  }
};

export default Menu;
