import React, { Fragment, useEffect, useState } from "react";
import Tarjeta from './TarjetaProyecto.jsx'
import { proyectosLista } from './data/ProyectosDatos.js';


import Barra from './Barra.jsx';

const Proyectos = () => {
       
    return (
        <Fragment>
       <div>
            <Barra />
            <div className="paginaProyectos">
                <div className="contenedorProyectos">
                    <h1 className="titulos tituloProyectos">Proyectos</h1>
                    <div className="proyetosGrid">
                       {proyectosLista.map((proyecto, index) => (
                            <Tarjeta proyecto={proyecto} key={index} />
                        ))}
                    </div>
                </div>
            </div>                
       </div> 
       </Fragment>
    );
}
export default Proyectos;