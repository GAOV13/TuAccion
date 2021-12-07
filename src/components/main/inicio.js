import { Component } from 'react';
import { Link } from 'react-router-dom'
import InicioCard from './inicioCard';
import Slider from '../Acciones/extras/slider';
import '../../assets/css/inicio.css'
import Heroe  from "../../assets/img/heroe.jpg";
import Accion from "../../assets/img/accionA.jpg";
import IconoTuAccion from "../../assets/img/elaboraA.jpg";
import Derecho from "../../assets/img/derechoA.jpg"
import Glosario from "../../assets/img/glosarioA.jpg"

class Inicio extends Component {
  render() {
    return (
      <section className='bg1'>
        {/* Inicio de la pagina */}
        <section className='box_container inicio_elabora'>
          {/* Imagen de fondo */}
          <img src={Heroe} className="temporal"></img>
          {/* Texto del principio */}
          <div className='inicio_elabora_info'>
            <div className='inicio_elabora_info_con'>
              <h1>Conoce y Elabora tus <br/>acciones de forma sencilla</h1>
              <p className='color_letra'>
                Conoce las principales acciones constitucionales y derechos <br/>fundamentales, para finalmente
                elaborar tu acción.
              </p>
              <ul>
                <li>
                  <i className='fas fa-check-circle'><p className='letra_bullets'>Accede a una herramienta pedagogica y autónomo</p></i>
                </li>
                <li>
                  <i className='fas fa-check-circle'><p className='letra_bullets'>Aprende con un lenguaje sencillo</p></i>
                </li>
                <li>
                  <i className='fas fa-check-circle'><p className='letra_bullets'>Obtén fácil acceso a la información</p></i>
                </li>
              </ul>
              {/* <Link className='inicio_link' to='/Acciones'>Conoce las acciones</Link> */}
            </div>
          </div>
        </section>
        {/* Boxes para lo que necesitas hacer en la pagina */}
        <section className='inicio_necesitas bg2'>
          {/* Información */}
          <div className='inicio_necesitas_info box_container'>
            <h1>¿Qué necesitas?</h1>
            <p className='color_letra'>
              Estas son las rutas que tenemos para ti, de manera que en el
              <br/>ultimo boton ya tengas claridad respecto a la acción que
              <br/> deseas realizar.   
            </p>
          </div>
          {/* Boxes */}
          <div className='inicio_necesitas_container box_container'>
            <InicioCard 
              titulo="Acciones" imagen={Accion} direccion="/Acciones" 
              texto="Conoce sobre las principales acciones constitucionales"
            ></InicioCard>
            <InicioCard
              titulo="Glosario" imagen={Glosario} direccion="/Glosario" 
              texto="Investiga las palabras que no conozcas"
            ></InicioCard>
            <InicioCard 
              titulo="Derechos"  imagen={Derecho} direccion="/Derechos" 
              texto="Conoce tus derechos fundamentales"
            ></InicioCard>
            <InicioCard 
              titulo="Tu Acción" imagen={IconoTuAccion} direccion="/elabora-tu-accion" 
              texto="Elabora tu acción con nuestra ayuda"
            ></InicioCard>
          </div>
        </section>
        {/* Slider */}
        <section className='inicio_objetivo'>
          <Slider onIdSelect={this.updateId} id={this.state.id} pag="/"></Slider>
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

export default Inicio;