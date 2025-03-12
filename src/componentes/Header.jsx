import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Sidebar from "./Sidebar";
import Login from "./Login";

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  
  const [showLogin, setShowLogin] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); 
    toast.success("Sesión cerrada con éxito");
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <div className="z-90 mb-15">
      <header className="fixed bg-gradient-to-l from-slate-900 to-slate-500 w-full py-2 md:py-4 shadow-md md:fixed top-0 left-0 z-90">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
          <div className="flex gap-7 pl-15">
            <div className="!w-[50px] top-3 left-5 fixed">
              <Sidebar />
            </div>

            <a href="/" className="text-center md:text-left w-full">
              <h1 className="!text-[30px] xl:!text-[45px] font-extrabold text-yellow-50 font-AbrilFatface">
                AGUJA <span className="text-orange-300"> & </span>VINILO
              </h1>
            </a>
          </div>

          <button
            onClick={isAuthenticated ? handleLogout : () => setShowLogin(true)}
            className="!bg-orange-300 hover:!bg-yellow-500 text-gray-800 font-bold py-1 px-3 md:py-2 md:px-4 rounded-full shadow-lg mt-2 md:mt-0 !text-[10px] xl:!text-[15px]"
          >
            {isAuthenticated ? "Cerrar Sesión" : "Iniciar Sesión"}
          </button>
        </div>
      </header>

      {showLogin && (
        <Login
          onLoginSuccess={() => {
            setIsAuthenticated(true);
            localStorage.setItem("isAuthenticated", "true");
            window.dispatchEvent(new Event("storage")); 
            setShowLogin(false);
            toast.success("¡Bienvenido!");
            setTimeout(() => window.location.reload(), 1000);
          }}
          onClose={() => {
            setShowLogin(false);
            toast.error("Login cancelado");
          }}
        />
      )}
    </div>
  );
}

export default Header;
