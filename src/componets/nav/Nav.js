import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
        <nav>
        <NavLink className='active home' to = '/projects' >Cesar Morales</NavLink> 
        <ul id="myLinks" class="links">
        <li>
            <NavLink className='projects' to = '/projects' >Projects</NavLink> 
        </li>
        <li>
            <NavLink className='about' to = '/'>about</NavLink> 
        </li>
        </ul>
        <button class="icon">
            <i class="fa fa-bars"></i>
        </button>
    </nav>
    )
  }
}

export default Nav