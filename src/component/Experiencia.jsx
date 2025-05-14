import React, { Fragment, useEffect, useState } from "react";
import { experiencias, otrasExperiencias } from "./data/ExperienciaDatos.js"
import Barra from './Barra.jsx';
import {TarjetaExperienciaInformatica, TarjetaOtrasExperiencias} from "./TarjetaExperiencias.jsx"

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Experiencia = () => {
    

    const [mostrarInformacion, setMostrarInformacion] = useState(false);

    const expandir = () => {
        setMostrarInformacion(!mostrarInformacion);
    };

    return (
        
       <div>
            <Barra />
                <div className="paginaProyectos">            
                <div className="contenedorProyectos">
                    <h1 className="titulos">Experiencia</h1>
                    <div className="unaClase">{/*contenidoGridCuerpo cuerpoExperiencia*/}
                        {
                           experiencias.map((e, index) => (
                            <TarjetaExperienciaInformatica key={index} experienciaInformatica={e} />

                           )) 
                        }
                    </div>
                    <div className="contenidoGridCuerpo">
                        <div className="contenedorTituloIconoExp">
                            <p className="letraPuestoTrabajo">Experiencias fuera de informatica</p>
                            <button onClick={expandir} className="estiloBotonExpandible ">
                                {mostrarInformacion ? 
                                    <span className="estiloIconoBotonExp"><IoIosArrowUp /></span> 
                                    : 
                                    <span className="estiloIconoBotonExp"><IoIosArrowDown /></span>
                                }
                            </button>
                        </div>
                        <div>
                        {mostrarInformacion && (
                            otrasExperiencias.map((e, index) => (
                                <TarjetaOtrasExperiencias key={index} otraExperiencia={e}/>
                                /*<article key={index} class="articuloTrabajo cuerpoExperiencia">
                                    <div className="contenedorInicioExpe">
                                        <span class="letraPuestoTrabajo">{e.Puesto}</span>
                                        <span class="letraTrabajoCursiva">{e.Empresa}</span>
                                        <span class="letraTrabajoCursiva">{e.desdeHasta}</span>           
                                    </div>
                                    <div className="">
                                        <p class="subTitulos">Funciones</p>
                                        <ul class="estiloListaTrabajo letraTrabajo">
                                            {e.funciones.map((f, index) => (
                                                <li key={index}>{f}</li>
                                                ))
                                            }
                                        </ul>                                    
                                    </div>
                                </article>*/
                            )) 
                        )}
                        </div>
                    </div>
                </div>
            </div>
       </div> 
       
    );
}
export default Experiencia;

/*
</button>
*/



/*
<article class="">
                            <p><span class="">Gestor de aplicaciones de soporte</span><br>
                            <span class="">Caja de Retiros, Jubilaciones y Pensiones de la Policía Federal</span><br>
                            <span class="">{}</span></p>

                            <p class="letraTrabajo estiloSubtituloTrabajo">FUNCIONES</p>
                            <ul class="letraTrabajo estiloListaTrabajo">
                                <li>Desarrollo y mantenimiento de funcionalidades en el sistema de la Institución.</li>
                                <li>Prueba e implementación de las aplicaciones informáticas de la Institución.</li>
                                <li>Mantenimiento y soporte de las aplicaciones informáticas de la Institución.</li>
                            </ul>

                            <p class="letraTrabajo estiloSubtituloTrabajo">TECNOLOGIAS</p>
                            <ul class="letraTrabajo estiloListaTrabajo">
                                <li>Base de datos Informix</li>
                                <li>SQL</li>
                                <li>Genero Business Development Language (BDL) - Informix 4GL</li>
                            </ul>
                        </article>
*/