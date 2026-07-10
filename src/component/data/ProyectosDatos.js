import ahorcadoConsola from "../documents/AhorcadoConsola.png";
import batallaNaval from "../documents/batallaNaval.png";
import ahorcadoGrafico from "../documents/ahorcadoGrafico.png";
import estudioJuridico from "../documents/estudioJuridico.png";
import kanjoVives from "../documents/kanjoVives.png";
import calculadoraML from "../documents/calculadoraML.png";
import tec2025 from "../documents/tec2025.png";
import estasis from "../documents/estasis.png";
import ppsinti from "../documents/ppsinti.png";
import abb from "../documents/abb.png"
import abo from "../documents/abo.png"

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
import tailwin_ico from "../documents/tailwin_ico.png";
import powau_ico from "../documents/poweautomate.png";
import powapp_ico from "../documents/powerapps.png";

import sabato from "../documents/sabato.png";


export const proyectosDestacados = [
  {
    nombre: "Sistema de Alertas de Calibraciones",
    img: ppsinti,
    descripcion: "Desarrollo de una solución interna durante mi Práctica Profesional Supervisada en el Instituto Nacional de Tecnología Industrial (INTI), orientada a automatizar el seguimiento de las calibraciones de equipos de laboratorio.",
    tecnologias: [powau_ico, powapp_ico],
    botones: [
      {
        texto:"Ver Proyecto",
        icono:"eye",
        url: "/proyectos/inti",
      },
    ],
    
  },
  
];

export const desarrolloWeb = [
  {
    nombre: "Pagina Estudio Juridico",
    img: estudioJuridico,
    descripcion: "Landing Page para Estudio Juridico, React, Html, Js, Tailwind",
    tecnologias: [react_ico, html_ico, js_ico, tailwin_ico],
    botones: [
      {
        texto:"Demo",
        icono:"eye",
        url: "https://zuccarolegales.netlify.app/",
      },
      {
        texto:"Github",
        icono:"github",
        url: "https://github.com/stkener/Pagina-EJ-Zuccaro.git",
      }
    ],
    estado: "Online",
  },
  {
    nombre: "Kanjo Vives",
    img: kanjoVives,
    descripcion: "Sitio para mayorista de repuestos automotores con catálogo, buscador de productos e interfaz responsive.",
    tecnologias: [react_ico, html_ico, js_ico, tailwin_ico],
    botones: [
      {
        texto:"Demo",
        icono:"eye",
        url: "https://kanjovibes.netlify.app/",
      },
      {
        texto:"Github",
        icono:"github",
        url: "https://github.com/stkener/kanjoVibes",
      }
    ],
    estado: "Online"
  },
  {
    nombre: "Calcula Mercado Libre",
    img: calculadoraML,
    descripcion: "Simulacion MercadoLibre y MercadoPago, feed de noticias y articulos relacionados",
    tecnologias: [react_ico, html_ico, js_ico, tailwin_ico],
    botones: [
      {
        texto:"Demo",
        icono:"eye",
        url: "https://calculadora-mercadolibre.netlify.app/",
      },
      {
        texto:"Github",
        icono:"github",
        url: "https://github.com/stkener/calculadoramlmp",
      }
    ],
    estado: "Online"
  },
  {
    nombre: "Pagina Colegio E. Sabato",
    img: sabato,
    descripcion: "Proyecto landing Page, en proceso, para el colegio Ernesto Sabato",
    tecnologias: [html_ico, css_ico, js_ico,react_ico ],
    botones: [
      {
        texto:"Demo",
        icono:"eye",
        url: "https://colegioernestosabatohurlingham.netlify.app/",
      },
      {
        texto:"Github",
        icono:"github",
        url: "https://github.com/stkener/paginaSabato",
      }
    ],
  },
  
];

export const proyectosInstitucionales = [
  
  {
    nombre: "Espacio de Organización para Estudiantes Asistentes",
    img:estasis,
    descripcion: "Desarrollo de una aplicación web orientada a centralizar la organización del equipo de estudiantes asistentes de la asignatura Cultura y alfabetización digital en la universidad (UNAHUR).",
    tecnologias: [react_ico, js_ico, tailwin_ico],
    botones: [
      {
        texto:"Demo",
        icono:"eye",
        url: "https://ne-automatizacion-ea.vercel.app/",
      },
      {
        texto:"Github",
        icono:"eye",
        url: "https://github.com/stkener/Proyecto_NE_AutomatizacionEA",
      },
    ],
    
  },
  {
    nombre: "Proyecto +TEC UNAHUR 2025",
    img: tec2025,
    descripcion: "Participación en un proyecto institucional financiado por la Universidad Nacional de Hurlingham para el desarrollo de una plataforma educativa destinada a la gestión de actividades académicas. Colaboré en el desarrollo de módulos del backend, tareas de testing, migracion de datos y trabajo colaborativo con docentes y estudiantes.",
    tecnologias: [],
    botones: [
      {
        texto: "Demo",
        icono: "eye",
        url: "https://mate.unahur.edu.ar/",
      },
      {
        texto:"Ver Proyecto",
        icono:"eye",
        url: "/proyectos/tec-unahur", 
      }, 
    ],
    estado: "Online",
    
  },
  
];

export const proyectosAcademicos = [
  {
    nombre: "Batalla Naval en consola",
    img: batallaNaval,
    descripcion: "Proyecto final de la materia Informatica I, Conceptos de programacion con C.",
    tecnologias: [c_ico],
    botones: [
      {
        texto:"Ver Proyecto",
        icono:"eye",
        url: "/proyectos/batalla-naval", 
      },
      {
        texto:"Github",
        icono:"github",
        url: "https://github.com/stkener/Batalla_Naval.git",
      },
    ],
    estado: "Finalizado"
  },
  {
   nombre: "Arboles Binarios de Busqueda",
    img: abb,
    descripcion: "Proyecto académico que implementa árboles de búsqueda binaria y listas enlazadas en Python.",
    tecnologias: [python_ico],
    botones: [
      {
        texto:"Ver Proyecto",
        icono:"eye",
        url: "/proyectos/arboles-binarios", 
      },
      {
        texto:"Github",
        icono:"github",
        url: "https://github.com/stkener/Arboles-Binarios-de-Busquedas-Python",
      }, 
    ]
  },
  {
   nombre: "Algoritmos de busqueda y ordenamiento",
    img: abo,
    descripcion: "Estructuras de datos en Python: pilas y colas aplicadas a una simulación de despacho de asistencia en carretera. Pilas y colas en Python",
    tecnologias: [python_ico],
    botones: [
      {
        texto:"Ver Proyecto",
        icono:"eye",
        url: "/proyectos/pilas-colas", 
      },
      {
        texto:"Github",
        icono:"github",
        url: "https://github.com/stkener/Stacks-and-Queues-Python",
      }, 
    ]
  },

];

export const proyectosAprendizaje = [
  {
    nombre: "Ahorcado con Int. Grafica",
    img: ahorcadoGrafico,
    descripcion: "Proyecto de interfaz grafica con Python + mini base con sqlite.",
    tecnologias: [python_ico],
    botones: [
      {
        texto:"Github",
        icono:"github",
        url: "https://github.com/stkener/Ahorcado-con-interfaz-grafica.git", 
      },
    ],
    estado: "Finalizado"
  },
  /*{
    nombre: "Ahorcado en consola",
    img: ahorcadoConsola,
    descripcion: "Proyecto básico con Python, Introduccion al lenguaje.",
    tecnologias: [python_ico],
    botones: [
      {
        texto:"Github",
        icono:"github",
        url: "https://github.com/stkener/Ahorcado.git", 
      },
    ],
    estado: "Finalizado"
  },*/
];
