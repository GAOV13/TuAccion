import React, { Component } from "react";
import './navBar.css';
//import 'tu-accion/src/assets/css/navBar.css';
import { Link } from 'react-router-dom';
import NabItem from './nabItem';
import Logo from './logo.svg';

class NavBar extends Component {
	render () {
		return (
			<React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light fondo justify-content-between">
					<a className="navbar-brand" style = {{'margin-right' : '32%', 'font-size' : '25px'}}>
						<img src={Logo} width="50" height="50" class="d-inline-block align-top" alt=""></img>
						Tu Accion
					</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<NabItem nombre="Inicio" direccion='/'></NabItem>
							<NabItem nombre="Acciones" direccion='/Acciones'></NabItem>
							<NabItem nombre="Derechos" direccion='/Derechos'></NabItem>
							<NabItem nombre="Elabora tu Accion" direccion='/elabora-tu-accion'></NabItem>
							<NabItem nombre="Contact" direccion='/Contact'></NabItem>
						</ul>
						<form class="form-inline my-2 my-lg-0">
							<input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
							<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
          </div>
        </nav>
      </React.Fragment>
		);
	}
}

export default NavBar;

