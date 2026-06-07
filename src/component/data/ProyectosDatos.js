import ahorcadoConsola from "../documents/AhorcadoConsola.png";
import batallaNaval from "../documents/batallaNaval.png";
import ahorcadoGrafico from "../documents/ahorcadoGrafico.png";
import estudioJuridico from "../documents/estudioJuridico.png";
import kanjoVives from "../documents/kanjoVives.png";
import calculadoraML from "../documents/calculadoraML.png";
import tec2025 from "../documents/tec2025.png"

import python_ico from "../documents/Python-logo.png";
import kotlin_ico from "../documents/Kotlin_logo.png";
import html_ico from "../documents/HTML-logo.png";
import css_ico from "../documents/CSS-logo.png";
import nodejs_ico from "../documents/nodejs-icono.png";
import react_ico from "../documents/React-icono.png";
import sql_ico from "../documents/Sql-logo.png";
import mysql_ico from "../documents/MySQL-icono.png";
import c_ico from "../documents/c-ico.png";
import boot_ico from "../documents/bootstrap_ico.png";
import js_ico from "../documents/js-logo.png";
import seq_ico from "../documents/seq-logo.png";
import tailwin_ico from "../documents/tailwin_ico.png"

import sabato from "../documents/sabato.png";


export const proyectosDestacados = [
  {
    nombre: "Proyecto +TEC UNAHUR 2025",
    img: tec2025,
    descripcion: "Participacion en proyecto institucional: Plataforma educativa para gestionar y automatizar la realización y corrección de ejercitaciones, trabajos prácticos, evaluaciones y proyectos de software",
    tecnologias: [],
    demo:"https://mate.unahur.edu.ar/",
    link: "",
    estado: "Online"
  },
];

export const desarrolloWeb = [
  {
    nombre: "Pagina Colegio E. Sabato",
    img: sabato,
    descripcion: "Proyecto landing Page, en proceso, para el colegio Ernesto Sabato",
    demo:"https://colegioernestosabatohurlingham.netlify.app/",
    tecnologias: [html_ico, css_ico, js_ico,react_ico ],
    link: "https://github.com/stkener/paginaSabato"
  },
  {
    nombre: "Pagina Estudio Juridico",
    img: estudioJuridico,
    descripcion: "Proyecto Frontend, practica de introduccion al html, css y js.",
    demo:"https://zuccarolegales.netlify.app/",
    tecnologias: [html_ico, css_ico, js_ico],
    link: "https://github.com/stkener/Pagina-EJ-Zuccaro.git"
  },
];

export const herramientasAutomatizacion = [
  {
    nombre: "Kanjo Vives",
    img: kanjoVives,
    descripcion: "Landing page de mayorista autopartista + lista interactiva con buscador",
    tecnologias: [react_ico,  js_ico, tailwin_ico],
    demo:"https://kanjovibes.netlify.app/",
    link: "https://github.com/stkener/kanjoVibes",
    estado: "Online"
  },
  {
    nombre: "Calcula Mercado Libre",
    img: calculadoraML,
    descripcion: "Simulacion MercadoLibre y MercadoPago, feed de noticias y articulos relacionados",
    tecnologias: [react_ico,  js_ico, tailwin_ico],
    demo:"https://calculadora-mercadolibre.netlify.app/",
    link: "https://github.com/stkener/calculadoramlmp",
    estado: "Online"
  },
];

export const proyectosAcademicos = [
  {
    nombre: "Batalla Naval en consola",
    img: batallaNaval,
    descripcion: "Proyecto final de la materia Informatica I, Conceptos de programacion con C.",
    tecnologias: [c_ico],
    demo:"",
    link: "https://github.com/stkener/Batalla_Naval.git",
    estado: "Finalizado"
  },
];

export const proyectosAprendizaje = [
  {
    nombre: "Ahorcado con Int. Grafica",
    img: ahorcadoGrafico,
    descripcion: "Proyecto de interfaz grafica con Python + mini base con sqlite.",
    tecnologias: [python_ico],
    demo:"",
    link: "https://github.com/stkener/Ahorcado-con-interfaz-grafica.git",
    estado: "Finalizado"
  },
  {
    nombre: "Ahorcado en consola",
    img: ahorcadoConsola,
    descripcion: "Proyecto básico con Python, Introduccion al lenguaje.",
    tecnologias: [python_ico],
    demo:"",
    link: "https://github.com/stkener/Ahorcado.git",
    estado: "Finalizado"
  },
];
