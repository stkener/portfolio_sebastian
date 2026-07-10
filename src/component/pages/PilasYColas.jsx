import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";

import python_ico from "../documents/Python-logo.png";

// Imágenes
import principal from "../documents/proyectos/abo/abo.png";

const PilasColas = () => {

    return (

        <main className="min-h-screen bg-slate-950 text-white">

            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* VOLVER AL PORTFOLIO */}
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
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* INFORMACIÓN */}

                    <div>

                        <span className="text-sky-400 font-medium tracking-wide uppercase mb-3">
                            Proyecto Académico
                        </span>

                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                            Sistema de Gestión de Auxilios con Pilas y Colas
                        </h1>

                        <p className="text-lg text-slate-300 leading-8 mb-8">
                            Desarrollo de una aplicación en Python para administrar los
                            pedidos de auxilio de una empresa de remolque y reparación de
                            vehículos. El proyecto implementa Pilas, Colas y Tipos de Datos
                            Abstractos para modelar oficinas de atención, una central
                            telefónica y la asignación eficiente de solicitudes.
                        </p>

                        <div className="grid grid-cols-2 gap-4">

                            <div className="bg-slate-900 rounded-xl p-5">

                                <p className="text-slate-400 text-sm">
                                    Institución
                                </p>

                                <p className="font-semibold mt-2">
                                    Uiversidad Nacional de Hurlingham
                                </p>

                            </div>

                            <div className="bg-slate-900 rounded-xl p-5">

                                <p className="text-slate-400 text-sm">
                                    Materia
                                </p>

                                <p className="font-semibold mt-2">
                                    Estructuras de Datos
                                </p>
                
                            </div>

                            <div className="bg-slate-900 rounded-xl p-5">

                                <p className="text-slate-400 text-sm">
                                    Lenguaje
                                </p>

                                <div className="flex items-center gap-3 mt-2">

                                    <img
                                        src={python_ico}
                                        alt="Python"
                                        className="w-6 h-6"
                                    />

                                </div>

                            </div>

                            <div className="bg-slate-900 rounded-xl p-5">

                                <p className="text-slate-400 text-sm">
                                    Estructuras
                                </p>

                                <p className="font-semibold mt-2">
                                    Pilas y Colas
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* IMAGEN */}

                    <div>

                        <img
                            src={principal}
                            alt="Sistema de Gestión de Auxilios"
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-slate-700
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
                            Pilas (Stack)
                        </div>

                        <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                            Colas (Queue)
                        </div>

                        <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                            Tipos de Datos Abstractos (TDA)
                        </div>

                        <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                            Programación Orientada a Objetos
                        </div>
            
                        <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                            Algoritmos
                        </div>

                        <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                            Recursividad
                        </div>

                        <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                            Ordenamiento
                        </div>

                    </div>

                </section>

                {/* EL DESAFÍO */}

                <section className="mb-16">

                    <h2 className="text-3xl font-bold mb-6">
                        El desafío
                    </h2>

                    <p className="text-slate-300 leading-8">
                        El objetivo del proyecto fue modelar el funcionamiento de una empresa
                        dedicada al remolque y reparación de vehículos mediante la implementación
                        de Tipos de Datos Abstractos en Python. La solución debía administrar
                        pedidos de auxilio, oficinas de atención y una central telefónica,
                        utilizando Pilas y Colas como estructuras principales.
                    </p>

                    <p className="text-slate-300 leading-8 mt-6">
                        Además de implementar estas estructuras desde cero, fue necesario
                        desarrollar algoritmos para gestionar el ingreso, búsqueda,
                        transferencia y procesamiento de los auxilios, respetando las reglas
                        de negocio definidas en la consigna y garantizando un funcionamiento
                        eficiente del sistema.
                    </p>

                    <p className="text-slate-300 leading-8 mt-6">
                        El proyecto también incorporó validaciones, operaciones recursivas y
                        mecanismos de organización de la información para simular el
                        comportamiento de una central de atención distribuida.
                    </p>

                </section>

                {/* LA SOLUCIÓN */}

                <section className="mb-16">

                    <h2 className="text-3xl font-bold mb-6">
                        La solución
                    </h2>

                    <p className="text-slate-300 leading-8">
                        Se desarrolló una aplicación en Python basada en Tipos de Datos
                        Abstractos para representar el funcionamiento de una empresa de
                        asistencia vehicular. La solución organiza los pedidos de auxilio
                        mediante Pilas y Colas, permitiendo administrar su ingreso,
                        seguimiento y asignación entre distintas oficinas de atención.
                    </p>

                    <p className="text-slate-300 leading-8 mt-8">
                        El sistema implementa una arquitectura modular donde cada componente
                        representa una parte del proceso de negocio, facilitando la gestión
                        de los auxilios, la distribución de solicitudes y la simulación de
                        una central telefónica con múltiples oficinas.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mt-10">

                        <div className="bg-slate-900 rounded-xl p-7">
                
                            <h3 className="text-sky-400 font-bold text-xl mb-4">
                                Gestión de auxilios
                            </h3>

                            <p className="text-slate-300 leading-8">
                                Se implementó un TDA para representar cada pedido de auxilio,
                                incorporando validaciones, estados, zonas de atención y tipo
                                de servicio requerido.
                            </p>

                        </div>

                        <div className="bg-slate-900 rounded-xl p-7">

                            <h3 className="text-sky-400 font-bold text-xl mb-4">
                                Administración de oficinas
                            </h3>

                            <p className="text-slate-300 leading-8">
                                Cada oficina gestiona de forma independiente las colas de
                                remolques y reparaciones, permitiendo consultar, agregar,
                                eliminar y derivar solicitudes según diferentes criterios.
                            </p>

                        </div>

                        <div className="bg-slate-900 rounded-xl p-7">

                            <h3 className="text-sky-400 font-bold text-xl mb-4">
                                Central telefónica
                            </h3>

                            <p className="text-slate-300 leading-8">
                                Se modeló un edificio compuesto por múltiples oficinas,
                                incorporando algoritmos para distribuir pedidos, localizar
                                oficinas y optimizar la asignación de auxilios.
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
                                Diseñé e implementé los Tipos de Datos Abstractos del
                                proyecto, incluyendo Pilas, Colas, Auxilios, Oficinas de
                                Atención y el Edificio que representa la central telefónica.
                            </p>

                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl">

                            <h3 className="text-sky-400 font-bold text-xl mb-4">
                                Desarrollo de algoritmos
                            </h3>

                            <p className="text-slate-300 leading-8">
                                Implementé los algoritmos necesarios para administrar los
                                pedidos de auxilio, gestionar las colas de atención,
                                realizar búsquedas, transferencias y operaciones de
                                distribución entre oficinas.
                            </p>

                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl">

                            <h3 className="text-sky-400 font-bold text-xl mb-4">
                                Validaciones y pruebas
                            </h3>

                            <p className="text-slate-300 leading-8">
                                Desarrollé las validaciones de datos requeridas por la
                                consigna y realicé pruebas funcionales para verificar el
                                correcto comportamiento de cada operación implementada.
                            </p>

                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl">

                            <h3 className="text-sky-400 font-bold text-xl mb-4">
                                Documentación técnica
                            </h3>

                            <p className="text-slate-300 leading-8">
                                Elaboré el informe técnico describiendo el diseño de las
                                estructuras de datos, los algoritmos implementados y el
                                funcionamiento de cada componente del sistema.
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
                                    Diseñar una solución modular utilizando múltiples Tipos de Datos Abstractos que interactúan entre sí.
                                </li>

                                <li>
                                    Implementar desde cero Pilas y Colas respetando las operaciones y restricciones definidas por la cátedra.
                                </li>

                                <li>
                                    Modelar un sistema distribuido de oficinas y una central telefónica manteniendo la coherencia de los datos.
                                </li>

                                <li>
                                    Resolver algoritmos de asignación, búsqueda y transferencia de auxilios aplicando estructuras de datos adecuadas.
                                </li>

                            </ul>

                        </div>

                        <div className="bg-slate-900 rounded-xl p-7">

                            <h3 className="text-sky-400 font-bold text-2xl mb-6">
                                Aprendizajes
                            </h3>

                            <ul className="space-y-5 text-slate-300 leading-8 list-disc pl-5">

                                <li>
                                    Aplicación práctica de Pilas, Colas y otros Tipos de Datos Abstractos en un problema realista.
                                </li>

                                <li>
                                    Diseño de arquitecturas modulares mediante programación orientada a objetos en Python.
                                </li>

                                <li>
                                    Desarrollo de algoritmos para la administración y procesamiento eficiente de información.
                                </li>

                                <li>
                                    Fortalecimiento de habilidades de modelado, validación de datos y documentación técnica de software.
                                </li>

                            </ul>

                        </div>

                    </div>

                </section>

                {/* BOTÓN GITHUB */}
                <section className="mb-20 flex justify-center">

                    <a
                        href="https://github.com/stkener/Stacks-and-Queues-Python"
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

export default PilasColas;