import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//importaciones de componentes
import NavBar from './components/navBar/navBar';
import Inicio from './components/main/inicio';
import Accion from './components/Acciones/accion';
import Footer from './components/footer/footer';
import Peticion from './components/Acciones/peticion'

class App extends Component {
  render () {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route path='/' exact>
            <Inicio></Inicio>
          </Route>
          <Route path='/Acciones' exact>
            <Accion></Accion>
          </Route>
          <Route path='/Acciones/derecho-de-peticion' exact>
            <Peticion></Peticion>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>   
    );
  }
}

export default App;
