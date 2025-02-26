function NosotrosVista() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-25 -mb-25">
      <section className=" bg-slate-400 text-white shadow-xl rounded-xl p-10 md:p-14 lg:p-20 w-full max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-4 text-orange-200">¿Quiénes somos?</h2>
          <p className="text-lg">Somos una tienda apasionada por la música en vinilo, ofreciendo una amplia selección de discos de vinilo de alta calidad para los amantes de la música.</p>
          <p className="text-lg mb-4">Nuestro objetivo es revivir la magia del vinilo y proporcionar una experiencia musical única que solo se encuentra en este formato clásico.</p>
          <p className="text-lg">Queremos que disfrutes de la música de manera diferente, con una sonoridad y una textura que solo se encuentra en el vinilo.</p>
        </div>

        <div className="border-t border-orange-200 pt-10 text-center">
          <h2 className="text-5xl font-bold mb-4  text-orange-200">¿Qué vendemos?</h2>
          <p className="text-lg mb-4">Ofrecemos vinilos de diferentes géneros y épocas, asegurándonos de que cada disco esté en excelentes condiciones para nuestros clientes.</p>
          <p className="text-lg">Nuestro catálogo se actualiza constantemente con nuevos títulos y reediciones de clásicos, para que siempre puedas encontrar algo nuevo y emocionante.</p>
          <p className="text-lg">Además, ofrecemos un servicio de personalización de vinilos, para que puedas crear tu propio disco con tu lista de canciones favoritas.</p>
        </div>

        <div className="border-t border-orange-200 pt-10 text-center">
          <h2 className="text-5xl font-bold mb-4 text-orange-200">Contáctanos</h2>
          <p className="text-lg">Para cualquier consulta, no dudes en <a href="/contacto" className="text-yellow-300 hover:text-yellow-500 transition font-semibold">ponerte en contacto 👈</a> con nosotros.</p>
          <p className="text-lg">Puedes enviarnos un correo electrónico a <a href="mailto:contacto@agujaevinilo.com" className="text-yellow-300 hover:text-yellow-500 transition font-semibold">contacto@agujaevinilo.com</a>, o llamar al <a href="tel:+34 444444444" className="text-yellow-300 hover:text-yellow-500 transition font-semibold">+34 444 444 444 </a>.</p>
        </div>
      </section>
    </div>
  );
}

export default NosotrosVista;