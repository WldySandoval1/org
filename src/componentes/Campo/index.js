
import "./Campo.css"

const Campo = (props) => {
    //console.log("Datos", props)

    const placeholderModificado = `${props.placeholder}...`;

    //Destructuracion
    const { type = "text" } = props
    //console.log(type)

    
    const recibirValor = (e) =>{
        //console.log("cambio",e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={recibirValor}
            type={type}

        />
    </div>

}

export default Campo;