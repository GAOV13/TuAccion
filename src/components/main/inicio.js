import { Component } from 'react';
import { Link } from 'react-router-dom'
import InicioCard from './inicioCard';
import Slider from '../Acciones/extras/slider';
import '../../assets/css/inicio.css'
import Logo from "../../assets/img/legaltech.jpg";
import Anfi from "../../assets/img/Anfibio.png";

class Inicio extends Component {
  render() {
    return (
      <section className='bg1'>
        <section className='box_container inicio_elabora '>
          <div className='inicio_elabora_info'>
            <div className='inicio_elabora_info_con'>
              <h2 className='color_letraT'>our vision</h2>
              <h1>Elabora tus acciones<br/>de forma sencilla</h1>
              <p className='color_letra'>
                Lorem ipsum dolor sit amet, consectetur asipiscing elit. Tristique
                <br/>arcu a nisi semper. Ut cras odio ac sem ac.
              </p>
              <ul>
                <li>
                  <i className='fas fa-check-circle'><p>Obten autonomía</p></i>
                </li>
                <li>
                  <i className='fas fa-check-circle'><p>Garantiza celeridad en los procesos</p></i>
                </li>
                <li>
                  <i className='fas fa-check-circle'><p>Aprende sin complicaciones</p></i>
                </li>
              </ul>
              <Link className='inicio_link' to='/Acciones'>Conoce las acciones</Link>
            </div>
          </div>
          <div className='inicio_elavora_img'>
            <img src={Logo}></img>
          </div>
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
              titulo="Acciones" imagen={Logo} direccion="/Acciones" 
              texto="Tres tristes tigres tragaban trigo en un trigal mientras uno se quedaba sin trigo para alimentar"
            ></InicioCard>
            <InicioCard
              titulo="Glosario" imagen={Anfi} direccion="/Glosario" 
              texto="Cuando cuentes cuentos, cuenta cuantos cuentos cuentas pq si no sabes cuantos cuentos cuentas nunca sabras cuantos cuentos cuentas tu"
            ></InicioCard>
            <InicioCard 
              titulo="Derechos" imagen={Logo} direccion="/Derechos" 
              texto="Pepe pide pipas y Pipe pide papas. Pudo Pepe pelar pipas pero no pudo pepe pelar papas pq las papas de pepe no eran papas, eran pepipos. Pepe metio la pata"
            ></InicioCard>
            <InicioCard 
              titulo="Tu Acción" imagen={Anfi} direccion="/elabora-tu-accion" 
              texto="Enfrente de Fuensanta hay una fuente de frente. Fuensanta frunce la frente enfrente de la fuente que esta enfrente de frente."
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