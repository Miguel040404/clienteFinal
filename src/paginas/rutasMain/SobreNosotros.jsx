function SobreNosotros() {
  return (
    <div className="space-y-5 ml-35  mt-20 mb-10 text-gray-700 text-lg leading-relaxed tracking-wider text-justify rounded-xl bg-gray-200 -mr-15 p-10">
      <section className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-center mb-6 border-b border-gray-300">¿Quiénes somos?</h2>
        <p className="mb-4 text-gray-600">Somos una tienda apasionada por la música en vinilo. Nuestro objetivo es ofrecer una amplia selección de discos de vinilo de alta calidad para los amantes de la música.</p>

        <h2 className="text-3xl font-semibold text-center mb-6 border-b border-gray-300">¿Qué vendemos?</h2>
        <p className="mb-4 text-gray-600">Vendemos exclusivamente vinilos de diferentes géneros y épocas, asegurándonos de que cada disco esté en excelentes condiciones para nuestros clientes.</p>
        <p className="mb-4 text-gray-600">Queremos revivir la magia del vinilo y proporcionar una experiencia musical única que solo se puede encontrar en este formato clásico.</p>

        <h2 className="text-3xl font-semibold text-center mb-6 border-b border-gray-300">Contáctanos</h2>
        <p className="text-gray-600">Para cualquier consulta, no dudes en <a href="/contacto" className="text-indigo-600 hover:text-indigo-800 transition">ponerte en contacto 👈</a> con nosotros.</p>
      </section>
    </div>
  );
}

export default SobreNosotros;