// import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{

    //Definicion de Estado algo que va a estar cambiando tipo swhic este pasa de true a false - hooks
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
    console.log(props)

    // const [mostrar, actualizarMostrar] = useState(true)
    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar elementos", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambianditoMostrading}/>

    </section>
}

export default MiOrg;