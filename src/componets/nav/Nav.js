import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
        <nav>
        <button class="active home">Cesar Morales</button>
        <ul id="myLinks" class="links">
            <li><button class="projects">Projects</button></li>
            <li><button class="about">About</button></li>
        </ul>
        <button class="icon">
            <i class="fa fa-bars"></i>
        </button>
    </nav>
    )
  }
}

export default Nav