import { Component } from "react";
import { Link } from 'react-router-dom';
import "../../assets/css/inicio.css"

class InicioCard extends Component{
  render (){
    return(
      <div className='col'>
        <div className='col_container'>
          <p>
            {this.props.texto}
          </p>
          <div className='inicioCard_link_container'>
            <Link className='inicioCard_link inicio_link' to={this.props.direccion}>
              <h1>{this.props.titulo}</h1> 
              <i className='fas fa-solid fa-arrow-right'></i>
            </Link>
          </div>
          <div className='inicioCard_img_container'>
            <i className={this.props.icono}></i>
            {/* <h1></h1> */}
          </div>
        </div>
      </div>
    );
  }

  constructor(props){
    super(props)
  }
}

export default InicioCard;