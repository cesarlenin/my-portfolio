import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
        <nav>
        <NavLink className='active home' to = '/' >Cesar Morales</NavLink> 
        <div>
        <NavLink className='projects' to = '/projects' >Projects</NavLink> 
        <NavLink className='about' to = '/'>about</NavLink> 
        </div>
    </nav>
    )
  }
}

export default Nav