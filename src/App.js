import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
/*import { HashRouter as Router, Route, Routes } from "react-router-dom";*/

import Intro from './component/Intro';
import Home from './component/Home';
import Barra from "./component/Barra";
import About from "./component/About";
import Proyectos from "./component/Proyectos";
import Experiencia from "./component/Experiencia";
import Educacion from "./component/Educacion";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Experiencia" element={<Experiencia />} />
          <Route path="/Educacion" element={<Educacion />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;

/*
<Route path="/Proyectos" element={<Proyectos />} />
<Route path="/Experiencia" element={<Experiencia />} />
<Route path="/Educacion" element={<Educacion />} />

<Barra />
*/