import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../../../assets/css/accion.css';

class AccionBoton extends Component {
  render () {
    return (
			<Link className='aBoton_info' to={this.props.direccion}>
				<img className='aBoton_img' src={this.props.imagen}></img><br/>
			</Link>
    );
  }

	constructor(props){
		super(props)
	}

	componentDidMount() {
	}

	componentWillUnmount(){
	}
}

export default AccionBoton;