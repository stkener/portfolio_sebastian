import React, { Fragment, useEffect, useState } from "react";

import python_ico from "./documents/Python-logo.png";
import kotlin_ico from "./documents/Kotlin_logo.png";
import html_ico from "./documents/HTML-logo.png";
import css_ico from "./documents/CSS-logo.png";
import nodejs_ico from "./documents/nodejs-icono.png";
import react_ico from "./documents/React-icono.png";
import sql_ico from "./documents/Sql-logo.png";
import mysql_ico from "./documents/MySQL-icono.png";
import c_ico from "./documents/c-ico.png";
import boot_ico from "./documents/bootstrap_ico.png"
import js_ico from "./documents/js-logo.png"
import seq_ico from "./documents/seq-logo.png"

import Barra from './Barra.jsx';


const About = () => {
    
    return (
        <div className="contenedorAboutGeneral">
            <Barra />
                        
            <div className="contenedorAboutSkills">
                <div className="contenedorHabilidades">
                    <h1 className="titulos">Skills</h1>
                    
                    <div className="contenedorSkills">
                        <div>
                            <p className="fuenteFicha">Frontend</p>
                            <div>
                                <span className="unaSkill"><img className="imagenLogos" src={react_ico} alt="" /><p>React</p></span>
                                <span className="unaSkill"><img className="imagenLogos" src={html_ico} alt="" /><p>HTML</p></span>
                                <span className="unaSkill"><img className="imagenLogos" src={css_ico} alt="" /><p>CSS</p></span>
                                <span className="unaSkill"><img className="imagenLogos" src={js_ico} alt="" /><p>JavaScript</p></span>
                                <span className="unaSkill"><img className="imagenLogos" src={boot_ico} alt="" /><p>Boostrap</p></span>
                            </div>
                        </div>
                        <div>
                            <p className="fuenteFicha">Backend</p>
                            <div>
                                <span className="unaSkill"><img className="imagenLogos" src={nodejs_ico} alt="" /><p>Node.js</p></span>
                                <span className="unaSkill"><img className="imagenLogos" src={python_ico} alt="PythonLogo" /><p>Python</p></span>
                                <span className="unaSkill"><img className="imagenLogos" src={kotlin_ico} alt="" /><p>Kotlin</p></span>
                                <span className="unaSkill"><img className="imagenLogos" src={c_ico} alt="" /><p>C</p></span>
                            </div>
                        </div>
                        <div className="contenedorBase">
                            <p className="fuenteFicha">Base de datos</p>
                            <div>
                                <span className="unaSkill"><img className="imagenLogos" src={sql_ico} alt="" /><p>SQL</p></span>
                                <span className="unaSkill"><img className="imagenLogos" src={mysql_ico} alt="" /><p>MySQL</p></span>
                                <span className="unaSkill"><img className="imagenLogos" src={seq_ico} alt="" /><p>Sequelize</p></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedorParrafoAbout">
                    <h1 className="titulos">About</h1>
                    
                    <p className="fuenteParrafosAbout">
                        Conocí la programación cursando la carrera de ingeniería en electrónica, 
                        utilice el lenguaje C y apliqué los conceptos fundamentales en un proyecto final.
                    </p> 
                    <p className="fuenteParrafosAbout">
                        Con esta pequeña introducción descubrí lo apasionante que podía ser el 
                        mundo de la programación, por eso decidí seguir plenamente este camino, 
                        ingrese en la Universidad Nacional de Hurlingham donde 
                        amplie y profundice mis conocimientos.
                    </p>
                    <p className="fuenteParrafosAbout">
                        De a poco sume nuevas habilidades que me me dan una mejor formacion Fullstack. 
                        Estudie la programación orientada a objetos con Kotlin, aplicando los principales 
                        patrones de diseño y utilizando el IDE Intellij Idea. Conoci y puse en practica
                        el funcionamiento de una base de datos haciendo el diseño en Enterprise Architect 
                        y utilizando MariaDB para la implementación con SQL. Utilizando Python construí 
                        distintas estructuras de datos como listas enlazadas, colas, pilas y arboles binarios de búsqueda. 
                        Para construir Frontend aprendi Html, Css, ReactJs e implemente Boostrap. Para el
                        Backend aprendi a construir Apis con JavaScript.
                    </p>                    
                </div>
            </div>

        </div>
    );
}
export default About;

/*
<div className="containerFichaCuerpo">
*/