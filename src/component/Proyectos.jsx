import {
    proyectosDestacados,
    desarrolloWeb,
    herramientasAutomatizacion,
    proyectosAcademicos,
    proyectosAprendizaje
} from "./data/ProyectosDatos";

import TarjetaProyecto from "./TarjetaProyecto";

const Seccion = ({ titulo, proyectos }) => (
    <div className="mb-20">

        <h3 className="text-2xl font-semibold text-sky-400 mb-8">
            {titulo}
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto, index) => (
                <TarjetaProyecto
                    key={index}
                    proyecto={proyecto}
                />
            ))}
        </div>

    </div>
);

const Proyectos = () => {
    return (
        <section
            id="proyectos"
            className="py-24 bg-slate-950"
        >
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-white mb-12">
                    Proyectos
                </h2>

                {/* Proyecto destacado */}

                {proyectosDestacados.length > 0 && (
                    <div className="mb-24">

                        <h3 className="text-2xl font-semibold text-sky-400 mb-8">
                            Proyecto Destacado
                        </h3>

                        {proyectosDestacados.map((proyecto, index) => (
                            <TarjetaProyecto
                                key={index}
                                proyecto={proyecto}
                                destacado={true}
                            />
                        ))}

                    </div>
                )}

                <Seccion
                    titulo="Desarrollo Web"
                    proyectos={desarrolloWeb}
                />

                <Seccion
                    titulo="Herramientas y Automatización"
                    proyectos={herramientasAutomatizacion}
                />

                <Seccion
                    titulo="Proyectos Académicos"
                    proyectos={proyectosAcademicos}
                />

                <Seccion
                    titulo="Proyectos de Aprendizaje"
                    proyectos={proyectosAprendizaje}
                />

            </div>
        </section>
    );
};

export default Proyectos;