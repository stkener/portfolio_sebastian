import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Tarjeta = ({ proyecto }) => {
    return(
        <div className="tarjetaProyectos">
            <img src={proyecto.img} alt={proyecto.nombre} className="imagenTarjetaProyectos" />

            <div className="contenidoProyecto">
                <div>
                    <h3 className="titulos titulosTabletCel">{proyecto.nombre}</h3>
                    <p className="textoTarjetaProyectos">{proyecto.descripcion}</p>
                </div>
                <div className="tecnologiasProyecto">
                    {proyecto.tecnologias.map((tec, idx) => (
                        <img className="imagenLogos" src={tec} alt="" key={idx} />
                    ))}
                </div>

                <div className="botonesProyecto">
                    {/*<a className= "botonFicha" href={proyecto.demo} title="Demo" target="_blank">Demo<FaEye className="tamanioIconoGithub" /></a>
                    
                    <a className= "botonFicha" href={proyecto.link} title="Github" target="_blank">Codigo<FaGithub className="tamanioIconoGithub" /></a>*/}
                    {proyecto.demo ? (
                        <a className="botonFicha" href={proyecto.demo} title="Demo" target="_blank">Demo <FaEye className="tamanioIconoGithub" /></a>
                    ) : (
                        <span className="botonFicha botonDeshabilitado" title="Demo no disponible">Demo <FaEye className="tamanioIconoGithub" /></span>
                    )}

                    {proyecto.link ? (
                        <a className="botonFicha" href={proyecto.link} title="Github" target="_blank">Código <FaGithub className="tamanioIconoGithub" /></a>
                    ) : (
                        <span className="botonFicha botonDeshabilitado" title="Código no disponible">Código <FaGithub className="tamanioIconoGithub" /></span>
  )}
                    
                </div>
            </div>
        </div>
    )
}
export default Tarjeta;