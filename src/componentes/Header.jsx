// import React from "react";

// function Header() {
//   return (
//     <header className="bg-gradient-to-l from-slate-900 to-slate-500 w-full p-4 shadow-md fixed top-0 left-0 z-50">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">

//         <a href="/">
//           <h1 className="md:text-5xl font-extrabold text-yellow-50 hover:text-indigo-200 mb-4 md:mb-2 
//           uppercase tracking-wider font-AbrilFatface">
//             AGUJA <span className="text-orange-300"> & </span>VINILO
//           </h1>
//         </a>

//         <button className="!bg-orange-300 hover:!bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full shadow-lg">
//           Cerrar Sesión
//         </button>

//       </div>
//     </header>
//   );
// }

// export default Header;

// -----------------------------------------mal

// import React from "react";

// function Header() {
//   return (
//     <div className="mb-30">
//     <header className="bg-gradient-to-l from-slate-900 to-slate-500 w-full py-2 md:py-4 shadow-md fixed top-0 left-0 z-50">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12">

//         <a href="/" className="text-center md:text-left">
//           <h1 className="text-2xl md:text-5xl font-extrabold text-yellow-50 hover:text-indigo-200 uppercase tracking-wider font-AbrilFatface">
//             AGUJA <span className="text-orange-300"> & </span>VINILO
//           </h1>
//         </a>

//         <button className="!bg-orange-300 hover:!bg-yellow-500 text-gray-800 font-bold py-1 px-3 md:py-2 md:px-4 rounded-full shadow-lg mt-2 md:mt-0">
//           Cerrar Sesión
//         </button>

//       </div>
//     </header>
//     </div>
//   );
// }

// export default Header;


// -----------------------------------------------------mal2

import React from "react";
import Sidebar from "./Sidebar";

function Header() {
  return (
    <div className=" z-90 mb-15   ">
      <header className=" fixed bg-gradient-to-l from-slate-900 to-slate-500 w-full py-2 md:py-4 shadow-md md:fixed top-0 left-0 z-90">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
          <div className="flex gap-7">

            <div className="w-[60px]">
              <Sidebar />
            </div>

            <a href="/" className="text-center md:text-left">
              <h1 className="text-2xl md:text-5xl font-extrabold text-yellow-50 hover:text-indigo-200 uppercase tracking-wider font-AbrilFatface">
                AGUJA <span className="text-orange-300"> & </span>VINILO
              </h1>
            </a>
          </div>
          <button className="!bg-orange-300 hover:!bg-yellow-500 text-gray-800 font-bold py-1 px-3 md:py-2 md:px-4 rounded-full shadow-lg mt-2 md:mt-0">
            Cerrar Sesión
          </button>

        </div>
      </header>
    </div>
  );
}

export default Header;