import React from 'react'

import Menu from '../Components/Menu'

export const HomeClient = () => {


    const handleService = (e) => {
        // Obtén el título y el precio del servicio
        // const precio = e.currentTarget.querySelector('#precio').nextSibling.textContent.replace('$', '');

        const titulo = document.getElementById("titulo").textContent;
        const precio = document.getElementById("precio").textContent.replace('$', '').replace(' RD', '');
        console.log(precio);
    
        // Haz lo que necesites con el título y el precio
        // console.log('Título:', titulo);
        // console.log('Precio:', precio);
      };

  return (
    <div>
        <Menu />
        <h1 className='text-center text-4xl font-bold mt-5'>Servicios</h1>
        <div className='flex flex-wrap container m-auto justify-between mt-12'>
            <div
                className='bg-gradient-to-r from-blue-700 to-blue-900 flex flex-col w-2/5 p-6 mb-10 border rounded-lg cursor-pointer shadow-md transform transition-transform hover:scale-105'
                onClick={(e) => handleService(e)}
                
            >
                <h3 className='font-bold text-2xl text-center mb-4 text-white' id='titulo'>Sesión Pre-Boda</h3>
                <p className='text-justify mb-4 text-white'>
                    Celebra el amor en sus primeras etapas con nuestro servicio de Pre-Boda. Capturamos los momentos más especiales y emotivos antes de tu gran día. Nuestro equipo de fotógrafos y videógrafos se esmera en inmortalizar la esencia de vuestro compromiso, creando recuerdos que durarán toda la vida. Garantizamos una experiencia visual única que reflejará la belleza de este capítulo inicial de tu historia de amor.
                </p>
                <p className='bg-blue-900 text-white px-4 py-2 rounded-full inline-block mb-2'>Precio: <span id='precio' className='font-bold'>$1,000 RD</span></p>
            </div>
            <div
                className='bg-gradient-to-r from-blue-700 to-blue-900 flex flex-col w-2/5 p-6 mb-10 border rounded-lg cursor-pointer shadow-md transform transition-transform hover:scale-105'
                onClick={(e) => handleService(e)}
                
            >
                <h3 className='font-bold text-2xl text-center mb-4 text-white' id='titulo'>Sesión Pre-Boda</h3>
                <p className='text-justify mb-4 text-white'>
                    Celebra el amor en sus primeras etapas con nuestro servicio de Pre-Boda. Capturamos los momentos más especiales y emotivos antes de tu gran día. Nuestro equipo de fotógrafos y videógrafos se esmera en inmortalizar la esencia de vuestro compromiso, creando recuerdos que durarán toda la vida. Garantizamos una experiencia visual única que reflejará la belleza de este capítulo inicial de tu historia de amor.
                </p>
                <p className='bg-blue-900 text-white px-4 py-2 rounded-full inline-block mb-2'>Precio: <span id='precio' className='font-bold'>$1,000 RD</span></p>
            </div>
            <div
                className='bg-gradient-to-r from-blue-700 to-blue-900 flex flex-col w-2/5 p-6 mb-10 border rounded-lg cursor-pointer shadow-md transform transition-transform hover:scale-105'
                onClick={(e) => handleService(e)}
                
            >
                <h3 className='font-bold text-2xl text-center mb-4 text-white' id='titulo'>Sesión Pre-Boda</h3>
                <p className='text-justify mb-4 text-white'>
                    Celebra el amor en sus primeras etapas con nuestro servicio de Pre-Boda. Capturamos los momentos más especiales y emotivos antes de tu gran día. Nuestro equipo de fotógrafos y videógrafos se esmera en inmortalizar la esencia de vuestro compromiso, creando recuerdos que durarán toda la vida. Garantizamos una experiencia visual única que reflejará la belleza de este capítulo inicial de tu historia de amor.
                </p>
                <p className='bg-blue-900 text-white px-4 py-2 rounded-full inline-block mb-2'>Precio: <span id='precio' className='font-bold'>$1,000 RD</span></p>
            </div>
            <div
                className='bg-gradient-to-r from-blue-700 to-blue-900 flex flex-col w-2/5 p-6 mb-10 border rounded-lg cursor-pointer shadow-md transform transition-transform hover:scale-105'
                onClick={(e) => handleService(e)}
                
            >
                <h3 className='font-bold text-2xl text-center mb-4 text-white' id='titulo'>Sesión Pre-Boda</h3>
                <p className='text-justify mb-4 text-white'>
                    Celebra el amor en sus primeras etapas con nuestro servicio de Pre-Boda. Capturamos los momentos más especiales y emotivos antes de tu gran día. Nuestro equipo de fotógrafos y videógrafos se esmera en inmortalizar la esencia de vuestro compromiso, creando recuerdos que durarán toda la vida. Garantizamos una experiencia visual única que reflejará la belleza de este capítulo inicial de tu historia de amor.
                </p>
                <p className='bg-blue-900 text-white px-4 py-2 rounded-full inline-block mb-2'>Precio: <span id='precio' className='font-bold'>$1,000 RD</span></p>
            </div>
        </div>

    </div>
  )
}
