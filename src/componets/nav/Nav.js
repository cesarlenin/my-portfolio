import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
        <nav>
        <NavLink className='active home' to = '/' >Cesar Morales</NavLink> 
        <ul id="myLinks" className="links">
        <li>
            <NavLink className='projects' to = '/projects' >Projects</NavLink> 
        </li>
        <li>
            <NavLink className='about' to = '/'>about</NavLink> 
        </li>
        </ul>
        <button className="icon">
            <i className="fa fa-bars"></i>
        </button>
    </nav>
    )
  }
}

export default Nav