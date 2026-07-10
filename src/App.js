import './App.css';
import { Fragment } from 'react';
/*import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";*/
import { /*HashRouter as Router,*/ Route, Routes } from "react-router-dom";

import Home from './component/Home';
import Layout from "./component/Layout";

import SistemaCalibraciones from "./component/pages/SistemaCalibraciones";
import ScrollToTop from "./component/ScrollToTop";
import BatallaNaval from "./component/pages/BatallaNaval";
import ArbolesBinarios from './component/pages/ArbolesBinarios';
import PilasColas from './component/pages/PilasYColas';
import TecUnahur from './component/pages/TecUnahur';

function App() {
  return(
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />  
          <Route path="/proyectos/inti" element={<SistemaCalibraciones />} />
          <Route path="/proyectos/batalla-naval" element={<BatallaNaval />} />
          <Route path="/proyectos/arboles-binarios" element={<ArbolesBinarios />}/>
          <Route path="/proyectos/pilas-colas" element={<PilasColas />}/>
          <Route path="/proyectos/tec-unahur" element={<TecUnahur />}/>
        </Route>
      </Routes>
    </>
  );
  
}
export default App;

/*
<Route path="/Proyectos" element={<Proyectos />} />
<Route path="/Experiencia" element={<Experiencia />} />
<Route path="/Educacion" element={<Educacion />} />

<Barra />
*/

/*
( 
    
      <div>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Experiencia" element={<Experiencia />} />
          <Route path="/Educacion" element={<Educacion />} />
        </Routes>
      </div>
      
    
  });*/