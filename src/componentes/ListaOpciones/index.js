import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> nombrearrelo.map( (equipo, indice)=>{} return <option></option>) recorrer el arreglo

    const manejarCambio = (e) =>{
        console.log("Cambio", e.target.value)
         props.actualizarTeam(e.target.value) 
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio} required>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {/* manera corta */}
            {props.equipos.map((equipo, indice) => <option key={indice} value={equipo}>{equipo} </option>)}; d
            {/* Manera larga
         {equipos.map((equipo, indice)=> {                  
            return <option key={indice}>{equipo}</option>           
         })}; */}
        </select>
    </div>
}
export default ListaOpciones;   