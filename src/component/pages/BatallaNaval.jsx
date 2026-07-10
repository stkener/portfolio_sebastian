import { Link } from "react-router-dom";

import {
    FaArrowLeft,
} from "react-icons/fa";

// IMÁGENES
import titulo from "../documents/proyectos/bn/titulo 1.jpg";
import menu from "../documents/proyectos/bn/jugar.jpg";
import conexion from "../documents/proyectos/bn/cliente-servidor.jpg";

import c_ico from "../documents/c-ico.png";

const BatallaNaval = () => {

    return (

        <main className="min-h-screen bg-slate-950 text-white">

            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* VOLVER */}

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

                            {/* TEXTO */}

                            <div>

                                <span className="text-sky-400 font-medium tracking-wide uppercase mb-3">
                                    Proyecto Académico
                                </span>

                                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                    Batalla Naval
                                </h1>

                                <p className="text-lg text-slate-300 leading-8 mb-8">

                                    Desarrollo de un juego multijugador en lenguaje C basado en el
                                    clásico Batalla Naval. El proyecto implementa comunicación
                                    Cliente/Servidor mediante sockets TCP, permitiendo que dos
                                    computadoras jueguen una partida intercambiando información en
                                    tiempo real.

                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">

                                    <div className="bg-slate-900 rounded-xl p-4">

                                        <p className="text-slate-500 text-sm">
                                            Institución
                                        </p>

                                        <p className="font-semibold">
                                            Universidad Nacional de Moreno
                                        </p>

                                    </div>

                                    <div className="bg-slate-900 rounded-xl p-4">

                                        <p className="text-slate-500 text-sm">
                                            Materia
                                        </p>

                                        <p className="font-semibold">
                                            Informática I
                                        </p>

                                    </div>

                                    <div className="bg-slate-900 rounded-xl p-4">

                                        <p className="text-slate-500 text-sm">
                                            Lenguaje
                                        </p>

                                        {/*<p className="font-semibold">
                                            C
                                        </p>*/} <img src={c_ico} alt="" className="w-8 h-8" />

                                    </div>

                                    <div className="bg-slate-900 rounded-xl p-4">

                                        <p className="text-slate-500 text-sm">
                                            Arquitectura
                                        </p>

                                        <p className="font-semibold">
                                            Cliente / Servidor (TCP)
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* IMAGEN */}

                            <div>

                                <img
                                    src={titulo}
                                    alt="Batalla Naval"
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
                                Lenguaje C
                            </div>

                            <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                                Sockets TCP/IP
                            </div>

                            <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                                Arquitectura Cliente / Servidor
                            </div>

                            <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                                Comunicación por Red
                            </div>

                            <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                                Programación Estructurada
                            </div>

                            <div className="bg-slate-900 rounded-xl px-5 py-3 flex items-center gap-3">
                                Consola (CLI)
                            </div>

                        </div>

                    </section>

                {/* EL DESAFÍO */}
                
                    <section className="mb-16">

                        <h2 className="text-3xl font-bold mb-6">
                            El desafío
                        </h2>

                        <p className="text-slate-300 leading-8">
                            El objetivo del proyecto fue desarrollar una versión multijugador
                            del clásico juego Batalla Naval utilizando lenguaje C e implementando
                            una arquitectura Cliente/Servidor mediante sockets TCP.
                        </p>
                        <p className="text-slate-300 leading-8">
                            A diferencia de una versión tradicional ejecutada en una única computadora,
                            este proyecto debía permitir que dos jugadores ubicados en equipos
                            diferentes compartieran una misma partida en tiempo real, manteniendo
                            sincronizado el estado del juego durante toda la ejecución.
                        </p>
                        <p className="text-slate-300 leading-8">
                            Para lograrlo fue necesario diseñar un protocolo de comunicación entre
                            cliente y servidor, gestionar el intercambio de mensajes, validar las
                            acciones de cada jugador y asegurar que ambos tableros permanecieran
                            sincronizados frente a cada movimiento realizado.
                        </p>

                    </section>

                {/* LA SOLUCIÓN */}

                    <section className="mb-16">

                        <h2 className="text-3xl font-bold mb-6">
                            La solución
                        </h2>

                        <p className="text-slate-300 leading-8">
                            Se desarrolló una aplicación distribuida basada en una arquitectura
                            Cliente/Servidor utilizando sockets TCP. El servidor administra la
                            partida y coordina la comunicación entre los jugadores, mientras que
                            cada cliente permite interactuar con el juego desde una computadora
                            diferente.
                        </p>

                        <p className="text-slate-300 leading-8 mt-8">
                            La implementación permitió sincronizar el estado del tablero,
                            controlar los turnos, validar las jugadas e intercambiar información
                            en tiempo real mediante una interfaz de consola desarrollada en
                            lenguaje C.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mt-10">
                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <h3 className="text-sky-400 font-semibold mb-4">
                                    Servidor
                                </h3>

                                <p className="text-slate-300">
                                    Administra la partida, coordina la comunicación y mantiene el
                                    estado general del juego.
                                </p>
                            </div>

                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <h3 className="text-sky-400 font-semibold mb-4">
                                    Cliente
                                </h3>

                                <p className="text-slate-300">
                                    Permite a cada jugador conectarse al servidor, realizar
                                    movimientos y visualizar el desarrollo de la partida.
                                </p>
                            </div>

                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                <h3 className="text-sky-400 font-semibold mb-4">
                                    Comunicación TCP
                                </h3>

                                <p className="text-slate-300">
                                    Los clientes intercambian información mediante sockets TCP,
                                    manteniendo sincronizados ambos tableros durante toda la
                                    partida.
                                </p>
                            </div>
                        </div>

                    </section>

                {/* MI PARTICIPACIÓN */}

                    <section className="mb-16">

                        <h2 className="text-3xl font-bold mb-8">
                            Mi aporte al proyecto
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
                                
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Desarrollo del cliente
                                </h3>

                                <p className="text-slate-300 leading-8">
                                    Implementé la aplicación cliente en lenguaje C, desarrollando
                                    la interfaz por consola, el envío de jugadas al servidor y la
                                    recepción de las respuestas durante toda la partida.
                                </p>
                            </div>

                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Comunicación por sockets
                                </h3>

                                <p className="text-slate-300 leading-8">
                                    Participé en la implementación de la comunicación Cliente/Servidor
                                    utilizando sockets TCP, gestionando el intercambio de mensajes
                                    necesarios para mantener sincronizado el estado del juego.
                                </p>

                            </div>

                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Lógica del juego
                                </h3>

                                <p className="text-slate-300 leading-8">
                                    Desarrollé funcionalidades relacionadas con la validación de
                                    movimientos, el control de turnos y las reglas principales de
                                    Batalla Naval.
                                </p>
                            </div>

                            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Pruebas y depuración
                                </h3>

                                <p className="text-slate-300 leading-8">
                                    Realicé pruebas funcionales entre cliente y servidor,
                                    corrigiendo errores de comunicación y verificando el correcto
                                    funcionamiento de la partida en red.
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

                        {/* DESAFÍOS */}

                            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
                                <h3 className="text-2xl font-semibold mb-6 text-sky-400">
                                    Desafíos
                                </h3>

                                <ul className="space-y-5 text-slate-300 leading-8 list-disc pl-5">

                                    <li>
                                        Diseñar una arquitectura Cliente/Servidor capaz de mantener
                                        sincronizado el estado del juego entre dos computadoras.
                                    </li>

                                    <li>
                                        Implementar comunicación mediante sockets TCP gestionando
                                        correctamente el intercambio de mensajes.
                                    </li>

                                    <li>
                                        Validar los movimientos de ambos jugadores evitando
                                        inconsistencias durante la partida.
                                    </li>

                                    <li>
                                        Resolver errores de sincronización y depurar la aplicación
                                        ejecutando cliente y servidor de forma simultánea.
                                    </li>

                                </ul>

                            </div>

                        {/* APRENDIZAJES */}

                            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

                                <h3 className="text-2xl font-semibold mb-6 text-sky-400">
                                    Aprendizajes
                                </h3>

                                <ul className="space-y-5 text-slate-300 leading-8 list-disc pl-5">

                                    <li>
                                        Programación de aplicaciones distribuidas utilizando
                                        sockets TCP/IP en lenguaje C.
                                    </li>

                                    <li>
                                        Diseño de protocolos simples de comunicación entre cliente
                                        y servidor.
                                    </li>

                                    <li>
                                        Gestión del flujo de datos y sincronización de procesos en
                                        tiempo real.
                                    </li>

                                    <li>
                                        Depuración de aplicaciones de red y validación de
                                        funcionalidades en entornos multijugador.
                                    </li>

                                </ul>

                            </div>

                        </div>

                    </section>

                {/* FUNCIONAMIENTO DEL PROYECTO */}

                    <section className="mb-20">

                        <h2 className="text-3xl font-bold mb-12">
                            Funcionamiento del proyecto
                        </h2>

                    {/* PANTALLA PRINCIPAL */}

                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

                            <div>

                                <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                                    Interfaz principal
                                </h3>

                                <p className="text-slate-300 leading-8">
                                    La aplicación se ejecuta completamente desde la consola.
                                    Al iniciar el programa, el usuario puede elegir entre
                                    crear una partida como servidor o conectarse como cliente
                                    a una partida existente.
                                </p>

                                <p className="text-slate-300 leading-8 mt-6">
                                    Esta estructura permite reutilizar el mismo ejecutable
                                    para ambos roles y simplifica la puesta en marcha de una
                                    partida multijugador.
                                </p>

                            </div>

                            <img
                                src={titulo}
                                alt="Pantalla principal del juego"
                                className="rounded-2xl border border-slate-700"
                            />

                        </div>

                    {/* CONFIGURACIÓN */}

                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">

                            <img
                                src={menu}
                                alt="Configuración Cliente Servidor"
                                className="rounded-2xl border border-slate-700 order-2 lg:order-1"
                            />

                            <div className="order-1 lg:order-2">

                                <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                                    Configuración Cliente / Servidor
                                </h3>

                                <p className="text-slate-300 leading-8">
                                    Antes de comenzar la partida, el sistema solicita los
                                    datos necesarios para establecer la comunicación mediante
                                    sockets TCP.
                                </p>

                                <p className="text-slate-300 leading-8 mt-6">
                                    El servidor queda a la espera de conexiones mientras que
                                    el cliente ingresa la dirección IP y el puerto para
                                    conectarse e iniciar la partida.
                                </p>

                            </div>

                    
                        </div>

                    {/* COMUNICACIÓN */}

                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            <div>

                                <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                                    Comunicación en tiempo real
                                </h3>

                                <p className="text-slate-300 leading-8">
                                    Una vez establecida la conexión, cliente y servidor
                                    intercambian mensajes continuamente para mantener ambos
                                    tableros sincronizados.
                                </p>

                                <p className="text-slate-300 leading-8 mt-6">
                                    Cada movimiento realizado por un jugador es enviado al
                                    servidor, validado y posteriormente comunicado al otro
                                    cliente, garantizando que ambos visualicen el mismo estado
                                    de la partida.
                                </p>

                            </div>

                            <img
                                src={conexion}
                                alt="Comunicación Cliente Servidor"
                                className="rounded-2xl border border-slate-700"
                            />

                        </div>

                    </section>

            </div>

        </main>

    );

};

export default BatallaNaval;