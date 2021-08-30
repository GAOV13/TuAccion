import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './navBar.css';

class NabItem extends Component {
	render () {
		return (
			<li className="nav-item">
				<a className="nav-link">
					<Link className = "links" to = {this.props.direccion}>
						{this.props.nombre}
					</Link>
				</a>
			</li>
		);
  }

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log("Estoy en Cons NavItem");
	}

	componentWillUnmount(){
	}
}

export default NabItem;