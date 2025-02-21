import React from "react";
import ProductList from "./ProductList"; // Asegúrate de que la ruta sea correcta

function Main() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Photoshop CC 2022",
      location: "Lisbon, Portugal",
      price: 850,
    },
    {
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Illustrator CC 2022",
      location: "Madrid, Spain",
      price: 950,
    },
    {
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Photoshop CC 2022",
      location: "Lisbon, Portugal",
      price: 850,
    },
    {
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Illustrator CC 2022",
      location: "Madrid, Spain",
      price: 950,
    },
    {
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Photoshop CC 2022",
      location: "Lisbon, Portugal",
      price: 850,
    },
    {
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Illustrator CC 2022",
      location: "Madrid, Spain",
      price: 950,
    },
    {
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Photoshop CC 2022",
      location: "Lisbon, Portugal",
      price: 850,
    },
    {
      image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Adobe Illustrator CC 2022",
      location: "Madrid, Spain",
      price: 950,
    },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full md:mt-20 mt-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-700 mb-8 md:mb-12 font-FiraSans mt-40">
        Ven a ver nuestros productos
      </h1>
      <ProductList products={products} />
    </div>
  );
}

export default Main;



 {/* <section className="py-10 bg-slate-300 rounded-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          <article className="rounded-xl bg-white p-4 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 max-w-sm mx-auto">
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Hotel Photo"
                className="w-full object-cover"
              />
            </div>

            <div className="mt-2 p-2">
              <h2 className="text-slate-700 font-semibold text-lg">Adobe Photoshop CC 2022</h2>
              <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-lg font-bold text-orange-300">850€</p>
                <button
                  className="flex items-center space-x-1.5 rounded-lg !bg-orange-100 px-4 py-1.5 text-black duration-100 hover:!bg-orange-200"
                  aria-label="Add to cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                  
                  <span className="text-sm">Add to cart</span>
                </button>
              </div>
            </div>
          </article>

        </div>
      </section> */}