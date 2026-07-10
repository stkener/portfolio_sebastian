/*import React, { Fragment, useEffect, useState } from "react";

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
*/

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

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-900">
            <div className="max-w-5xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-white mb-10">
                    Sobre mí
                </h2>

                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">

                    <p>
                        Soy Técnico Universitario en Programación y estudiante de la Licenciatura en Informática en la Universidad Nacional de Hurlingham.
                    </p>

                    <p>
                        Disfruto desarrollar soluciones de software que ayuden a simplificar procesos, organizar información y resolver problemas reales dentro de organizaciones e instituciones.
                    </p>

                    <p>
                        Durante mi formación participé en proyectos académicos e institucionales, desarrollando aplicaciones web, automatizaciones y herramientas de gestión. Realicé una práctica profesional en el INTI, donde diseñé un sistema automatizado de alertas para el seguimiento de calibraciones mediante Microsoft Power Platform.
                    </p>

                    <p>
                        Mi recorrido también incluye experiencia como Estudiante Asistente en la Universidad Nacional de Hurlingham, donde combiné el acompañamiento académico con el desarrollo de herramientas digitales para optimizar la organización de actividades educativas.
                    </p>

                    <p>
                        Me interesa seguir creciendo como desarrollador, combinando el desarrollo de software, la automatización de procesos, la documentación técnica y la mejora continua.
                    </p>

                </div>

            </div>
            
        </section>
    );
};

export default About;