import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
    FaArrowLeft,
    FaMicrosoft,
    FaDatabase,
    FaCogs,
    FaClipboardCheck
} from "react-icons/fa";

// IMÁGENES
import principal from "../documents/proyectos/inti/intiprincipal.png";
import frontend from "../documents/proyectos/inti/intifrontend.png";
import diagramaBD from "../documents/proyectos/inti/intidiagramaBD.png";
import workflow1 from "../documents/proyectos/inti/intiworkflow1.png";

//ICONOS
import powau_ico from "../documents/poweautomate.png";
import powapp_ico from "../documents/powerapps.png";


const SistemaCalibraciones = () => {

    const navigate = useNavigate();

    return (

        <main className="min-h-screen bg-slate-950 text-white">

            {/* CONTENEDOR */}

            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* VOLVER */}

                {/*<button
                    onClick={() => navigate(-1)}
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
                </button>*/}
                <Link
                    to="/#proyectos"
                    className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition mb-10"
                >
                    <FaArrowLeft />
                    Volver al portfolio
                </Link>

                {/* HERO */}

                <section className="mb-20">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* TEXTO */}

                        <div>

                            <p className="
                                text-sky-400
                                font-medium
                                tracking-wide
                                uppercase
                                mb-3
                            ">
                                Práctica Profesional Supervisada · INTI
                            </p>

                            <h1 className="
                                text-5xl
                                lg:text-6xl
                                font-bold
                                leading-tight
                                mb-6
                            ">
                                Sistema de Alertas de Calibraciones
                            </h1>

                            <p className="
                                text-lg
                                text-slate-300
                                leading-8
                                mb-8
                            ">
                                Desarrollo de una solución para automatizar el seguimiento de
                                calibraciones de equipos de laboratorio utilizando
                                <span className="text-white font-medium"> Microsoft Power Automate</span>,
                                <span className="text-white font-medium"> Excel</span> y
                                <span className="text-white font-medium"> Outlook</span>,
                                reduciendo tareas manuales y mejorando el control de vencimientos.
                            </p>

                            <div className="
                                flex
                                flex-wrap
                                gap-3
                            ">

                                <span className="
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-slate-900
                                    border
                                    border-slate-700
                                    text-sm
                                ">
                                    🏢 INTI
                                </span>

                                <span className="
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-slate-900
                                    border
                                    border-slate-700
                                    text-sm
                                ">
                                    👨‍💻 Developer
                                </span>

                                <span className="
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-slate-900
                                    border
                                    border-slate-700
                                    text-sm
                                ">
                                    📅 Ago 2025 – Dic 2025
                                </span>

                                <span className="
                                    px-4
                                    py-2
                                    rounded-full
                                    bg-green-900/30
                                    border
                                    border-green-600
                                    text-green-300
                                    text-sm
                                ">
                                    ✔ Implementado
                                </span>

                            </div>

                        </div>

                        {/* IMAGEN */}

                        <div>

                            <img
                                src={principal}
                                alt="Sistema de Alertas de Calibraciones"
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

                <section className="mb-20">

                    <h2 className="text-3xl font-bold mb-8">
                        Tecnologías utilizadas
                    </h2>

                    <div className="flex flex-wrap gap-4">

                        <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 flex items-center gap-3">
                            <img
                                src={powau_ico}
                                alt="Power Automate"
                                className="w-8 h-8"
                            />
                            <span>Power Automate</span>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 flex items-center gap-3">
                            <img
                                src={powapp_ico}
                                alt="Power Apps"
                                className="w-8 h-8"
                            />
                            <span>Power Apps</span>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 flex items-center gap-3">
                            <FaMicrosoft size={24} />
                            <span>Excel</span>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 flex items-center gap-3">
                            <FaMicrosoft size={24} />
                            <span>SharePoint / Teams</span>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 flex items-center gap-3">
                            <FaMicrosoft size={24} />
                            <span>Outlook</span>
                        </div>

                    </div>

                </section>

                {/* EL DESAFÍO */}

                <section className="mb-20">

                    <h2 className="text-3xl font-bold mb-6">
                        El desafío
                    </h2>

                    <p className="text-slate-300 leading-8 mb-6">

                        El Departamento de Ingeniería del INTI gestionaba las fechas de
                        calibración de sus equipos mediante una planilla de Excel y el envío
                        manual de correos electrónicos. Este proceso dependía del seguimiento
                        de cada responsable, aumentando el riesgo de omitir vencimientos y
                        retrasar la recalibración de equipos críticos.

                    </p>

                    <p className="text-slate-300 leading-8">

                        El objetivo fue desarrollar una solución integrada al ecosistema
                        Microsoft ya utilizado por la institución, capaz de revisar
                        automáticamente las fechas de calibración y notificar a los
                        responsables sin modificar el flujo de trabajo existente.

                    </p>

                </section>

                {/* SOLUCIÓN */}

                <section className="mb-20">

                    <h2 className="text-3xl font-bold mb-6">
                        La solución
                    </h2>

                    <p className="text-slate-300 leading-8 mb-6">

                        Se desarrolló una solución de automatización utilizando el ecosistema
                        Microsoft, aprovechando las herramientas ya implementadas por el área.
                        La información de los equipos se almacenó en una planilla de Excel
                        compartida, mientras que Power Automate se encargó de ejecutar
                        diariamente el control de las fechas de calibración.

                    </p>

                    <p className="text-slate-300 leading-8 mb-8">

                        Cuando un equipo se encontraba próximo a vencer o ya había vencido,
                        el sistema enviaba automáticamente un correo electrónico a los
                        responsables con la información necesaria para gestionar la
                        recalibración, eliminando el seguimiento manual y reduciendo el riesgo
                        de omisiones.

                    </p>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                            <h3 className="font-semibold text-sky-400 mb-3">
                                Registro
                            </h3>

                            <p className="text-slate-300 text-sm leading-7">
                                Los equipos y sus fechas de calibración se administran desde una
                                planilla de Excel compartida.
                            </p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                            <h3 className="font-semibold text-sky-400 mb-3">
                                Automatización
                            </h3>

                            <p className="text-slate-300 text-sm leading-7">
                                Power Automate ejecuta diariamente el flujo, verifica los
                                vencimientos y determina qué acciones deben realizarse.
                            </p>
                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                            <h3 className="font-semibold text-sky-400 mb-3">
                                Notificaciones
                            </h3>

                            <p className="text-slate-300 text-sm leading-7">
                                El sistema envía correos automáticos cuando una calibración está
                                próxima a vencer o ya se encuentra vencida.
                            </p>
                        </div>

                    </div>

                </section>

                {/* MI APORTE */}

                <section className="mb-20">

                    <h2 className="text-3xl font-bold mb-8">
                        Mi aporte al proyecto
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

                            <FaClipboardCheck
                                className="text-sky-400 mb-4"
                                size={32}
                            />

                            <h3 className="font-bold mb-3">
                                Análisis y relevamiento
                            </h3>

                            <p className="text-slate-300 leading-7">

                                Participé en reuniones con los stakeholders para comprender el
                                proceso existente, relevar requerimientos y definir el alcance
                                del sistema de automatización.

                            </p>

                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

                            <FaCogs
                                className="text-sky-400 mb-4"
                                size={32}
                            />

                            <h3 className="font-bold mb-3">
                                Desarrollo de la solución
                            </h3>

                            <p className="text-slate-300 leading-7">

                                Diseñé e implementé los flujos automáticos en Power Automate,
                                incorporando la lógica necesaria para detectar vencimientos y
                                generar notificaciones por correo electrónico.

                            </p>

                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

                            <FaDatabase
                                className="text-sky-400 mb-4"
                                size={32}
                            />

                            <h3 className="font-bold mb-3">
                                Diseño y validación
                            </h3>

                            <p className="text-slate-300 leading-7">

                                Definí la estructura de la información, realicé pruebas
                                funcionales y ajusté el comportamiento del sistema hasta
                                cumplir con los requerimientos establecidos.

                            </p>

                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

                            <FaClipboardCheck
                                className="text-sky-400 mb-4"
                                size={32}
                            />

                            <h3 className="font-bold mb-3">
                                Documentación técnica
                            </h3>

                            <p className="text-slate-300 leading-7">

                                Elaboré la documentación funcional y técnica del proyecto,
                                incluyendo el manual de usuario, el manual técnico y el informe
                                final de la Práctica Profesional Supervisada.

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

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

                            <h3 className="text-xl font-semibold mb-4 text-sky-400">
                                Desafíos
                            </h3>

                            <ul className="space-y-3 text-slate-300 leading-7">

                                <li>
                                    • Adaptar la solución al ecosistema Microsoft ya utilizado por el área.
                                </li>

                                <li>
                                    • Desarrollar sin contar con credenciales propias dentro del entorno institucional.
                                </li>

                                <li>
                                    • Resolver la depuración de Power Automate mediante pruebas iterativas y correos automáticos.
                                </li>

                                <li>
                                    • Ajustar el alcance del proyecto según las necesidades reales de los stakeholders.
                                </li>

                            </ul>

                        </div>

                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

                            <h3 className="text-xl font-semibold mb-4 text-sky-400">
                                Aprendizajes
                            </h3>

                            <ul className="space-y-3 text-slate-300 leading-7">

                                <li>
                                    • Automatización de procesos utilizando Power Automate.
                                </li>

                                <li>
                                    • Relevamiento de requerimientos y comunicación con stakeholders.
                                </li>

                                <li>
                                    • Diseño de soluciones adaptadas a un entorno institucional.
                                </li>

                                <li>
                                    • Elaboración de documentación técnica y funcional para usuarios finales.
                                </li>

                            </ul>

                        </div>

                    </div>

                </section>
                {/* PROPUESTAS DE EVOLUCIÓN */}

                <section className="mb-20">

                    <h2 className="text-3xl font-bold mb-10">
                        Propuestas de evolución
                    </h2>

                    {/* POWER APPS */}

                    <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">

                        <div>

                            <h3 className="text-2xl font-semibold text-sky-400 mb-4">
                                Prototipo de interfaz
                            </h3>

                            <p className="text-slate-300 leading-8">

                                Como parte del trabajo exploratorio desarrollé un prototipo
                                utilizando <strong>Microsoft Power Apps</strong> para evaluar una
                                posible interfaz de gestión del sistema.

                            </p>

                            <p className="text-slate-300 leading-8 mt-4">

                                Si bien esta funcionalidad no formó parte del alcance final del
                                proyecto, permitió analizar una futura evolución hacia una
                                aplicación que facilitara la consulta y administración de las
                                calibraciones.

                            </p>

                        </div>

                        <img
                            src={frontend}
                            alt="Prototipo Power Apps"
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-slate-800
                            "
                        />

                    </div>

                    {/* MODELO DE DATOS */}

                    <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">

                        <img
                            src={diagramaBD}
                            alt="Modelo de datos"
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-slate-800
                            "
                        />

                        <div>

                            <h3 className="text-2xl font-semibold text-sky-400 mb-4">
                                Modelo de datos
                            </h3>

                            <p className="text-slate-300 leading-8">

                                Durante la etapa de análisis diseñé un modelo conceptual que
                                organizaba la información de equipos, responsables y
                                calibraciones.

                            </p>

                            <p className="text-slate-300 leading-8 mt-4">

                                Este diseño servía como base para una futura migración desde la
                                planilla de Excel hacia una base de datos relacional, mejorando
                                la escalabilidad y el mantenimiento del sistema.

                            </p>

                        </div>

                    </div>

                    {/* WORKFLOW */}

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        <div>

                            <h3 className="text-2xl font-semibold text-sky-400 mb-4">
                                Flujo de automatización
                            </h3>

                            <p className="text-slate-300 leading-8">

                                El workflow implementado en <strong>Power Automate</strong>&nbsp;
                                ejecuta diariamente el proceso de revisión de calibraciones,
                                identifica los equipos próximos a vencer o vencidos y genera
                                automáticamente las notificaciones correspondientes.

                            </p>

                            <p className="text-slate-300 leading-8 mt-4">

                                La automatización permitió eliminar tareas manuales repetitivas,
                                reducir el riesgo de omisiones y asegurar un seguimiento
                                continuo del estado de las calibraciones.

                            </p>

                        </div>

                        <img
                            src={workflow1}
                            alt="Workflow Power Automate"
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-slate-800
                            "
                        />

                    </div>

                </section>

            </div>

        </main>

    );

};

export default SistemaCalibraciones;