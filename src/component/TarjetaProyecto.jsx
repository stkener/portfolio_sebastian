import { FaGithub, FaEye } from "react-icons/fa";

const Tarjeta = ({ proyecto }) => {
    return (
        <div className="
            bg-slate-900
            border
            border-slate-800
            rounded-2xl
            overflow-hidden
            hover:border-sky-500
            hover:-translate-y-1
            transition-all
            duration-300
            flex
            flex-col
        ">

            <img
                src={proyecto.img}
                alt={proyecto.nombre}
                className="
                    w-full
                    h-52
                    object-cover
                "
            />

            <div className="p-6 flex flex-col flex-grow">

                <div>
                    <h3 className="
                        text-xl
                        font-semibold
                        text-white
                        mb-3
                    ">
                        {proyecto.nombre}
                    </h3>

                    <p className="
                        text-slate-400
                        text-sm
                        leading-relaxed
                        mb-6
                    ">
                        {proyecto.descripcion}
                    </p>
                </div>

                <div className="
                    flex
                    flex-wrap
                    gap-3
                    mb-6
                ">
                    {proyecto.tecnologias.map((tec, idx) => (
                        <img
                            key={idx}
                            src={tec}
                            alt=""
                            className="w-8 h-8"
                        />
                    ))}
                </div>

                <div className="
                    mt-auto
                    flex
                    gap-3
                ">

                    {proyecto.demo ? (
                        <a
                            href={proyecto.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                flex-1
                                flex
                                items-center
                                justify-center
                                gap-2
                                bg-sky-500
                                hover:bg-sky-400
                                text-white
                                py-3
                                rounded-lg
                                transition
                            "
                        >
                            Demo
                            <FaEye />
                        </a>
                    ) : (
                        <span
                            className="
                                flex-1
                                flex
                                items-center
                                justify-center
                                gap-2
                                bg-slate-800
                                text-slate-500
                                py-3
                                rounded-lg
                                cursor-not-allowed
                            "
                        >
                            Demo
                            <FaEye />
                        </span>
                    )}

                    {proyecto.link ? (
                        <a
                            href={proyecto.link}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                flex-1
                                flex
                                items-center
                                justify-center
                                gap-2
                                border
                                border-slate-600
                                hover:border-sky-400
                                text-white
                                py-3
                                rounded-lg
                                transition
                            "
                        >
                            Código
                            <FaGithub />
                        </a>
                    ) : (
                        <span
                            className="
                                flex-1
                                flex
                                items-center
                                justify-center
                                gap-2
                                bg-slate-800
                                text-slate-500
                                py-3
                                rounded-lg
                                cursor-not-allowed
                            "
                        >
                            Código
                            <FaGithub />
                        </span>
                    )}

                </div>

            </div>
        </div>
    );
};

export default Tarjeta;