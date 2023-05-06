import "./Coloaborador.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborador = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, elLike } = props

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre}></img>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {/* ternario
            condicion ? verdadero: falso
            la condicion siempre iniciara el falso por eso aparace el corazon en negro  */}
            {fav ? <AiFillHeart color="red" onClick={() => elLike(id)} /> : <AiOutlineHeart onClick={() => elLike(id)} />}


        </div>

    </div>
}
export default Colaborador