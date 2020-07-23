import React, { Component } from 'react';
import TechIcons from '../TechIcons/TechIcons';
import './Project.css';

export class Project extends Component {

  render() {
    const tech = this.props.tech.map((element,index) => {
      return <TechIcons 
        key={index} 
        name = {element}
      />
    });
    
    return (
    <section className= "project">
      <h3>{this.props.name}</h3>
      
      <div className="imgContainer">
        <a className= "img" href={this.props.live} target="_blank" rel="noopener noreferrer">
          <img src={this.props.img} alt={this.props.name} className= "image"/> 
          <span className= "viewProjectHover"> View Project</span> 
        </a> 
      </div>
      
      <div className="tech-container">{tech}</div> 
      <p>{this.props.summary}</p>
      
      <div className="buttons">
        <a className="link-button" href={this.props.repo} target="_blank" rel="noopener noreferrer">View Code</a>  
        <a className="link-button" href={this.props.live} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </section>
    )
  }
}

export default Project;