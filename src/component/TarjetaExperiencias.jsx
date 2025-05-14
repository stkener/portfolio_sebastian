
export const TarjetaExperienciaInformatica =({ experienciaInformatica }) => {
    return(
        <div className="contenedorTarjetaExperiencia">
            <div className="contenedorInicioExpe">
                <span class="letraPuestoTrabajo">{experienciaInformatica.Puesto}</span>
                <span class="letraTrabajoCursiva">{experienciaInformatica.Empresa}</span>
                <span class="letraTrabajoCursiva">{experienciaInformatica.desdeHasta}</span>           
            </div>
            <div className="">
                <p class="subTitulos">Funciones</p>
                <ul class="estiloListaTrabajo letraTrabajo">
                    {experienciaInformatica.funciones.map((f, index) => (
                        <li key={index}>{f}</li>
                        ))
                    }
                </ul>                                    
            </div>
            <div className="">
                <p class="subTitulos">Tecnologias</p>
                <ul class="estiloListaTrabajo letraTrabajo">
                    {experienciaInformatica.tecnologias.map((t, index) => (
                        <li key={index}>{t}</li>
                        ))
                    }
                </ul>                                    
            </div>
        </div>
    )
}
/*export default TarjetaExperienciaInformatica;*/

export const TarjetaOtrasExperiencias = ({ otraExperiencia }) => {
 return(
    <div className="contenedorTarjetaExperiencia">
        <div className="contenedorInicioExpe">
            <span class="letraPuestoTrabajo">{otraExperiencia.Puesto}</span>
            <span class="letraTrabajoCursiva">{otraExperiencia.Empresa}</span>
            <span class="letraTrabajoCursiva">{otraExperiencia.desdeHasta}</span>           
        </div>
        <div className="">
            <p class="subTitulos">Funciones</p>
            <ul class="estiloListaTrabajo letraTrabajo">
                {otraExperiencia.funciones.map((f, index) => (
                    <li key={index}>{f}</li>
                    ))
                }
            </ul>                                    
        </div>
    </div>
 )
}
/*export default [TarjetaExperienciaInformatica, TarjetaOtrasExperiencias];*/