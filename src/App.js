import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layouts/NavBar.jsx'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
      </div>
    )
  }
}

export default App;
