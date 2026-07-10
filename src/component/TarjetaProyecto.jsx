import { FaGithub, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

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

                <div
                    className="
                        mt-auto
                        flex
                        gap-3"
                >

                    {proyecto.botones.map((boton, idx) => {
                        const esGithub = boton.icono === "github";
                        const clases = boton.url
                            ? `
                            flex-1
                            flex
                            items-center
                            justify-center
                            gap-2
                            ${esGithub
                                ? "border border-slate-600 hover:border-sky-400 text-white"
                                : "bg-sky-500 hover:bg-sky-400 text-white"}
                            py-3
                            rounded-lg
                            transition
                            `
                            : `
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
                            `;

                        const contenido = (
                            <>
                                {boton.texto}
                                {esGithub ? <FaGithub /> : <FaEye />}
                            </>
                        );

                        return boton.url ? (
                                boton.url.startsWith("/") ? (
                                <Link
                                    key={idx}
                                    to={boton.url}
                                    className={clases}
                                >
                                    {contenido}
                                </Link>
                                ) : (
                                <a
                                    key={idx}
                                    href={boton.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clases}
                                >
                                    {contenido}
                                </a>
                                )
                            ) : (
                                <span
                                key={idx}
                                className={clases}
                                >
                                    {contenido}
                                </span>
                            );

                    })}

                </div>
            </div>
        </div>
    );
};

export default Tarjeta;