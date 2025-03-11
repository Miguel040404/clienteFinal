import React, { useState } from "react";
import toast from 'react-hot-toast';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">
      <div className="relative bg-white rounded-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 !bg-orange-300 text-gray-500 hover:text-gray-700 hover:!bg-yellow-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-square overflow-hidden rounded-xl">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 mt-10">
            <h2 className="text-2xl font-bold text-slate-800">{product.title}</h2>
            <p className="text-lg text-slate-600"> <span className="font-bold">Artista:</span>  {product.artista}</p>
            <p className="text-lg text-slate-600"><span className="font-bold">Género:</span> {product.genero}</p>
            
            <div className="space-y-2">
              <p className={`text-lg ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
                {product.stock > 0 ? `Disponible (${product.stock} unidades)` : "Agotado"}
              </p>
              
              <div className="flex items-center gap-3">
                {product.descuento > 0 ? (
                  <>
                    <span className="text-3xl font-bold text-orange-500">
                      {product.descuento}€
                    </span>
                    <span className="text-xl text-gray-400 line-through">
                      {product.price}€
                    </span>
                    <span className="text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded">
                      {Math.round(((product.price - product.descuento) / product.price) * 100)}% OFF
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-orange-500">
                    {product.price}€
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                product.manejarAgregarCarrito(e);
                onClose();
              }}
              disabled={product.stock === 0}
              className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 ${
                product.stock > 0
                  ? "!bg-orange-100 hover:!bg-orange-200 !text-black"
                  : "!bg-gray-300 !text-gray-500 cursor-not-allowed"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ 
  id, 
  image, 
  title, 
  artista, 
  genero,
  price, 
  stock, 
  descuento,
}) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const manejarAgregarCarrito = async (e) => {
    e.stopPropagation();
    setIsAdding(true);
    try {
      const respuesta = await fetch('https://nxapi-mongodb-cliente.vercel.app/api/carrito', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productoId: id,
          titulo: title,
          precio: price,
          imagen_portada: image,
          artista: artista,
          stock: stock,
          genero: genero,
          descuento: descuento
        })
      });

      if (!respuesta.ok) throw new Error('Error al agregar al carrito');
      toast.success('¡Producto añadido al carrito!');
    } catch (error) {
      toast.error(error.message || 'Error al agregar el producto');
      console.error("Error:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <>
      <article 
        onClick={() => setIsModalOpen(true)}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl bg-white p-4 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 mx-auto cursor-pointer"
      >
        <div className="relative aspect-square overflow-hidden rounded-xl w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-2 p-2">
          <h2 className="text-slate-700 font-semibold text-lg sm:text-xl">{title}</h2>
         
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
              onClick={(e) => {
                e.stopPropagation();
                manejarAgregarCarrito(e);
              }}
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

      {isModalOpen && (
        <ProductModal
          product={{
            id,
            image,
            title,
            artista,
            genero,
            price,
            stock,
            descuento,
            manejarAgregarCarrito: (e) => {
              e.stopPropagation();
              manejarAgregarCarrito(e);
            }
          }}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

const ProductList = ({ products }) => {
  return (
    <section className="py-10 bg-slate-300 rounded-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            id={product.id}
            image={product.image}
            title={product.title}
            artista={product.artista}
            genero={product.genero}
            price={product.price}
            stock={product.stock}
            descuento={product.descuento}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;