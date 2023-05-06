import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';
const Equipo = (props) => {

    //Destrucuturacion

    const { colorPrimario, colorSecundario, titulo, id } = props.datos

    const { colaboradoresito, borrarColaborador, actualizandoElColor, meGusta} = props

    const objColorFondo = { backgroundColor: hexToRgba(colorPrimario, 0.3)}

    const estilotitulo = { borderColor: colorPrimario }



    // return <section className="equipo" style={{backgroundColor: colorSecundario}}>
    // <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
    // <div className="colaboradores"> ?? manera sin definir constantes doble{{}}
    // </div>

    //console.log(colaboradores.length > 0)
    
    // tipo de condicional <> pero funciona igual con un if y se me hace menos complicado pero asi lo hizo el profe
    return <>
        {
            colaboradoresito.length > 0 &&
            <section className="equipo" style={objColorFondo}>
                <input 
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) =>{
                        console.log(evento.target.value)
                        actualizandoElColor(evento.target.value, id)
                        
                    }}
                />
                <h3 style={estilotitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradoresito.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={borrarColaborador}
                            elLike={meGusta}
                        />)
                    }
                </div>
            </section>
        }
    </>

}

export default Equipo