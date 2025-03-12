import React, { useEffect, useState } from "react";
import ProductList from "../ProductList";

function ProductosVista() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, ordebarPor] = useState("");

  useEffect(() => {
    // fetch("http://localhost:3000/api/productos?search")
    fetch("https://nxapi-mongodb-cliente.vercel.app/api/productos?search")

      .then((response) => response.json())
      .then((data) => {
        const formatoProductos = data.map((product) => ({
          image: product.imagen_portada,
          title: product.titulo,
          artista: product.artista,
          genero: product.genero,
          price: parseFloat(product.precio.$numberDecimal),
          stock: product.stock,
          descuento: parseFloat(product.descuento.$numberDecimal) || 0
        }));
        setAllProducts(formatoProductos);
        setFilteredProducts(formatoProductos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error);
        setLoading(false);
      });
  }, []);

  const busqueda = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    aplicarFiltros(term, sortBy);
  };

  const aplicarFiltros = (term = searchTerm, sortMethod = sortBy) => {
    let filtered = allProducts.filter(product =>
      product.title.toLowerCase().includes(term) ||
      product.artista.toLowerCase().includes(term)
    );

    if (sortMethod === "masBarato") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortMethod === "masCaro") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortMethod === "descuento") {
      filtered = filtered.filter(product => product.descuento > 0);
    }

    setFilteredProducts(filtered);
  };

  const manejo = (method) => {
    ordebarPor(prev => prev === method ? "" : method);
    aplicarFiltros(searchTerm, method);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full md:mt-20 mt-25 -mb-25">

      <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-700 mb-8 md:mb-12 font-FiraSans mt-40 !text-[30px] xl:!text-[40px]">
        Ven a ver nuestros productos
      </h1>

      <div className="mb-8 max-w-4xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Buscar por título o artista..."
          className="w-full p-4 rounded-lg border bg-orange-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-sm transition-all duration-300"
          value={searchTerm}
          onChange={busqueda}
        />

        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => manejo("masBarato")}
            className={`px-4 py-2 rounded-lg font-medium transition-all border !border-slate-300  ${sortBy === "masBarato"
              ? "!bg-orange-300 !text-white"
              : "!bg-orange-100 !text-gray-700 hover:!bg-orange-200"
              }`}
          >
            Precios mas bajos
          </button>

          <button
            onClick={() => manejo("masCaro")}
            className={`px-4 py-2 rounded-lg font-medium transition-all border !border-slate-300  ${sortBy === "masCaro"
              ? "!bg-orange-300 !text-white"
              : "!bg-orange-100 !text-gray-700 hover:!bg-orange-200"
              }`}
          >
            Precios mas altos
          </button>

          <button
            onClick={() => manejo("descuento")}
            className={`px-4 py-2 rounded-lg font-medium transition-all border !border-slate-300  ${sortBy === "descuento"
              ? "!bg-orange-300 !text-white"
              : "!bg-orange-100 !text-gray-700 hover:!bg-orange-200"
              }`}
          >
            Con descuento
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-center text-lg text-gray-600 animate-pulse">
          Cargando productos...
        </p>
      ) : filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p className="text-center text-gray-500 text-lg">
          No se encontraron productos que coincidan con "{searchTerm}"
        </p>
      )}
    </div>
  );
}

export default ProductosVista;
