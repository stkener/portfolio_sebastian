import python_ico from "./documents/Python-logo.png";
import kotlin_ico from "./documents/Kotlin_logo.png";
import html_ico from "./documents/HTML-logo.png";
import css_ico from "./documents/CSS-logo.png";
import nodejs_ico from "./documents/nodejs-icono.png";
import react_ico from "./documents/React-icono.png";
import sql_ico from "./documents/Sql-logo.png";
import mysql_ico from "./documents/MySQL-icono.png";
import c_ico from "./documents/c-ico.png";
import boot_ico from "./documents/bootstrap_ico.png";
import js_ico from "./documents/js-logo.png";
import seq_ico from "./documents/seq-logo.png";

const frontend = [
    { nombre: "React", icono: react_ico },
    { nombre: "HTML", icono: html_ico },
    { nombre: "CSS", icono: css_ico },
    { nombre: "JavaScript", icono: js_ico },
    { nombre: "Bootstrap", icono: boot_ico }
];

const backend = [
    { nombre: "Node.js", icono: nodejs_ico },
    { nombre: "Python", icono: python_ico },
    { nombre: "Kotlin", icono: kotlin_ico },
    { nombre: "C", icono: c_ico }
];

const bases = [
    { nombre: "SQL", icono: sql_ico },
    { nombre: "MySQL", icono: mysql_ico },
    { nombre: "Sequelize", icono: seq_ico }
];

const Skills = () => {
    return (
        <section className="py-24 bg-slate-950">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-white mb-16">
                    Tecnologías
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Frontend */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                            Frontend
                        </h3>

                        <div className="space-y-4">
                            {frontend.map((skill) => (
                                <div
                                    key={skill.nombre}
                                    className="flex items-center gap-3"
                                >
                                    <img
                                        src={skill.icono}
                                        alt={skill.nombre}
                                        className="w-8 h-8 object-contain"
                                    />

                                    <span className="text-slate-200">
                                        {skill.nombre}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                            Backend
                        </h3>

                        <div className="space-y-4">
                            {backend.map((skill) => (
                                <div
                                    key={skill.nombre}
                                    className="flex items-center gap-3"
                                >
                                    <img
                                        src={skill.icono}
                                        alt={skill.nombre}
                                        className="w-8 h-8 object-contain"
                                    />

                                    <span className="text-slate-200">
                                        {skill.nombre}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Base de datos */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                            Base de datos
                        </h3>

                        <div className="space-y-4">
                            {bases.map((skill) => (
                                <div
                                    key={skill.nombre}
                                    className="flex items-center gap-3"
                                >
                                    <img
                                        src={skill.icono}
                                        alt={skill.nombre}
                                        className="w-8 h-8 object-contain"
                                    />

                                    <span className="text-slate-200">
                                        {skill.nombre}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Skills;