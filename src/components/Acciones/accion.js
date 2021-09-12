// Esta es de prueva temporar
import React, { Component } from "react";
import AccionBoton from "./extras/accionBoton";
import Ave from "../../assets/img/Ave.png";
import Anfibio from "../../assets/img/Anfibio.png";
import Slider from "./extras/slider";

class Accion extends Component{
	render (){
		return (
			<div className='accion_bg'>
				<section className='accion_header'>
					<div className='accion_header_col accion_info'>
						<div className='accion_palabras'>
							<h2>our vision</h2>
							<h1>¿Qué acción quieres<br/>conocer?</h1>
							<p>
								Haz clic en las palabras subrayadas para conocer<br/>su significado, o presiona el botón.
							</p>
						</div>
						<div className='accion_boton_container'>
							<AccionBoton nombre="Derecho de Petición" direccion="/Acciones/derecho-de-peticion" imagen={Ave}></AccionBoton>
							<AccionBoton nombre="Accion de Tutela" direccion="/Acciones/accion-de-tutela" imagen={Anfibio}></AccionBoton>
						</div>
					</div>
					<div className='accion_header_col accion_img'>
            <Slider onIdSelect={this.updateId} id={this.state.id} pag={"/Acciones"}></Slider>
					</div>
				</section>
				<section className='temp'>
					<h1>Hola Compañeros</h1>
				</section>      
			</div>
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