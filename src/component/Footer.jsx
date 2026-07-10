import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

const Footer = () => {

    return (

        <footer className="bg-slate-950 border-t border-slate-800">

            <div className="max-w-6xl mx-auto px-6 py-12">

                <div className="grid md:grid-cols-2 gap-10">

                    {/* IZQUIERDA */}

                    <div>

                        <h3 className="text-2xl font-bold text-white">
                            Sebastián Kener
                        </h3>

                        <p className="text-slate-400 mt-3 leading-relaxed">
                            Desarrollador de Software especializado en desarrollo web,
                            automatización de procesos y soluciones tecnológicas para
                            instituciones y organizaciones.
                        </p>

                    </div>

                    {/* DERECHA */}

                    <div className="md:text-right">

                        <h4 className="text-lg font-semibold text-white mb-4">
                            Contacto
                        </h4>

                        <div className="flex md:justify-end gap-5 text-2xl">

                            <a
                                href="https://github.com/stkener"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 hover:text-sky-400 transition"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com/in/sebakener"
                                target="_blank"
                                rel="noreferrer"
                                className="text-slate-400 hover:text-sky-400 transition"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="mailto:stkener@gmail.com"
                                className="text-slate-400 hover:text-sky-400 transition"
                            >
                                <FaEnvelope />
                            </a>

                        </div>

                    </div>

                </div>

                <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">

                    © {new Date().getFullYear()} Sebastián Kener · Desarrollado con React y Tailwind CSS.

                </div>

            </div>

        </footer>

    );

};

export default Footer;