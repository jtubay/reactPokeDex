import React, { Component } from 'react';
// import styled from 'styled-components'

class Navbar extends Component {
   render() {
      return(
          <div>
              <nav className="navbar narbar-expand-md navbar-dark bg-dark fixed-top">
                  <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-item-center" >PokeDex</a>
              </nav>
          </div>
      ) 
   }
}

export default Navbar;