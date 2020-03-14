import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layouts/NavBar.jsx'
import './App.css';
import Dashboard from './components/layouts/Dashboard.jsx'
import backgroundImage from '../src/components/pokemon/poke.png'


class App extends Component {
  render() {
    return (
      <div className='App' style={{background: `url(${backgroundImage})`}}>
        <NavBar />
        <div className="container">
          <Dashboard />
        </div>

      </div>
    )
  }
}

export default App;
