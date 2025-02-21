import { useState } from 'react'
import './App.css'
import Sidebar from './componentes/Sidebar'
import Header from './componentes/Header'
import Main from './componentes/Main'

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Carrito from './paginas/rutasMain/Carrito'
import Productos from './paginas/rutasMain/Productos'
import SobreNosotros from './paginas/rutasMain/SobreNosotros'
import Footer from './componentes/Footer'

import "./estilos/estilos.css";


function MainWrapper() {
  const location = useLocation();
  return location.pathname === "/" ? <Main /> : null;
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Header />

        {/* <Sidebar /> */}

        <MainWrapper />



        <Routes>
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
        </Routes>

      </Router>

      <Footer />

    </>
  )
}

export default App
