import React, { useState } from "react";
import { Link } from "react-router-dom";
import imagen from "/src/assets/logo.png";
import burger from "/src/assets/iconos/menu.png";
import close from "/src/assets/iconos/close.png";

const botones = [
    { id: 0, nombre: "Inicio", ruta: "/" },
    { id: 1, nombre: "Productos", ruta: "/productos" },
    { id: 2, nombre: "Carrito", ruta: "/carrito" },
    { id: 3, nombre: "Sobre Nosotros", ruta: "/sobrenosotros" },
];

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div >
            <div className="z-10  bg-slate-700 p-2 rounded-md md:left-18 lg:left-17">
                <Link to="#" onClick={() => setIsOpen(!isOpen)}>
                    <img src={burger} alt="menu" className="w-10 h-10" />
                </Link>
            </div>

            <div className={isOpen ? "w-full h-full bg-black/50  fixed top-0 left-0" : " "}>
                <div
                    className={`bg-gradient-to-b from-slate-500 to-slate-700 fixed top-0 left-0 w-[300px] h-full p-4 box-border flex flex-col gap-4
                    transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out
                    lg:flex justify-center z-10 `}
                >
                    <aside >

                        <div className="top-3 left-5 fixed mb-3 w-[50px] z-10 bg-slate-700 p-2 rounded-md">
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
                                    hover:text-orange-500 font-bold py-2 px-4 w-40 ml-1">
                                        {boton.nombre}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import imagen from "/src/assets/logo.png";
// import burger from "/src/assets/iconos/menu.png";
// import close from "/src/assets/iconos/close.png";

// const botones = [
//     { id: 0, nombre: "Inicio", ruta: "/" },
//     { id: 1, nombre: "Productos", ruta: "/productos" },
//     { id: 2, nombre: "Carrito", ruta: "/carrito" },
//     { id: 3, nombre: "Sobre Nosotros", ruta: "/sobrenosotros" },
// ];

// function Sidebar() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div>
//             {/* Botón del menú hamburguesa */}
//             <div className="z-20 bg-slate-700 p-2 rounded-md md:left-18 lg:left-17">
//                 <Link to="#" onClick={() => setIsOpen(!isOpen)}>
//                     <img src={burger} alt="menu" className="w-10 h-10" />
//                 </Link>
//             </div>

//             {/* Overlay y contenido de la barra lateral */}
//             <div className={isOpen ? "w-full h-full bg-black/50 fixed top-0 left-0 z-30" : ""}>
//                 <div
//                     className={`bg-gradient-to-b from-slate-500 to-slate-700 fixed top-0 left-0 w-[300px] h-full p-4 box-border flex flex-col gap-4 transform ${
//                         isOpen ? "translate-x-0" : "-translate-x-full"
//                     } transition-transform duration-300 ease-in-out lg:flex pt-20 z-40`}
//                 >
//                     <aside >

//                     <div className="z-20 w-[60px] bg-slate-700 p-2 rounded-md md:left-18 lg:left-17">
//                             <Link to="#" onClick={() => setIsOpen(!isOpen)}>
//                                 <img src={close} alt="menu" className="w-10 h-10" />
//                             </Link>
//                         </div>

//                         <div className="flex items-center justify-center">
//                             <Link to="/">
//                                 <img
//                                     className="w-[170px] h-[170px] rounded-full border-4 border-indigo-100 mt-10 mb-4"
//                                     src={imagen}
//                                     alt="logo"
//                                 />
//                             </Link>
//                         </div>

//                         <div className="flex flex-col gap-6 ">
//                             {botones.map((boton) => (
//                                 <Link to={boton.ruta} key={boton.id} onClick={() => setIsOpen(false)}>
//                                     <span className="bg-yellow-50 text-black border-none text-center no-underline inline-block text-[16px]
//                                     cursor-pointer rounded-md transition duration-300 ease-in-out hover:bg-slate-300
//                                     hover:text-orange-500 font-bold py-2 px-4 w-40 ml-1">
//                                         {boton.nombre}
//                                     </span>
//                                 </Link>
//                             ))}
//                         </div>
//                     </aside>
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Sidebar;