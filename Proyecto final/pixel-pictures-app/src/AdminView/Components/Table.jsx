// import { useState } from "react";

// const Table = ({ columns, data, pageSize }) => {

//   //HOLA

//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(data.length / pageSize);

//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;

//   const currentData = data.slice(startIndex, endIndex);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   console.log(currentData);
//   return (
//     <div className="overflow-x-auto" style={{ height: "400px" }}>
//       <table className="min-w-full bg-white border border-gray-300">
//       <thead>
//       <tr>
//         {columns.map((column) => (
//           <th key={column} className="py-2 px-4 text-left font-bold">
//             {column}
//           </th>
//         ))}
//         {columns.map((column) => (
//           columns.includes(column.toLowerCase()) && <th key={`action-${column}`} className="py-2 px-4 text-left font-bold">Actions</th>
//         ))}
//       </tr>
//     </thead>
//         <tbody className="divide-y divide-gray-300">
//           {currentData.map((row, index) => (
//             <tr key={index}>
//               {columns.map((column) => (
//                 <td key={column} className="py-2 px-4">
//                   {/* {row[column.toLowerCase()]} */}
//                   {row.hasOwnProperty(column.toLowerCase()) ? row[column.toLowerCase()] : (
//                     <td className="py-2 px-4">
//                       <button className="mr-2 text-blue-500">Ver</button>
//                       <button className="mr-2 text-green-500">Editar</button>
//                       <button className="text-red-500">Eliminar</button>
//                     </td>
//                   )}

//                   {console.log(row[column.toLowerCase()])}
//                 </td>
//               ))}

//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination mt-4">
//         {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
//           <button
//             key={page}
//             onClick={() => handlePageChange(page)}
//             className={`mx-1 px-3 py-2 border ${currentPage === page ? 'bg-blue-700 text-white' : 'hover:bg-gray-200'}`}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Table;


import { useState } from "react";
import { FaCheck } from 'react-icons/fa';

const Table = ({ columns, data, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  let nuevoArrayEnMinusculas = data.map((objeto) => {
    let objetoEnMinusculas = {};
    for (const key in objeto) {
      if (Object.hasOwnProperty.call(objeto, key)) {
        objetoEnMinusculas[key.toLowerCase()] = objeto[key];
      }
    }
    return objetoEnMinusculas;
  });

  const currentData = nuevoArrayEnMinusculas.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };



  return (
    <div className="overflow-x-auto w-10/12 m-auto" style={{ height: "auto" }}>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} className="py-2 px-4 text-center font-bold">
                {column}
              </th>
            ))}
            {columns.includes("actions") && <th className="py-2 px-4 text-center font-bold">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {currentData.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column} className="py-2 px-4 text-center ">
                  {row.hasOwnProperty(column.toLowerCase()) ? row[column.toLowerCase()] : (
                    column.toLowerCase() === "seleccionar" ? (
                      <button className="bg-blue-800 text-white rounded w-12 h-10 flex justify-center items-center text-xl ml-28" onClick={() => console.log(`Seleccionado: ${row.id}`)}>
                        <FaCheck />
                      </button>
                    ) : (
                      <td className="py-2 px-4 flex justify-center">
                        <button className="mr-2 text-blue-500">Ver</button>
                        <button className="mr-2 text-green-500">Editar</button>
                        <button className="text-red-500">Eliminar</button>
                      </td>
                    )
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination mt-4">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-2 border ${currentPage === page ? 'bg-blue-700 text-white' : 'hover:bg-gray-200'}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;

