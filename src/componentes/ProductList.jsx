import React, { useState } from "react";
import toast from 'react-hot-toast';

const ProductCard = ({ id, image, title, artista, price, stock, descuento }) => {

  const [isAdding, setIsAdding] = useState(false);

  const manejarAgregarCarrito = async () => {
    setIsAdding(true);
    try {
      const respuesta = await fetch('http://localhost:3000/api/carrito', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productoId: id,
          titulo: title,
          precio: price,
          imagen_portada: image,
          artista: artista,
          descuento: descuento
        })
      });

      if (!respuesta.ok) {
        throw new Error('Error al agregar al carrito');
      }

      toast.success('¡Producto añadido al carrito!');
    } catch (error) {
      toast.error(error.message || 'Error al agregar el producto');
      console.error("Error:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <article className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl bg-white p-4 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 mx-auto">
      <div className="relative aspect-square overflow-hidden rounded-xl w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-2 p-2">
        <h2 className="text-slate-700 font-semibold text-lg sm:text-xl">{title}</h2>
        <p className="mt-1 text-sm sm:text-base text-slate-400">{artista}</p>
        <p className={`mt-1 text-sm sm:text-base font-semibold ${stock > 0 ? "text-green-600" : "text-red-500"}`}>
          {stock > 0 ? `Stock: ${stock}` : "Agotado"}
        </p>
        <div className="mt-3 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
          <div className="flex items-center gap-2">

            <div className="flex items-center gap-2">
              {descuento > 0 ? (
                <>
                  <p className="text-lg sm:text-xl font-bold text-orange-300">{descuento}€</p>
                  <p className="text-sm sm:text-base font-semibold text-gray-400 line-through">{price}€</p>
                </>
              ) : (
                <p className="text-lg sm:text-xl font-bold text-orange-300">{price}€</p>
              )}
            </div>

          </div>
          <button
        onClick={manejarAgregarCarrito}
        disabled={stock === 0 || isAdding}
        className={`flex items-center justify-center space-x-1.5 rounded-lg px-2 sm:px-4 py-1.5 w-full xs:w-auto text-sm sm:text-base ${
          stock > 0
            ? "!bg-orange-100 hover:!bg-orange-200 text-black"
            : "!bg-gray-300 !text-gray-500 cursor-not-allowed"
        } transition-colors duration-200`}
      >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            
            <span>
          {isAdding ? "Añadiendo..." : stock > 0 ? "Añadir" : "Sin stock"}
        </span>
          </button>
        </div>
      </div>
    </article>
  );
};

const ProductList = ({ products }) => {
  return (
    <section className="py-10 bg-slate-300 rounded-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
