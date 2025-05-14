import React, { useRef, useState } from "react"; /*, { Fragment, useEffect, useState }*/

import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

/*import 'bootstrap/dist/css/bootstrap.min.css';*/

import fotoFicha from "./documents/foto_ficha.jpg";

import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaCopy } from 'react-icons/fa';
import { LiaFileDownloadSolid } from "react-icons/lia";
//import cvpdf from "/documents/CV_sebastian.pdf"

const Ficha = () => {
    const correo = "stkener@gmail.com"; // El correo a copiar
    const [mensajeCopiado, setMensajeCopiado] = useState(false);
    const target = useRef(null);
    const timeoutRef = useRef(null);

    // Función para copiar al portapapeles
    const copiarAlPortapapeles = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Crear un input temporal para copiar el texto
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
/*
<FaGithub className="tamanioIconoGithub"/>
<CiLinkedin className="tamanioIconoLinkedin"/>
*/

