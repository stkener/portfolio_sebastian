import React, { Fragment, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import {cursos, otrosCursos, titulos} from "./data/EducacionDatos.js"

import Barra from './Barra.jsx';


const Educacion = () => {
    

    const [mostrarGaleria, setMostrarGaleria] = useState(false);
    const [imagenSeleccionada, setImagenSeleccionada] = useState('');

    const mostrarImagen = (src) => {
        setImagenSeleccionada(src);
        setMostrarGaleria(true);
    };

    const cerrarGaleria = () => {
        setMostrarGaleria(false);
    };

    return (
       <Fragment>
       <div>
            <Barra />
            <div className="paginaProyectos"> {/*containerFichaCuerpo*/}
                <div className="contenedorProyectos">{/**/}
                    <h1 className="titulos tituloProyectos">Educacion</h1>{/*titulosCuerpo paddinResponsive*/}
                    <div className="unaClase">{/*contenidoGridCuerpo*/}
                        {
                            titulos.map((t, index) => (
                                <article key={index} class="articuloTrabajo marginEducacion">
                                    <div className="contenedorInicioExpe">
                                        <span class="letraPuestoTrabajo">{t.titulo}</span>
                                        <span class="letraTrabajoCursiva">{t.institucion}</span>
                                        <span class="letraTrabajoCursiva">{t.año}</span>           
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>
                <div className="contenedorDeCursos">
                    <h1 className="titulos">Cursos</h1>{/*titulosCuerpo paddinResponsive*/}
                    <div className="contenedorGridCursos"> {/**/}
                        {
                            cursos.map((c, index) => (
                                <article key={index} className="contenedorArticuloCursos">
                                    <p class="letraTrabajoCursiva">{c.nombre}</p>
                                    <img 
                                        key={index} 
                                        class="imagenCursos" 
                                        src={c.img} 
                                        title={c.nombre}
                                        onClick={(e) => mostrarImagen(c.img)}
                                    />
                                    <p className="letraTrabajoCursiva">{c.año}</p>
                                </article>
                            ))
                        }
                    </div>
                </div>
                <div className="contenedorDeCursos">
                    <h1 className="titulos">Otros Cursos</h1>{/*titulosCuerpo paddinResponsive*/}
                    <div className="contenedorGridCursos">
                        {
                            otrosCursos.map((c, index) => (
                                <article key={index} className="contenedorArticuloCursos">
                                    <p class="letraTrabajoCursiva">{c.nombre}</p>
                                    <img 
                                        key={index} 
                                        class="imagenCursos" 
                                        src={c.img} 
                                        title={c.nombre}
                                        onClick={(e) => mostrarImagen(c.img)}
                                    />
                                    <p className="letraTrabajoCursiva">{c.año}</p>
                                </article>
                            ))
                        }
                    </div>
                    {mostrarGaleria && (
                        <div 
                            id="galeria" 
                            className="contenedorGaleria" 
                            onClick={cerrarGaleria}
                        >
                            <img 
                                className="imagenGaleria"
                                id="imgGal" 
                                src={imagenSeleccionada} 
                                alt="Imagen seleccionada" 
                            />
                            <button 
                                className="botonGaleria" 
                                onClick={cerrarGaleria}
                            >
                                <IoCloseOutline />
                            </button>
                        </div>
                    )}
                
                </div>
            </div>
       </div> 
       </Fragment> 
    );
}
export default Educacion;