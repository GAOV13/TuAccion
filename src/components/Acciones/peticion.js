import React, { Component } from "react";
import Slider from "./extras/slider";
import '../../assets/css/peticion.css';

class Peticion extends Component{
	render (){
		return (
			<div className='accion_bg'>
				<section className='temp'>
                    <div class ="row">
                        <div class = "column left">
                            <h1> Conoce el derecho de Peticion </h1> 
                            <h4> Aquí te darmeos una ruta para que entiendas...</h4>   
                        </div>
                        <div class = "column right">
                            <img className='aBoton_img' src=''></img><br/>
                        </div>
                    </div>
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

export default Peticion;