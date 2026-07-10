import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import python_ico from "../documents/Python-logo.png";

// Imágenes
import principal from "../documents/proyectos/abb/principal.png";

const ArbolesBinarios = () => {

    return (

            <main className="min-h-screen bg-slate-950 text-white">

                <div className="max-w-6xl mx-auto px-6 py-16">

                    <Link
                        to="/#proyectos"
                        className="
                            flex
                            items-center
                            gap-2
                            text-slate-400
                            hover:text-sky-400
                            transition
                            mb-10
                        "
                    >
                        <FaArrowLeft />
                        Volver al portfolio
                    </Link>

                    {/* HERO */}

                        <section className="mb-20">

                        {/* INFORMACIÓN */}

                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <span className="text-sky-400 font-medium tracking-wide uppercase mb-3">
                                        Proyecto Académico
                                    </span>

                                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                                        Árboles Binarios de Búsqueda
                                    </h1>

                                    <p className="text-lg text-slate-300 leading-8 mb-8">
                                        Desarrollo de una aplicación en Python basada en Árboles
                                        Binarios de Búsqueda y listas enlazadas para administrar
                                        intérpretes y canciones. El proyecto implementa estructuras
                                        de datos desde cero, algoritmos de búsqueda, recorridos,
                                        inserción, eliminación y consultas avanzadas sobre el árbol.
                                    </p>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-900 rounded-xl p-5">
                                            <p className="text-slate-400 text-sm">
                                                Institución
                                            </p>

                                            <p className="font-semibold mt-2">
                                                Universidad Nacional de Hurlingham
                                            </p>

                                        </div>

                                        <div className="bg-slate-900 rounded-xl p-5">
                                            <p className="text-slate-400 text-sm">
                                                Materia
                                            </p>

                                            <p className="font-semibold mt-2">
                                                Estrucutras de datos
                                            </p>
                                        </div>

                                        <div className="bg-slate-900 rounded-xl p-5">

                                            <p className="text-slate-400 text-sm">
                                                Lenguaje
                                            </p>

                                            <img src={python_ico} alt="" className="w-8 h-8" />
                                        </div>

                                        <div className="bg-slate-900 rounded-xl p-5">

                                            <p className="text-slate-400 text-sm">
                                                Estructuras
                                            </p>

                                            <p className="font-semibold mt-2">
                                                Árboles Binarios de Busquedas y Listas enlazadas
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            

                            {/* IMAGEN */}

                                <div>

                                    <img
                                        src={principal}
                                        alt="Árbol Binario de Búsqueda"
                                        className="
                                           w-full
                                            rounded-2xl
                                            border
                                            border-slate-800
                                            shadow-2xl
                                        "
                                    />

                                </div>
                            </div>
                        </section>

                    {/* TECNOLOGÍAS */}

                        <section className="mb-16">

                            <h2 className="text-3xl font-bold mb-8">
                                Tecnologías utilizadas
                            </h2>

                            <div className="flex flex-wrap gap-4">
                                <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                                    Python
                                </div>

                                <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                                    Árboles Binarios de Búsqueda
                                </div>

                                <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                                    Listas Enlazadas
                                </div>

                                <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                                    Tipos de Datos Abstractos (TDA)
                                </div>

                                <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                                    Algoritmos de Búsqueda
                                </div>

                                <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                                    Recursividad
                                </div>
                            </div>

                        </section>

                    {/* EL DESAFÍO */}

                        <section className="mb-16">

                            <h2 className="text-3xl font-bold mb-6">
                                El desafío
                            </h2>

                            <p className="text-slate-300 leading-8">
                                El objetivo del proyecto fue implementar desde cero las estructuras
                                de datos <strong>Lista Enlazada</strong> y <strong>Árbol Binario de Búsqueda</strong>,
                                respetando las interfaces y operaciones definidas por la cátedra.
                            </p>

                            <p className="text-slate-300 leading-8 mt-6">
                                Sobre estas estructuras se desarrollaron algoritmos capaces de
                                almacenar intérpretes y canciones, realizar búsquedas, inserciones,
                                eliminaciones y consultas avanzadas, manteniendo la integridad de
                                los datos y el correcto funcionamiento del árbol.
                            </p>

                            <p className="text-slate-300 leading-8 mt-6">
                                Además de la implementación, el trabajo requirió documentar el diseño
                                de las estructuras, explicar los algoritmos utilizados y describir el
                                funcionamiento de cada componente desarrollado en Python.
                            </p>

                        </section>

                    {/* LA SOLUCIÓN */}

                        <section className="mb-16">

                            <h2 className="text-3xl font-bold mb-6">
                                La solución
                            </h2>

                            <p className="text-slate-300 leading-8">
                                Se desarrolló una aplicación orientada a la gestión de intérpretes y
                                canciones utilizando Tipos de Datos Abstractos implementados desde
                                cero en Python. La solución se estructuró sobre un Árbol Binario de
                                Búsqueda para organizar los intérpretes y listas enlazadas para
                                administrar las canciones asociadas a cada uno.
                            </p>

                            <p className="text-slate-300 leading-8 mt-8">
                                Además de las operaciones básicas de inserción y búsqueda, se
                                implementaron recorridos, consultas específicas, eliminación de
                                nodos, análisis de la estructura del árbol y diversas funciones
                                solicitadas por la cátedra para validar el correcto funcionamiento
                                de los algoritmos desarrollados.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mt-10">

                                <div className="bg-slate-900 rounded-xl p-7">

                                    <h3 className="text-sky-400 font-bold text-xl mb-4">
                                        Organización
                                    </h3>

                                    <p className="text-slate-300 leading-8">
                                        Los intérpretes se almacenan en un Árbol Binario de
                                        Búsqueda, permitiendo mantener la información ordenada y
                                        realizar búsquedas eficientes.
                                    </p>

                                </div>

                                <div className="bg-slate-900 rounded-xl p-7">

                                    <h3 className="text-sky-400 font-bold text-xl mb-4">
                                        Gestión de datos
                                    </h3>

                                    <p className="text-slate-300 leading-8">
                                        Cada intérprete administra su colección de canciones mediante
                                        una lista enlazada, incorporando operaciones de alta,
                                        búsqueda y eliminación.
                                    </p>

                                </div>

                                <div className="bg-slate-900 rounded-xl p-7">

                                    <h3 className="text-sky-400 font-bold text-xl mb-4">
                                        Consultas avanzadas
                                    </h3>

                                    <p className="text-slate-300 leading-8">
                                        Se implementaron recorridos del árbol, consultas por nivel,
                                        cálculo de altura, balance, búsqueda de coincidencias y otras
                                        operaciones sobre la estructura de datos.
                                    </p>

                                </div>

                            </div>

                        </section>

                    {/* MI PARTICIPACIÓN */}

                        <section className="mb-16">

                            <h2 className="text-3xl font-bold mb-8">
                                Mi participación
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">

                                <div className="bg-slate-900 p-6 rounded-xl">

                                    <h3 className="text-sky-400 font-bold text-xl mb-4">
                                        Diseño de estructuras
                                    </h3>

                                    <p className="text-slate-300 leading-8">
                                        Modelé e implementé los Tipos de Datos Abstractos
                                        (TDA) requeridos, desarrollando las clases para
                                        listas enlazadas y árboles binarios de búsqueda.
                                    </p>

                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl">

                                    <h3 className="text-sky-400 font-bold text-xl mb-4">
                                        Desarrollo de algoritmos
                                    </h3>

                                    <p className="text-slate-300 leading-8">
                                        Implementé las operaciones de inserción, búsqueda,
                                        eliminación, recorridos y consultas sobre las
                                        estructuras de datos utilizando Python.
                                    </p>

                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl">

                                    <h3 className="text-sky-400 font-bold text-xl mb-4">
                                        Validación funcional
                                    </h3>

                                    <p className="text-slate-300 leading-8">
                                        Verifiqué el funcionamiento de cada operación mediante
                                        los casos de prueba definidos para el trabajo práctico,
                                        asegurando la correcta manipulación de la información.
                                    </p>

                                </div>

                                <div className="bg-slate-900 p-6 rounded-xl">

                                    <h3 className="text-sky-400 font-bold text-xl mb-4">
                                        Documentación técnica
                                    </h3>

                                    <p className="text-slate-300 leading-8">
                                        Elaboré el informe técnico describiendo el diseño de
                                        las estructuras, las decisiones de implementación y
                                        el funcionamiento de cada algoritmo desarrollado.
                                    </p>

                                </div>

                            </div>

                        </section>

                    {/* DESAFÍOS Y APRENDIZAJES */}

                        <section className="mb-20">

                            <h2 className="text-3xl font-bold mb-8">
                                Desafíos y aprendizajes
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">

                                <div className="bg-slate-900 rounded-xl p-7">

                                    <h3 className="text-sky-400 font-bold text-2xl mb-6">
                                        Desafíos
                                    </h3>

                                    <ul className="space-y-5 text-slate-300 leading-8 list-disc pl-5">

                                        <li>
                                            Implementar desde cero los Tipos de Datos Abstractos sin utilizar estructuras predefinidas del lenguaje.
                                        </li>

                                        <li>
                                            Mantener la integridad del Árbol Binario de Búsqueda durante las operaciones de inserción y eliminación de nodos.
                                        </li>

                                        <li>
                                            Resolver consultas complejas mediante recorridos recursivos sobre el árbol y las listas enlazadas.
                                        </li>

                                        <li>
                                            Diseñar una solución modular, reutilizable y fácilmente mantenible siguiendo principios de programación orientada a objetos.
                                        </li>

                                    </ul>

                                </div>

                                <div className="bg-slate-900 rounded-xl p-7">

                                    <h3 className="text-sky-400 font-bold text-2xl mb-6">
                                        Aprendizajes
                                    </h3>

                                    <ul className="space-y-5 text-slate-300 leading-8 list-disc pl-5">

                                        <li>
                                            Implementación práctica de Árboles Binarios de Búsqueda y Listas Enlazadas.
                                        </li>

                                        <li>
                                            Aplicación de algoritmos recursivos para recorridos y consultas sobre estructuras jerárquicas.
                                        </li>

                                        <li>
                                            Modelado de Tipos de Datos Abstractos (TDA) utilizando programación orientada a objetos en Python.
                                        </li>

                                        <li>
                                            Desarrollo de soluciones enfocadas en eficiencia, organización de datos y reutilización de código.
                                        </li>

                                    </ul>

                                </div>

                            </div>

                        </section>

                    {/* REPOSITORIO */}

                        <section className="mb-20 flex justify-center">

                            <a
                                href="https://github.com/stkener/Arboles-Binarios-de-Busquedas-Python"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    bg-sky-500
                                    hover:bg-sky-600
                                    text-white
                                    font-semibold
                                    px-8
                                    py-4
                                    rounded-xl
                                    transition
                                    shadow-lg
                                "
                            >
                            <FaGithub size={24} />
                                Ver repositorio en GitHub
                            </a>

                        </section>

                </div>

            </main>

    );

};

export default ArbolesBinarios;