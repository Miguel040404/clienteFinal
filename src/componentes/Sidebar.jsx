// import React from "react";
// // import "../estilos/estilos.css";
// import imagen from "/src/assets/logo.png"; //"/src/assets/logo.png"
// import { Link } from "react-router-dom";


// const botones = [
//     { id: 0, nombre: "Inicio", ruta: "/" },
//     { id: 1, nombre: "Carrito", ruta: "/carrito" },
//     { id: 2, nombre: "Productos", ruta: "/productos" },
//     { id: 3, nombre: "Sobre Nosotros", ruta: "/sobrenosotros" },
// ];




// function Sidebar() {
//     return (

//         <div className="bg-gradient-to-b from-slate-500 to-slate-700 fixed left-0 top-0 w-[200px] h-screen
//         p-px box-border flex flex-col gap-[10px]">  

//             <aside>
//             <a href="/">
//                     <img
//                         className="w-[170px] h-[170px] rounded-full border-4 border-indigo-100 mt-30 mb-4 m-3"
//                         src={imagen}
//                         alt="logo"
//                     />
//                 </a>

//                 <div className="flex flex-col gap-6 ">
//                     {botones.map((boton) => (
//                             <Link to={boton.ruta} key={boton.id}>
//                                  <span className="bg-yellow-50 text-black border-none text-center no-underline inline-block text-[16px] 
//                                            m-1 cursor-pointer rounded-md transition duration-300 ease-in-out hover:bg-slate-300
//                                          hover:text-orange-900 font-bold py-2 px-4 w-40 ml-1">
//                                 {boton.nombre}
//                                 </span>
//                             </Link>
//                     ))}
//                 </div>
//             </aside>
//         </div>
//     );
// }

// export default Sidebar;

// --------------------------------------------- malo abajo

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import imagen from "/src/assets/logo.png"; // Asegúrate de que la ruta sea correcta

// const botones = [
//   { id: 0, nombre: "Inicio", ruta: "/" },
//   { id: 1, nombre: "Carrito", ruta: "/carrito" },
//   { id: 2, nombre: "Productos", ruta: "/productos" },
//   { id: 3, nombre: "Sobre Nosotros", ruta: "/sobrenosotros" },
// ];

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Botón de menú hamburguesa */}
//       <div className="fixed top-40 left-4 z-50 !bg-slate-700 text-white p-2 rounded-md lg:hidden">
//         <button onClick={() => setIsOpen(!isOpen)}>
//           <span className="material-symbols-outlined text-3xl">
//             {isOpen ? "close" : "menu"}
//           </span>
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`bg-gradient-to-b from-slate-500 to-slate-700 fixed top-0 left-0 w-[200px] h-screen p-4 box-border flex flex-col gap-4
//         transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out
//         lg:translate-x-0 lg:flex mt-20`} // Siempre visible en pantallas grandes
//       >
//         <aside>
//           <a href="/">
//             <img
//               className="w-[170px] h-[170px] rounded-full border-4 border-indigo-100 mt-10 mb-4 m-3"
//               src={imagen}
//               alt="logo"
//             />
//           </a>

//           <div className="flex flex-col gap-6">
//             {botones.map((boton) => (
//               <Link to={boton.ruta} key={boton.id} onClick={() => setIsOpen(false)}>
//                 <span className="bg-yellow-50 text-black border-none text-center no-underline inline-block text-[16px] 
//                                 cursor-pointer rounded-md transition duration-300 ease-in-out hover:bg-slate-300
//                                 hover:text-orange-900 font-bold py-2 px-4 w-40 ml-1">
//                   {boton.nombre}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </aside>
//       </div>
//     </>
//   );
// }

// export default Sidebar;

// otro de prueba ESTA VA BIEN--------------------------------------

import React, { useState } from "react";
import { Link } from "react-router-dom";
import imagen from "/src/assets/logo.png"; // Asegúrate de que la ruta sea correcta
import burger from "/src/assets/iconos/menu.png";
import close from "/src/assets/iconos/close.png";

const botones = [
    { id: 0, nombre: "Inicio", ruta: "/" },
    { id: 1, nombre: "Carrito", ruta: "/carrito" },
    { id: 2, nombre: "Productos", ruta: "/productos" },
    { id: 3, nombre: "Sobre Nosotros", ruta: "/sobrenosotros" },
];

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="z-50  bg-slate-700 p-2 rounded-md md:left-18 lg:left-17">
                <Link to="#" onClick={() => setIsOpen(!isOpen)}>
                    <img src={burger} alt="menu" className="w-10 h-10" />
                </Link>
            </div>

            <div
                className={`bg-gradient-to-b from-slate-500 to-slate-700 fixed top-0 left-0 w-[300px] h-full p-4 box-border flex flex-col gap-4
                    transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out
                    lg:flex pt-20 z-40`}
            >
                <aside>

            <div className="z-50 w-[60px]  bg-slate-700 p-2 rounded-md md:left-18 lg:left-17">
                <Link to="#" onClick={() => setIsOpen(!isOpen)}>
                    <img src={close} alt="menu" className="w-10 h-10" />
                </Link>
            </div>

                    <div className="flex items-center justify-center">
                        <Link to="/">
                            <img
                                className="w-[170px] h-[170px] rounded-full border-4 border-indigo-100 mt-10 mb-4"
                                src={imagen}
                                alt="logo"
                            />
                        </Link>
                    </div>

                    <div className="flex flex-col gap-6 ">
                        {botones.map((boton) => (
                            <Link to={boton.ruta} key={boton.id} onClick={() => setIsOpen(false)}>
                                <span className="bg-yellow-50 text-black border-none text-center no-underline inline-block text-[16px]
                                    cursor-pointer rounded-md transition duration-300 ease-in-out hover:bg-slate-300
                                    hover:text-orange-900 font-bold py-2 px-4 w-40 ml-1">
                                    {boton.nombre}
                                </span>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
}
export default Sidebar;


// AAAAAAAAAAAAAAAAAAAAAA-------------------------------------------


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import imagen from "/src/assets/logo.png";
// import burger from "/src/assets/iconos/menu.png";

// const botones = [
//     { id: 0, nombre: "Inicio", ruta: "/" },
//     { id: 1, nombre: "Carrito", ruta: "/carrito" },
//     { id: 2, nombre: "Productos", ruta: "/productos" },
//     { id: 3, nombre: "Sobre Nosotros", ruta: "/sobrenosotros" },
// ];

// function Sidebar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleLinkClick = (event) => {
//         event.stopPropagation(); // Evita la propagación del evento
//         setIsOpen(false);
//         console.log("Sidebar should close now.");
//     };

//     return (
//         <div>
//             {/* Botón hamburguesa visible en todas las resoluciones */}
//             <div className="fixed top-4 left-4 z-50 bg-slate-700 p-2 rounded-md">
//                 <button onClick={() => setIsOpen(!isOpen)}>
//                     <img src={burger} alt="menu" className="w-8 h-8 lg:w-10 lg:h-10" />
//                 </button>
//             </div>

//             {/* Sidebar */}
//             <div
//                 className={`bg-gradient-to-b from-slate-500 to-slate-700 fixed top-0 left-0 w-64 h-full p-4 box-border flex flex-col gap-4
//                     transform transition-transform duration-300 ease-in-out z-40
//                      lg:w-72 lg:pt-4
//                      ${isOpen ? "translate-x-0" : "-translate-x-full"}`
                    
//                     }
//             >
//                 <aside>
//                     {/* Logo */}
//                     <div className="lg:mt-4 flex items-center justify-center">
//                         <Link to="/" onClick={handleLinkClick}>
//                             <img
//                                 className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-indigo-100 mt-4"
//                                 src={imagen}
//                                 alt="logo"
//                             />
//                         </Link>
//                     </div>

//                     {/* Botones */}
//                     <div className="flex flex-col gap-6 mt-8 lg:mt-12">
//                         {botones.map((boton) => (
//                             <Link
//                                 to={boton.ruta}
//                                 key={boton.id}
//                                 onClick={handleLinkClick}
//                                 className="ml-2"
//                             >
//                                 <span className="bg-yellow-50 text-black text-center inline-block text-lg
//                                     cursor-pointer rounded-md transition duration-300 ease-in-out
//                                     hover:bg-slate-300 hover:text-orange-900 font-bold py-2 px-4 w-52
//                                     lg:text-xl lg:w-56 lg:py-3">
//                                     {boton.nombre}
//                                 </span>
//                             </Link>
//                         ))}
//                     </div>
//                 </aside>
//             </div>
//         </div>
//     );
// }

// export default Sidebar;
