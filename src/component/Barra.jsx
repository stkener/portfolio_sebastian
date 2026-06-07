import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {

    const [menuAbierto, setMenuAbierto] = useState(false);

    const links = [
        {
            nombre: "Sobre mí",
            href: "#about"
        },
        {
            nombre: "Tecnologías",
            href: "#skills"
        },
        {
            nombre: "Experiencia",
            href: "#experiencia"
        },
        {
            nombre: "Proyectos",
            href: "#proyectos"
        },
        {
            nombre: "Educación",
            href: "#educacion"
        }
    ];

    return (
        <header
            className="
                fixed
                top-0
                left-0
                w-full
                z-50
                bg-transparent
                
                
                
            "
        >
            <div className="max-w-6xl mx-auto px-6">

                <div className="h-16 flex items-center justify-end">

                    {/* DESKTOP */}
                    
                    <nav className="hidden md:flex items-center gap-8">
                    

                        {links.map((link) => (
                            <a
                                key={link.nombre}
                                href={link.href}
                                className="
                                    text-slate-300
                                    hover:text-sky-400
                                    transition-colors
                                "
                            >
                                {link.nombre}
                            </a>
                        ))}

                    </nav>

                    {/* BOTON MOBILE */}

                    <button
                        className="
                            md:hidden
                            text-white
                            text-3xl
                        "
                        onClick={() =>
                            setMenuAbierto(!menuAbierto)
                        }
                    >
                        {menuAbierto ? <HiX /> : <HiMenu />}
                    </button>

                </div>

            </div>

            {/* MENU MOBILE */}

            {menuAbierto && (

                <div
                    className="
                        md:hidden
                        bg-slate-950
                        border-t
                        border-slate-800
                    "
                >

                    <div className="flex flex-col px-6 py-4">

                        {links.map((link) => (

                            <a
                                key={link.nombre}
                                href={link.href}
                                className="
                                    py-3
                                    text-slate-300
                                    hover:text-sky-400
                                "
                                onClick={() =>
                                    setMenuAbierto(false)
                                }
                            >
                                {link.nombre}
                            </a>

                        ))}

                    </div>

                </div>

            )}

        </header>
    );
};

export default Navbar;