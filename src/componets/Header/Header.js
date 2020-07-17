import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
          <header>
          <img class="circle" src="/images/myPic.jpg" alt="Cesar Morales"/>
          <h1>Cesar Lenin Morales</h1>
          <h2>I’m currently a student 
          <br/>in the Software Engineering Bootcamp at Thinkful.</h2>
          </header>
    )
  }
}

export default Header