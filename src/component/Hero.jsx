import {React, useState} from "react";
import fotoFicha from "./documents/foto_ficha.jpg";

import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaCheck
} from "react-icons/fa";

const Hero = () => {
    const [copiado, setCopiado] = useState(false);

const copiarMail = () => {
    navigator.clipboard.writeText("stkener@gmail.com");

    setCopiado(true);

    setTimeout(() => {
        setCopiado(false);
    }, 2000);
};
    return (
        <section className="min-h-screen flex items-center pt-20 md:pt-0">
            <div className="max-w-6xl mx-auto px-6 w-full">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* TEXTO */}
                    <div>

                        <p className="text-sky-400 font-medium mb-4">
                            Hola, soy
                        </p>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Sebastian Kener
                        </h1>

                        <h2 className="text-2xl md:text-4xl text-slate-300 mb-6">
                            Técnico Universitario en Programación
                        </h2>

                        <p className="max-w-2xl text-lg text-slate-400 mb-4">
                            Desarrollo de software, tecnología educativa y participación en proyectos académicos.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 mt-8 mb-8">

                            <a
                                href="https://github.com/stkener"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex items-center gap-2
                                    text-slate-400
                                    hover:text-sky-400
                                    transition
                                "
                            >
                                <FaGithub size={22} />
                                <span>GitHub</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sebakener/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex items-center gap-2
                                    text-slate-400
                                    hover:text-sky-400
                                    transition  
                                "
                            >
                                <FaLinkedin size={22} />
                                <span>LinkedIn</span>
                            </a>

                            <button
                                onClick={copiarMail}
                                className="
                                    flex items-center gap-2
                                    text-slate-400
                                    hover:text-sky-400
                                    transition
                                "
                            >
                                <FaEnvelope size={22} />
                                <span>stkener@gmail.com</span>
                            </button>   

                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button 
                                onClick={() =>
                                    document
                                        .getElementById("proyectos")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-lg font-medium transition">
                                Ver proyectos
                            </button>

                            <button 
                                onClick={() =>
                                    window.open(
                                    "https://drive.google.com/file/d/1TxOCFngn56CYBy2_h-YVMRReJKDdyVrt/view?usp=sharing",
                                    "_blank"
                                    )
                                }
                                className="border border-slate-600 hover:border-sky-400 px-6 py-3 rounded-lg transition">
                                Descargar CV
                            </button>
                        </div>
                        

                    </div>

                    {/* FOTO */}
                    <div className="flex justify-center">
                        <img
                            src={fotoFicha}
                            alt="Sebastian Kener"
                            className="
                                w-72
                                h-72
                                object-cover
                                rounded-full
                                border-4
                                border-sky-500
                                shadow-xl
                            "
                        />
                    </div>

                </div>

            </div>
            {copiado && (
                <div
                    className="
                        fixed
                        bottom-6
                        right-6
                        bg-sky-500
                        text-white
                        px-4
                        py-3
                        rounded-xl
                        shadow-xl
                        flex
                        items-center
                        gap-2
                        z-50
                    "
                >
                    <FaCheck />
                    Mail copiado
                </div>
            )}
        </section>
    );
};

export default Hero;

