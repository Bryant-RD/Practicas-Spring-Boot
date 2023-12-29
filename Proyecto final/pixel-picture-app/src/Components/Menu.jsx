import React from 'react';
import logo from '../img/pixel-logo.png'; // Asegúrate de proporcionar la ruta correcta para tu logo
// import './TuArchivoDeEstilos.css'; // Asegúrate de importar o incluir tus estilos

const Menu = () => {
  return (
    <div className='bg-blue-800 flex justify-between'>
      <img id='imgLogo' src={logo} className='my-3 mx-10'/>
      <nav className='flex justify-end px-10 items-center'>
        <ul className='h-16 w-96 text-white flex justify-between items-center text-xl'>
          <li className='cursor-pointer underline-animation' >Home</li>
          <li className='cursor-pointer underline-animation' >Mis compras</li>
          <li className='cursor-pointer underline-animation' >Perfil</li>
          <li className='cursor-pointer underline-animation' >Cerrar sesion</li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;