import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//importaciones de componentes
import NavBar from './components/navBar/navBar';
import Accion from './components/Acciones/accion';
import Peticion from './components/Acciones/peticion'

class App extends Component {
  render () {
    return (
      <div className="App">
        <head>
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximun-scale=1.0, minimun-scale=1.0"/>
          <title>Tu Acción</title>
        </head>
        <body>
          <div>
          
          <NavBar></NavBar>

          <Switch>
            <Route path='/Acciones' exact>
              <Accion></Accion>
            </Route>
            <Route path='/Acciones/derecho-de-peticion' exact>
              <Peticion></Peticion>
            </Route>
            
          </Switch>
          </div>
        </body>
      </div>      
    );
  }
}

export default App;
