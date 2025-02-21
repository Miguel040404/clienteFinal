import React from "react";
import imagen from "../../assets/iconos/menu.png"; // Asegúrate de que la ruta sea correcta



function Carrito() {
    return ( 
        <div>
           <p>Carrito</p>
           <img src={imagen} alt="menu" />
        </div>
     );
}

export default Carrito;