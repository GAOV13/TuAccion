import { Component } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.svg';
import "../../assets/css/navBar.css"

class Navbar extends Component{
  render(){
    return(
      <nav className="nav_container">
        <div className="nav_logo">
          <h1>
            <img src={Logo} width="50" height="40"></img>
            <Link className="nav_links" to="/">TU ACCION</Link>
          </h1>
        </div>
        <div className="nav_links_container">
          <Link className="nav_links" to="/">Inicio</Link>
          <Link className="nav_links" to="/Acciones">Acciones</Link>
          <Link className="nav_links" to="/Glosario">Glosario</Link>
          <Link className="nav_links" to="/Derechos">Derechos</Link>
          <Link className="nav_links" to="/elabora-tu-accion">Elabora tu Acción</Link>
          <Link className="nav_links" to="/Contact">Contacto</Link>
        </div>
        <div className="nav_serch">
          <input type="serch" placeholder="Buscar..." aria-label="Search"></input>
        </div>
      </nav>
    );
  }
}

export default Navbar;