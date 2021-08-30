import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import { Link, Router } from 'react-router-dom';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//importaciones de componentes
import NavBar from './components/navBar/navBar';

class App extends Component {
  render () {
    return (
      <div className="App">
        <body>
          <div>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimun-scale=1.0"/>
          <NavBar></NavBar>  
          </div>
        </body>
      </div>      
    );
  }
}

export default App;
