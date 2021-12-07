import React, { Component } from "react";
import '../../assets/css/peticion.css';
import tutel from "../../assets/img/tutela1.jpg";
import Extra from "../modal/extra";

class Tutela extends Component{
	render (){
		return (
			<div className='accion_bg'>
				<section className='temp'>
          {/* <div class = "botonGlosario">
            <Extra></Extra>
          </div> */}
          <div class ="row">
              <div class = "column center">
                <h1> Conoce sobre la acción de tutela</h1> 
                <h4> Aquí te darmeos una ruta para que entiendas...</h4>   
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