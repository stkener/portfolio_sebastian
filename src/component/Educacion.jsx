import { useState } from "react";

import {
    formacionAcademica,
    cursos,
    participacionAcademica
} from "./data/EducacionDatos";

const Educacion = () => {

    const [certificadoActivo, setCertificadoActivo] = useState(null);

    return (
        <section className="py-20 bg-slate-900">

            <div className="max-w-6xl mx-auto px-6">

                {/* TITULO */}

                <h2 className="text-4xl font-bold text-white mb-12">
                    Educación
                </h2>

                {/* FORMACION ACADEMICA */}

                <div className="mb-16">

                    <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                        Formación Académica
                    </h3>

                    <div className="space-y-4">

                        {formacionAcademica.map((item, index) => (

                            <div
                                key={index}
                                className="
                                    bg-slate-950
                                    border
                                    border-slate-800
                                    rounded-2xl
                                    p-5
                                "
                            >

                                <h4 className="text-lg font-semibold text-white">
                                    {item.titulo}
                                </h4>

                                <p className="text-slate-300">
                                    {item.institucion}
                                </p>

                                <p className="text-sm text-slate-500 mt-1">
                                    {item.año}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

                {/* CURSOS */}

                <div className="mb-16">

                    <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                        Capacitaciones
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {cursos.map((curso, index) => (

                            <div
                                key={index}
                                className="
                                    bg-slate-950
                                    border
                                    border-slate-800
                                    rounded-2xl
                                    p-5
                                "
                            >

                                <h4 className="text-lg font-semibold text-white mb-2">
                                    {curso.nombre}
                                </h4>

                                <p className="text-slate-400 mb-5">
                                    Año: {curso.año}
                                </p>

                                <button
                                    onClick={() =>
                                        setCertificadoActivo(curso.img)
                                    }
                                    className="
                                        w-full
                                        py-2
                                        rounded-lg
                                        bg-sky-600
                                        hover:bg-sky-500
                                        transition
                                        text-white
                                    "
                                >
                                    Ver certificado
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

                {/* PARTICIPACION */}

                <div>

                    <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                        Participación Académica
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">

                        {participacionAcademica.map((item, index) => (

                            <div
                                key={index}
                                className="
                                    bg-slate-950
                                    border
                                    border-slate-800
                                    rounded-2xl
                                    p-5
                                "
                            >

                                <p className="text-white text-lg">
                                    {item.nombre}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

            {/* MODAL CERTIFICADO */}

            {certificadoActivo && (

                <div
                    className="
                        fixed
                        inset-0
                        bg-black/80
                        flex
                        items-center
                        justify-center
                        z-50
                        p-4
                    "
                    onClick={() => setCertificadoActivo(null)}
                >

                    <div
                        className="
                            relative
                            max-w-4xl
                            max-h-[90vh]
                        "
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            onClick={() => setCertificadoActivo(null)}
                            className="
                                absolute
                                -top-12
                                right-0
                                text-white
                                text-3xl
                            "
                        >
                            ×
                        </button>

                        <img
                            src={certificadoActivo}
                            alt="Certificado"
                            className="
                                max-h-[85vh]
                                rounded-xl
                                shadow-2xl
                            "
                        />

                    </div>

                </div>

            )}

        </section>
    );
};

export default Educacion;