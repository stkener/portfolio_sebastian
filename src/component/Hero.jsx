/*import React, { useRef, useState } from "react";

import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

import fotoFicha from "./documents/foto_ficha.jpg";

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaCopy } from 'react-icons/fa';
import { LiaFileDownloadSolid } from "react-icons/lia";


const Ficha = () => {
    const correo = "stkener@gmail.com";
    const [mensajeCopiado, setMensajeCopiado] = useState(false);
    const target = useRef(null);
    const timeoutRef = useRef(null);


    const copiarAlPortapapeles = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }


        const input = document.createElement('input');
        input.value = correo; // Establece el valor del correo
        document.body.appendChild(input); // Agrega el input al DOM
        input.select(); // Selecciona el texto
        document.execCommand('copy'); // Ejecuta el comando de copiar
        document.body.removeChild(input); // Elimina el input temporal

        setMensajeCopiado(true);
        setTimeout(() => setMensajeCopiado(false), 2000); // Oculta después de 2 segundos

    
    }

    return (
        <div className="fichaTecnica">
            <div className="contenedorImgCvFicha">
                <img src={fotoFicha} />    
                <div className="contenedorPFicha"><p className="fuenteFicha">Trainee/Jr</p></div>
                <a className= "botonDescargaFicha" href="documents/CV_sebastian.pdf" title="CV" target="_blank">CV <LiaFileDownloadSolid className="tamanioIconoLinkedin"/></a>
                
            </div>
            <div className="contenedorNombreBotonesFicha">
                <div className="contenedorNombre">
                    <p className="fuenteFichaTitulo">Sebastian</p>
                    <p className="fuenteFichaTitulo">Kener</p>
                </div>
                <div className="contenedorBotones">
                    <a className= "botonFicha" href="https://www.linkedin.com/in/sebastiankener/" title="Linkedin" target="_blank">Linkedin <CiLinkedin className="tamanioIconoLinkedin"/></a>
                    <a className= "botonFicha" href="https://github.com/stkener" title="Github" target="_blank">Github  <FaGithub className="tamanioIconoGithub" /></a>
                </div>
                <div className="contenedorMailBoton">
                    <p className="fuenteFichaMail">{correo}</p>
                    <button ref={target} onClick={copiarAlPortapapeles} className="botonCopiarCorreo">
                        <FaCopy className="tamanioIconoCopy" />
                    </button>

                    <Overlay target={target.current} show={mensajeCopiado} placement="right">
                        {(props) => (
                            <Tooltip id="correo-copiado" {...props}>
                                ¡Correo copiado!
                            </Tooltip>
                        )}
                    </Overlay>
                </div>
                
            </div>
        </div>
    );
}
export default Ficha;
*/

import React from "react";
import fotoFicha from "./documents/foto_ficha.jpg";

const Hero = () => {
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

                        <p className="max-w-2xl text-lg text-slate-400 mb-10">
                            Desarrollo de software, tecnología educativa y participación en proyectos académicos.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-lg font-medium transition">
                                Ver proyectos
                            </button>

                            <button className="border border-slate-600 hover:border-sky-400 px-6 py-3 rounded-lg transition">
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
        </section>
    );
};

export default Hero;

