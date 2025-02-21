function Footer() {
    return (
        <footer className="bg-gradient-to-r from-slate-900 to-slate-500 w-full py-4 mt-12 shadow-md">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
                
                <p className="text-yellow-50 text-center md:text-left text-sm md:text-base">
                    &copy; {new Date().getFullYear()} AGUJA & VINILO. Todos los derechos reservados.
                </p>

                <nav className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="text-orange-300 hover:text-yellow-500 text-sm md:text-base">Términos</a>
                    <a href="#" className="text-orange-300 hover:text-yellow-500 text-sm md:text-base">Privacidad</a>
                    <a href="#" className="text-orange-300 hover:text-yellow-500 text-sm md:text-base">Contacto</a>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;