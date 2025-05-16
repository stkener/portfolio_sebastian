import React, { Fragment, useEffect, useState } from "react";
/*import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";*/
import { Link } from "react-router-dom";
/*import { HashRouter as Router, Route, Routes } from "react-router-dom";*/


const Barra = () => {
    const [menuActivo, setMenuActivo] = useState(false);

    const activarMenu = () => {
        setMenuActivo(!menuActivo);
    };

    
    return (
            <div className="estiloBarraMenu">
            
                <div className={`contenedorIconoMenu ${menuActivo ? 'cruz' : ''}`} onClick={activarMenu}>
                    <span className="lineaUno"></span>
                    <span className="lineaDos"></span>
                    <span className="lineaTres"></span>
                </div>
                <div >
                    <ul className={`estiloLista ${menuActivo ? 'activo' : ''}`}>
                        <li className="itemLista">
                            <Link to="/" className="estiloLink">
                                <span className="open-sans">Intro</span>
                            </Link>
                        </li>
                        <li className="itemLista">
                            <Link to="/Home" className="estiloLink">
                                <span className="open-sans">Home</span>
                            </Link>
                        </li>
                        <li className="itemLista">
                            <Link to="/About" className="estiloLink">
                                <span className="open-sans">About Me</span>
                            </Link>
                        </li>
                        <li className="itemLista">
                            <Link to="/Proyectos" className="estiloLink">
                                <span className="open-sans">Proyectos</span>
                            </Link>
                        </li>
                        <li className="itemLista">
                            <Link to="/Experiencia" className="estiloLink">
                                <span className="open-sans">Experiencia</span>
                            </Link>
                        </li>
                        <li className="itemLista">
                            <Link to="/Educacion" className="estiloLink">
                                <span className="">Educacion</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            
            
        </div>
    );
}

export default Barra;
/*
import { FaHome } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { BsPersonFill } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import { FaBook } from "react-icons/fa";


<FaHome />
<BsPersonFill />
<FaGears />
<FaWrench />
<FaBook />

ELIMINAR:
transformacionPalabra
*/