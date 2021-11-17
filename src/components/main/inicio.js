import { Component } from 'react';
import { Link } from 'react-router-dom'
import InicioCard from './inicioCard';
import Slider from '../Acciones/extras/slider';
import '../../assets/css/inicio.css'
import Temporal from "../../assets/img/Temporal.jpg";

class Inicio extends Component {
  render() {
    return (
      <section className='bg1'>
        <section className='box_container inicio_elabora'>
          {/* Imagen de fondo */}
          <img src={Temporal} className="temporal"></img>
          <div className='inicio_elabora_info'>
            <div className='inicio_elabora_info_con'>
              {/* <h2 className='color_letraT'>our vision</h2> */}
              <h1>Conoce y Elabora tus acciones de forma sencilla</h1>
              <p className='color_letra'>
                Conoce las principales acciones constitucionales y derechos fundamentales, para finalmente
                elaborar tu acción.
              </p>
              <ul>
                <li>
                  <i className='fas fa-check-circle'><p>Accede a una herramienta pedagogica y autónomo</p></i>
                </li>
                <li>
                  <i className='fas fa-check-circle'><p>Aprende con un lenguaje sencillo</p></i>
                </li>
                <li>
                  <i className='fas fa-check-circle'><p>Obtén fácil acceso a la información</p></i>
                </li>
                {/* <li>
                  <i className='fas fa-check-circle'><p>Favorece celeridad en los procesos</p></i>
                </li> */}
                {/* <li>
                  <i className='fas fa-check-circle'><p>Aprende sin complicaciones</p></i>
                </li> */}
              </ul>
              {/* <Link className='inicio_link' to='/Acciones'>Conoce las acciones</Link> */}
            </div>
          </div>
          {/* <div className='inicio_elavora_img'>
            <img src={Logo}></img>
          </div> */}
        </section>
        <section className='inicio_necesitas bg2'>
          <div className='inicio_necesitas_info box_container'>
            <h1>¿Qué necesitas?</h1>
            <p className='color_letra'>
              Estas son las rutas que tenemos para ti, de manera que en el
              <br/>ultimo boton ya tengas claridad respecto a la acción que
              <br/> deseas realizar.   
            </p>
          </div>
          <div className='inicio_necesitas_container box_container'>
            <InicioCard 
              titulo="Acciones" icono='fas fa-book' direccion="/Acciones" 
              texto="Conoce sobre las principales acciones constitucionales"
            ></InicioCard>
            <InicioCard
              titulo="Glosario" icono="fas fa-list" direccion="/Glosario" 
              texto="Investiga las palabras que no conozcas"
            ></InicioCard>
            <InicioCard 
              titulo="Derechos" icono="fas fa-balance-scale-right" direccion="/Derechos" 
              texto="Conoce tus derechos fundamentales"
            ></InicioCard>
            <InicioCard 
              titulo="Tu Acción" icono="fas fa-plus" direccion="/elabora-tu-accion" 
              texto="Elabora tu acción con nuestra ayuda"
            ></InicioCard>
          </div>
        </section>
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