import { useState } from "react";
import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")


    const { registrarColaborador, creandoTeam } = props

    const manejarEnvio = (event) => {
        // ese prevent me permite evitar que se recargue la pagina cada vez le dpy click a crear
        event.preventDefault()
        //console.log("Manejar el envio", event)

        let datosAEnviar = {
            // nombre: nombre,
            // puesto: puesto,
            // foto: foto es lo mismo que lo de abajo
            nombre,
            puesto,
            foto,
            equipo
        }
        // props.registrarColaborador(datosAEnviar) Deconstruccion la declor arriba para no estar escribiendo props
        registrarColaborador(datosAEnviar)
        //console.log(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        console.log(titulo, color)
        creandoTeam({ titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresa el nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />

            <Campo
                titulo="Puesto"
                placeholder="Ingresa el puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />

            <Campo titulo="Foto"
                placeholder="Ingresa enlace de la foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones
                valor={equipo}
                actualizarTeam={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo} className="formu-crear">
            <h2>
                Rellena el formulario para crear el equipo.
            </h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />

             <Campo
                titulo="Color"
                placeholder="Ingresa el color en Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            /> 
              
            <Boton>
                Registrar equipo
            </Boton>
            
        </form>
        
    </section>
}
export default Formulario;