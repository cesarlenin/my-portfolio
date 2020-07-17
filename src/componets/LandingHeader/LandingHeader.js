import React, { Component } from 'react'

export class LandingHeader extends Component {
  render() {
    return (
          <header>
          <img className="circle" src="/images/myPic.jpg" alt="Cesar Morales"/>
          <h1>Cesar Lenin Morales</h1>
          <h2>I’m currently a student 
          <br/>in the Software Engineering Bootcamp at Thinkful.</h2>
          </header>
    )
  }
}

export default LandingHeader