import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import { v4 as uuid } from 'uuid';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false) // este hace que el formulario no se muestre al principio

  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }]) //iniclializar con un arreglo vacio solo con[] MUY IMPORTANTE, Si quiero cargar predeterminados los puedo agregar aca y agregar {}

  const [equipos, actualizaEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",      
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])
  //otro tipo de condicional si se cumple muestra el formulario : si no lo oculta
  //ternario --> condicion ? seMuestra : noSeMuestra
  // { mostrarFormulario === true ? <Formulario /> : <></>}
  // la de la linea 24 es el otro tipo de condicio
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo claborador ", colaborador)
    //Spread operator los tres puntos es una copia y loe envia a colaborador asi los va agregando
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    console.log(nuevosColaboradores)
    actualizarColaboradores(nuevosColaboradores)
  }
  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizaEquipos(equiposActualizados)
  }
  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizaEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  //Dar like
  const like = (id) =>{
    console.log(id)
    const likeActualizado = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(likeActualizado)
  }


  return (
    < div >
      {/* {Header()}
      <Header></Header> Las puedo mandar llamar de estars tres formas, recomendable poner el nomfre de las funciones con la primera en mayuscula para poder identificarlas de manera facil*/}
      <Header />
      {/* { mostrarFormulario === true ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((team) => team.titulo)}
          registrarColaborador={registrarColaborador}
          creandoTeam={crearEquipo}
        />
      }

      <MiOrg cambianditoMostrading={cambiarMostrar} />
      {/* {
        equipos.map((team) => {
          return <Equipo datos={team} key={team.titulo} /> //con map siempre usar key
         }) Abajo manera corta
      } */}
      {
        equipos.map((team) => <Equipo
          datos={team}
          key={team.titulo}
          colaboradoresito={colaboradores.filter(colaborador => colaborador.equipo === team.titulo)}
          borrarColaborador={eliminarColaborador}
          actualizandoElColor={actualizarColor}
          meGusta={like}
        />
        )//con map siempre usar key
      }
      <Footer />
    </div >
  );
}

export default App;
