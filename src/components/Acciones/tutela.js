import React, { Component } from "react";
import Slider from "./extras/slider";
import '../../assets/css/peticion.css';
import Ave from "../../assets/img/Ave.png";
import tutel from "../../assets/img/tutela1.jpg";

class Tutela extends Component{
	render (){
		return (
			<div className='accion_bg'>
				<section className='temp'>
          <div class ="row">
              <div class = "column left">
                <h1> Conoce la tutela </h1> 
                <h4> Aquí te darmeos una ruta para que entiendas...</h4>   
              </div>
              <div class = "column right">
                <img className='aBoton_img' src={Ave}></img><br/>
              </div>
          </div>
				</section>  
        <section className='tutela_container'>
          <img src={tutel}></img>
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

export default Tutela;