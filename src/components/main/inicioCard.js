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
            <Link className='inicio_link inicioCard_link' to={this.props.direccion}>
              Conocer 
              <i className="fas fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className='inicioCard_img_container'>
            <img src={this.props.imagen}></img>
            <h1>{this.props.titulo}</h1>
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