import { Component } from "react";
import { Link } from 'react-router-dom';
import "../../assets/css/footer.css"

class Footer extends Component {
  render(){
    return (  
      <section className='footer_info'>
          <div className='footer_container'>
            <div className='footer_item'>
              <Link className="nav_links" to="/">Inicio</Link>
            </div>
            <div className='footer_item'>
              <Link className="nav_links" to="/Acciones">Acciones</Link>
            </div>
            <div className='footer_item'>
              <Link className="nav_links" to="/Glosario">Glosario</Link>
            </div>
            <div className='footer_item'>
              <Link className="nav_links" to="/Derechos">Derechos</Link>
            </div>
            <div className='footer_item'>
              <Link className="nav_links" to="/elabora-tu-accion">Elabora tu Acción</Link>
            </div>
            <div className='footer_item'>
              <Link className="nav_links" to="/Contact">Contacto</Link>
            </div>
          </div>
          <p>Copyright DIT LAB 2022</p>
      </section>
    );
  }
}

export default Footer;