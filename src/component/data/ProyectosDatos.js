import ahorcadoConsola from "../documents/AhorcadoConsola.png";
import batallaNaval from "../documents/batallaNaval.png";
import ahorcadoGrafico from "../documents/ahorcadoGrafico.png";
import estudioJuridico from "../documents/estudioJuridico.png";
import alegra from "../documents/alegra.png";
import tragos from "../documents/tragosPop.png";

import python_ico from "../documents/Python-logo.png";
import kotlin_ico from "../documents/Kotlin_logo.png";
import html_ico from "../documents/HTML-logo.png";
import css_ico from "../documents/CSS-logo.png";
import nodejs_ico from "../documents/nodejs-icono.png";
import react_ico from "../documents/React-icono.png";
import sql_ico from "../documents/Sql-logo.png";
import mysql_ico from "../documents/MySQL-icono.png";
import c_ico from "../documents/c-ico.png";
import boot_ico from "../documents/bootstrap_ico.png"
import js_ico from "../documents/js-logo.png"
import seq_ico from "../documents/seq-logo.png"

export const proyectosLista = [
  {
    nombre: "Ahorcado en consola",
    img: ahorcadoConsola,
    descripcion: "Proyecto básico con Python, Introduccion al lenguaje.",
    demo:"",
    tecnologias: [python_ico],
    link: "https://github.com/stkener/Ahorcado.git"
  },
  {
    nombre: "Batalla Naval en consola",
    img: batallaNaval,
    descripcion: "Proyecto final de la materia Informatica I, Conceptos de programacion con C.",
    demo:"",
    tecnologias: [c_ico],
    link: "https://github.com/stkener/Batalla_Naval.git"
  },
  {
    nombre: "Ahorcado con Int. Grafica",
    img: ahorcadoGrafico,
    descripcion: "Proyecto de interfaz grafica con Python + mini base con sqlite.",
    demo:"",
    tecnologias: [python_ico],
    link: "https://github.com/stkener/Ahorcado-con-interfaz-grafica.git"
  },
  {
    nombre: "Pagina Estudio Juridico",
    img: estudioJuridico,
    descripcion: "Proyecto Frontend, practica de introduccion al html, css y js.",
    demo:"https://zuccarolegales.netlify.app/",
    tecnologias: [html_ico, css_ico, js_ico],
    link: "https://github.com/stkener/Pagina-EJ-Zuccaro.git"
  },
  {
    nombre: "Pagina Bazar",
    img: alegra,
    descripcion: "Proyecto Frontend, practica de introduccion al html, css y js.",
    demo:"",
    tecnologias: [html_ico, css_ico, js_ico],
    link: "https://github.com/stkener/Pagina-Alegra-Deco.git"
  },
  {
    nombre: "Pop Tragos",
    img: tragos,
    descripcion: "Proyecto Final de Construccion de Interfaces de Usuarios",
    demo:"",
    tecnologias: [html_ico, css_ico, nodejs_ico, react_ico, boot_ico],
    link: "https://github.com/stkener/proyectoFinalCIU-tragosPop"
  }
];