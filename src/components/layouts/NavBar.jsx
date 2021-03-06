import React, { Component } from 'react';
// import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Dashboard from './Dashboard'

class Navbar extends Component {
   render() {
      return(
          <div>
              <nav className="navbar narbar-expand-md navbar-dark bg-dark fixed-top">
                  <div className="row">
                      <div className="col-6">
                        <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0 align-item-center" >PokeDex</Link>
                      </div>
                      <div className="col-6">
                        <Link to="/" className="navbar-brand col-sm-3 col-md-2 mr-0 align-item-center" >Search</Link>
                      </div>
                  </div>
              </nav>
          </div>
      ) 
   }
}

export default Navbar;