import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layouts/NavBar.jsx'
import './App.css';
import Dashboard from './components/layouts/Dashboard.jsx'
import backgroundImage from '../src/components/pokemon/poke.png'
import Pokemon from './components/pokemon/Pokemon.jsx'


class App extends Component {
  render() {
    return (
      <Router>
      <div className='App' style={{background: `url(${backgroundImage})`}}>
        <NavBar />
        <div className="container">
          
            <Switch>
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon}/>
            </Switch>
          
        </div>

      </div>
      </Router>
    )
  }
}

export default App;
