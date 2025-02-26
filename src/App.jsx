
import './App.css'
import Header from './componentes/Header'
import Main from './componentes/Main'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Carrito from './paginas/rutasMain/Carrito'
import Productos from './paginas/rutasMain/Productos'
import SobreNosotros from './paginas/rutasMain/SobreNosotros'
import Footer from './componentes/Footer'
import "./estilos/estilos.css";
import { Toaster } from 'react-hot-toast'

// function MainWrapper() {
//   const location = useLocation();
//   return location.pathname === "/" ? <Main /> : null;
// }

function App() {
  return (
    <div className="min-h-screen flex flex-col"> 
      <Router>
        <Toaster />
        
        <Header />

        
        <main className="flex-1">
          {/* <MainWrapper /> */}
          
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/sobrenosotros" element={<SobreNosotros />} />
          </Routes>
        </main>

      </Router>
      
      <Footer className="mt-auto" />
    </div>
  )
}

export default App