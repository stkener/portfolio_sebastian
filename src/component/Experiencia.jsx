import { useState } from "react";

import {
    experienciaProfesional,
    experienciaAcademica,
    otrasExperiencias
} from "./data/ExperienciaDatos";

const Experience = () => {

    const [mostrarOtras, setMostrarOtras] = useState(false);

    const CardExperiencia = ({ item }) => (
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 mb-6">

            <h3 className="text-xl font-semibold text-white">
                {item.Puesto}
            </h3>

            <p className="text-sky-400 mt-1">
                {item.Empresa}
            </p>

            <p className="text-sm text-slate-400 mt-1 mb-4">
                {item.desdeHasta}
            </p>

            <ul className="space-y-2 text-slate-300">
                {item.funciones.map((funcion, index) => (
                    <li key={index}>
                        • {funcion}
                    </li>
                ))}
            </ul>

            {item.tecnologias && (
                <div className="flex flex-wrap gap-2 mt-5">

                    {item.tecnologias.map((tec, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-lg bg-sky-900/30 border border-sky-700 text-sky-300"
                        >
                            {tec}
                        </span>
                    ))}

                </div>
            )}

        </div>
    );

    return (
        <section className="py-20 bg-slate-900">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-white mb-12">
                    Experiencia
                </h2>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* PROFESIONAL */}
                    <div>

                        <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                            Profesional
                        </h3>

                        {experienciaProfesional.map((item, index) => (
                            <CardExperiencia
                                key={index}
                                item={item}
                            />
                        ))}

                    </div>

                    {/* ACADÉMICA */}
                    <div>

                        <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                            Académica
                        </h3>

                        {experienciaAcademica.map((item, index) => (
                            <CardExperiencia
                                key={index}
                                item={item}
                            />
                        ))}

                    </div>

                </div>

                {/* OTRAS EXPERIENCIAS */}

                <div className="mt-12">

                    <button
                        onClick={() => setMostrarOtras(!mostrarOtras)}
                        className="text-sky-400 font-medium hover:text-sky-300 transition"
                    >
                        {mostrarOtras
                            ? "Ocultar otras experiencias ▲"
                            : "Ver otras experiencias ▼"}
                    </button>

                    {mostrarOtras && (

                        <div className="mt-8">

                            {otrasExperiencias.map((item, index) => (
                                <CardExperiencia
                                    key={index}
                                    item={item}
                                />
                            ))}

                        </div>

                    )}

                </div>

            </div>

        </section>
    );
};

export default Experience;