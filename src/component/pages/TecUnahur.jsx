import { Link } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa";

import tecunahur from "../documents/proyectos/tecunahur/tec2025.png";
import nestjs_ico from "../documents/nestjs.png"
import postgres_ico from "../documents/postgre.png"
import github_ico from "../documents/github.png"
import restapi_ico from "../documents/restapi.png"

const TecUnahur = () => {

    return (

            <main className="min-h-screen bg-slate-950 text-white">

                <div className="max-w-6xl mx-auto px-6 py-12">

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

                        {/* HERO */}

                            <div>

                                <span className="text-sky-400 font-medium tracking-wide uppercase mb-3">
                                    Proyecto Institucional · +TEC UNAHUR 2025
                                </span>

                                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                    Plataforma Educativa MATE
                                </h1>

                                <p className="text-lg text-slate-300 leading-8 mb-8">
                                    Participación en el desarrollo de una plataforma educativa destinada
                                    a la gestión de contenidos, trabajos prácticos y evaluaciones para
                                    las carreras de informática de la Universidad Nacional de
                                    Hurlingham. El proyecto fue seleccionado y financiado por el
                                    programa +TEC UNAHUR 2025.
                                </p>

                                <div className="grid grid-cols-2 gap-4">

                                    <div className="bg-slate-900 rounded-2xl p-5">
                                        <p className="text-slate-400 text-sm">Institución</p>
                                        <p className="font-semibold mt-2">
                                            Universidad Nacional de Hurlingham
                                        </p>
                                    </div>

                                <div className="bg-slate-900 rounded-2xl p-5">
                                    <p className="text-slate-400 text-sm">Rol</p>
                                    <p className="font-semibold mt-2">
                                        Backend · Testing · Migración de datos
                                    </p>
                                </div>

                                <div className="bg-slate-900 rounded-2xl p-5">
                                    <p className="text-slate-400 text-sm">Tecnologías</p>

                                    <div className="flex items-center gap-3 mt-2">
                                        <img
                                            src={nestjs_ico}
                                            alt="NestJS"
                                            className="w-9 h-9 object-contain"
                                        />

                                        <img
                                            src={postgres_ico}
                                            alt="PostgreSQL"
                                            className="w-9 h-9 object-contain"
                                        />
                                    </div>

                                </div>

                                <div className="bg-slate-900 rounded-2xl p-5">
                                    <p className="text-slate-400 text-sm">Trabajo</p>
                                    <p className="font-semibold mt-2">
                                        Proyecto colaborativo
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* IMAGEN */}

                        <div>

                            <img
                                src={tecunahur}
                                alt="Plataforma Educativa MATE"
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

                <section className="mb-24">

                    <h2 className="text-4xl font-bold mb-10">
                        Tecnologías utilizadas
                    </h2>

                    <div className="flex flex-wrap gap-5">

                        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4">
                            <img
                                src={nestjs_ico}
                                alt="NestJS"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-xl">
                                NestJS
                            </span>
                        </div>

                        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4">
                            <img
                                src={postgres_ico}
                                alt="PostgreSQL"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-xl">
                                PostgreSQL
                            </span>
                        </div>

                        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4">
                            <img
                                src={github_ico}
                                alt="GitHub"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-xl">
                                GitHub
                            </span>
                        </div>

                        <div className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4">
                            <img
                                src={restapi_ico}
                                alt="REST API"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-xl">
                                REST API
                            </span>
                        </div>

                    </div>

                </section>

                {/* EL PROYECTO */}

                <section className="mb-24">

                    <h2 className="text-4xl font-bold mb-10">
                        El proyecto +TEC UNAHUR
                    </h2>

                    <div className="space-y-8 text-lg text-slate-300 leading-8">

                    <p>
                        +TEC UNAHUR 2025 fue un programa de la Universidad Nacional de
                        Hurlingham destinado a financiar proyectos tecnológicos con impacto
                        en la comunidad universitaria. La iniciativa seleccionó equipos de
                        desarrollo para crear soluciones de software orientadas a mejorar
                        distintos procesos institucionales.
                    </p>

                    <p>
                        En este marco se desarrolló la plataforma educativa <span className="text-white font-medium">MATE</span>,
                        una aplicación web destinada a gestionar contenidos, trabajos
                        prácticos, evaluaciones y proyectos de construcción de software para
                        las carreras de informática de la universidad, centralizando las
                        herramientas utilizadas por docentes y estudiantes.
                    </p>

                    <p>
                        El proyecto fue llevado adelante por un equipo multidisciplinario de
                        desarrollo, utilizando una arquitectura basada en APIs REST y un
                        backend desarrollado con NestJS y PostgreSQL, permitiendo construir
                        una plataforma escalable y preparada para futuras funcionalidades.
                    </p>

                </div>

            </section>

            {/* MI PARTICIPACIÓN */}

            <section className="mb-24">

                <h2 className="text-4xl font-bold mb-10">
                    Mi participación
                </h2>

                <div className="space-y-8 text-lg text-slate-300 leading-8 mb-14">

                    <p>
                        Formé parte del equipo de desarrollo de la plataforma educativa
                        <span className="text-white font-medium"> MATE</span>,
                        colaborando en el desarrollo del backend junto a estudiantes y
                        docentes de la Universidad Nacional de Hurlingham en el marco del
                        proyecto institucional +TEC UNAHUR 2025.
                    </p>

                    <p>
                        Mi participación se centró en la implementación de nuevas
                        funcionalidades, la migración de datos desde versiones anteriores
                        de la plataforma, el testing funcional y la propuesta de mejoras
                        orientadas a optimizar la experiencia de uso. El trabajo se realizó
                        de forma colaborativa utilizando Git y GitHub mediante ramas de
                        desarrollo y Pull Requests.
                    </p>

                </div>

                <h3 className="text-2xl font-semibold mb-8 text-sky-400">
                    Principales aportes
                </h3>

                <div className="grid md:grid-cols-2 gap-6">

                {/* Desarrollo Backend */}

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

                        <h4 className="text-2xl font-semibold mb-5">
                            💻 Desarrollo Backend
                        </h4>

                        <p className="text-slate-300 leading-8">
                            Implementé módulos CRUD para las entidades
                            <span className="text-white font-medium">
                                {" "}Contrato Pedagógico
                            </span>
                                {" "}y
                            <span className="text-white font-medium">
                                {" "}Semanas
                            </span>,
                                desarrollando funcionalidades del backend con NestJS e
                                integrándolas al proyecto mediante Pull Requests.
                        </p>

                    </div>

                    {/* Migración de datos */}

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

                        <h4 className="text-2xl font-semibold mb-5">
                            🔄 Migración de datos
                        </h4>

                        <p className="text-slate-300 leading-8">
                            Participé en la migración de información desde la plataforma
                            anterior, validando la consistencia de los datos importados y
                            colaborando en la detección de inconvenientes durante el
                            proceso.
                        </p>

                    </div>

                {/* Testing */}

                    <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-8">
    
                        <h4 className="text-2xl font-semibold mb-5">
                            🧪 Testing funcional y mejoras de UX
                        </h4>

                        <p className="text-slate-300 leading-8">
                            Durante las pruebas funcionales detecté errores de
                            funcionamiento y propuse mejoras en la experiencia de usuario,
                            incorporando cambios que facilitaron el flujo de trabajo de los
                            docentes durante la administración de contenidos y la
                            validación de la migración de datos.
                        </p>

                    </div>

                </div>

            </section>

            {/* DESAFÍOS Y APRENDIZAJES */}

            <section className="mb-24">

                <h2 className="text-4xl font-bold mb-10">
                    Desafíos y aprendizajes
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

                        <h3 className="text-sky-400 text-xl font-semibold mb-4">
                            Desarrollo colaborativo
                        </h3>

                        <p className="text-slate-300 leading-8">
                            Participar en un proyecto desarrollado por un equipo me permitió
                            trabajar con un flujo de desarrollo basado en ramas, Pull Requests
                            y revisiones de código. Cada funcionalidad debía integrarse siguiendo
                            un proceso de revisión antes de incorporarse al repositorio principal.
                        </p>

                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

                        <h3 className="text-sky-400 text-xl font-semibold mb-4">
                            Aprendizaje de nuevas tecnologías
                        </h3>

                        <p className="text-slate-300 leading-8">
                            Uno de los principales desafíos fue incorporarme a un proyecto
                            utilizando tecnologías que no había empleado anteriormente, como
                            <span className="text-white font-medium"> NestJS</span>.
                            Esta experiencia me permitió aprender el proceso de puesta en marcha
                            de un proyecto backend, comprender su arquitectura y desarrollar
                            funcionalidades siguiendo las buenas prácticas definidas por el equipo.
                        </p>

                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

                        <h3 className="text-sky-400 text-xl font-semibold mb-4">
                            Calidad del software
                        </h3>

                        <p className="text-slate-300 leading-8">
                            Las tareas de migración de datos y testing reforzaron la importancia
                            de validar la información, detectar errores antes de la puesta en
                            producción y proponer mejoras que facilitaran el uso de la plataforma.
                        </p>

                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

                        <h3 className="text-sky-400 text-xl font-semibold mb-4">
                            Crecimiento profesional
                        </h3>

                        <p className="text-slate-300 leading-8">
                            Esta experiencia me permitió conocer el ciclo de desarrollo de un
                            proyecto institucional real, fortalecer el trabajo en equipo y
                            adquirir experiencia utilizando herramientas y metodologías empleadas
                            en entornos profesionales.
                        </p>

                    </div>

                </div>

            </section>


                </div>
            </main>

    );
};

export default TecUnahur;