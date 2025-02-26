import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Login from "../Login";

function CarritoVista() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("isAuthenticated") === "true"
    );
    const [modalActivo, setModalActivo] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/api/carrito?search")
            .then((response) => {
                if (!response.ok) throw new Error("Error en la respuesta del servidor");
                return response.json();
            })
            .then((data) => {
                const productosFormateados = data.map((producto) => ({
                    id: producto._id,
                    imagen: producto.imagen_portada,
                    titulo: producto.titulo,
                    artista: producto.artista,
                    precio: parseFloat(producto.precio?.$numberDecimal || producto.precio || 0),
                    descuento: parseFloat(producto.descuento?.$numberDecimal || producto.descuento || 0),
                }));
                setProductos(productosFormateados);
                setCargando(false);
            })
            .catch((error) => {
                console.error("Error obteniendo productos:", error);
                setError(error.message || "Error desconocido");
                setCargando(false);
            });
    }, []);

    const handleLoginSuccess = () => {
        localStorage.setItem("isAuthenticated", "true");
        setIsAuthenticated(true);
        toast.success("¡Bienvenido!");
        setTimeout(() => window.location.reload(), 1000);
    };


    const handleCompraClick = () => {
        if (isAuthenticated) {
            navigate("/comprar");
        } else {
            setShowLogin(true);
        }
    };

    const manejarEliminacion = async (productoId) => {
        if (modalActivo) return; 
        setModalActivo(true); 

        const confirmado = await new Promise((resolve) => {
            toast.custom((t) => (
                <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-4">
                    <p className="text-sm font-medium text-gray-900">¿Seguro que quieres eliminar el producto?</p>
                    <div className="flex justify-center space-x-2 mt-4 ">
                        <button
                            onClick={() => {
                                toast.dismiss(t.id);
                                resolve(false);
                                setModalActivo(false);
                            }}
                            className="px-4 py-2 text-sm text-gray-700 !bg-slate-200 rounded-lg hover:bg-gray-300"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={() => {
                                toast.dismiss(t.id);
                                resolve(true);
                                setModalActivo(false);
                            }}
                            className="px-4 py-2 text-sm text-white !bg-orange-400 rounded-lg hover:!bg-orange-500"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            ));
        });

        if (!confirmado) return;

        try {
            const respuesta = await fetch(`http://localhost:3000/api/carrito?id=${productoId}`, {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
            });

            if (!respuesta.ok) throw new Error("No se pudo eliminar el producto");

            setProductos((prev) => prev.filter((producto) => producto.id !== productoId));
            toast.success("Producto eliminado correctamente");
        } catch (error) {
            toast.error("No se pudo eliminar el producto");
            console.error("Error al eliminar:", error);
        }
    };

    if (cargando) {
        return <div className="text-center py-8">Cargando carrito...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full md:mt-30 mt-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-700 mb-8 md:mb-12 font-FiraSans mt-40">
                Tu Carrito de Compras
            </h1>

            <section className="py-10 bg-slate-300 rounded-xl">
                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {productos.map((producto) => (
                        <article key={producto.id} className="rounded-xl bg-white p-4 shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 max-w-sm mx-auto">
                            <div className="relative aspect-square overflow-hidden rounded-xl w-full">
                                <img
                                    src={producto.imagen}
                                    alt={producto.titulo}
                                    className="w-full object-cover"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "/imagen-fallback.jpg"; }}
                                />
                            </div>
                            <div className="mt-2 p-2">
                                <h2 className="text-slate-700 font-semibold text-lg">{producto.titulo}</h2>
                                <p className="mt-1 text-sm text-slate-400">{producto.artista}</p>
                                <div className="flex items-center gap-2 mt-3">
                                    {producto.descuento > 0 ? (
                                        <>
                                            <p className="text-lg sm:text-xl font-bold text-orange-300">
                                                {producto.descuento}€
                                            </p>
                                            <p className="text-sm sm:text-base font-semibold text-gray-400 line-through">
                                                {producto.precio}€
                                            </p>
                                        </>
                                    ) : (
                                        <p className="text-lg sm:text-xl font-bold text-orange-300">{producto.precio}€</p>
                                    )}
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <button
                                        key={producto.id}
                                        onClick={() => manejarEliminacion(producto.id)}
                                        className="!bg-red-100 hover:!bg-red-200 text-red-600 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center"
                                        disabled={modalActivo} 
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mb-15">
                    {productos.length === 0 && !cargando && (
                        <div className="text-center py-8 text-gray-500 text-xl">
                            🛒 Tu carrito está vacío
                        </div>
                    )}
                </div>

                <div className="flex justify-between bg-slate-200 rounded-xl p-6">
                    <p className="text-2xl font-bold">
                        Total: {productos.reduce((acc, p) => acc + (p.descuento > 0 ? p.descuento : p.precio), 0)}€
                    </p>

                    <button
                        onClick={handleCompraClick}
                        disabled={productos.length === 0} 
                        className={`font-bold py-2 px-4 rounded-full transition-colors 
            ${productos.length === 0
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                                : "!bg-orange-300 hover:!bg-yellow-500 text-gray-800 cursor-pointer"}` 
                        }
                    >
                        {isAuthenticated ? "Comprar" : "Iniciar Sesión"}
                    </button>
                </div>

            </section>

            {showLogin && <Login onLoginSuccess={handleLoginSuccess} onClose={() => setShowLogin(false)} />}
        </div>
    );
}

export default CarritoVista;
