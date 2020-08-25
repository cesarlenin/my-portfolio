import React, { Component } from 'react';
import './LandingHeader.css';

export class LandingHeader extends Component {
  render() {
    return (
    <header>
      <img className="circle" src="/images/myPic.png" alt="Cesar Morales"/>
      <h1>Cesar Lenin Morales</h1>
      <h2>Full-stack developer proficient in HTML, CSS, JavaScript, React, Node, and PostgreSQL.</h2>
    </header>
    )
  }
}

export default LandingHeader;