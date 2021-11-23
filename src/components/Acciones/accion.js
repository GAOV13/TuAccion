import React, { Component } from "react";
import AccionBoton from "./extras/accionBoton";
import Peticion from "../../assets/img/linkPeticion.jpg";
import Tutela from "../../assets/img/linkTutela.jpg";

class Accion extends Component{
	render (){
		return (
			<section className='accion_bg'>
				<section className='accion_header'>
					<div className='accion_info'>
						<div className='accion_palabras'>
							<h1>¿Qué acción quieres conocer?</h1>
							<p>
								Haz clic en las palabras subrayadas para conocer<br/>su significado, o presiona el botón.
							</p>
						</div>
						<div className='accion_boton_container'>
							<AccionBoton  direccion="/Acciones/derecho-de-peticion" imagen={Peticion}></AccionBoton>
							{/* <AccionBoton nombre="Derecho de Petición" direccion="/Acciones/derecho-de-peticion" imagen={Peticion}></AccionBoton>
							<AccionBoton nombre="Acción de Tutela" direccion="/Acciones/accion-de-tutela" imagen={Tutela}></AccionBoton> */}
							<AccionBoton  direccion="/Acciones/accion-de-tutela" imagen={Tutela}></AccionBoton>
						</div>
					</div>
				</section>   
			</section>
		);
	}

  constructor(props){
    super(props);
    this.state = { id: 1 };
    this.updateId = this.updateId.bind(this);
  }

  componentWillUnmount(){
    this.setState( { } )
	}

  updateId(n){
    this.setState( { id: n } );
  }

}

export default Accion;