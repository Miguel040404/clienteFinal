import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";

function Main() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("http://localhost:3000/api/productos?search")
       fetch("https://nxapi-mongodb-cliente.vercel.app/api/productos?search")
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.map((product) => ({
          image: product.imagen_portada,
          title: product.titulo,
          artista: product.artista,
          price: parseFloat(product.precio.$numberDecimal),
          stock: product.stock,
          descuento: product.descuento ? parseFloat(product.descuento.$numberDecimal) : 0
        }));

        setProducts(formattedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full md:mt-20 mt-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-700 mb-8 md:mb-12 font-FiraSans mt-40 !text-[30px] xl:!text-[40px]">
        "Colocar la aguja sobre un vinilo es abrir una puerta a otra época."
      </h1>
      {loading ? (
        <p className="text-center text-lg text-gray-600 animate-pulse">Cargando productos...</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
}

export default Main;