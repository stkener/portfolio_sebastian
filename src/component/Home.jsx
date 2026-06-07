
import React from "react";
import Barra from "./Barra";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experiencia";
import Proyectos from "./Proyectos";
import Educacion from "./Educacion";

const Home = () => {
    return (
        <>
            <Barra />

            <main className="bg-slate-950 text-white min-h-screen overflow-x-hidden">

                {/* HERO */}
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Proyectos />
                <Educacion />
            </main>
        </>
    );
};

export default Home;