import React, { Component } from 'react'

export class Conctact extends Component {
  render() {
    return (
<section className="contact">
    <h3>Contact</h3>
    <div className="contact-links">
    <a className="contact-link" href="https://www.linkedin.com/in/cesar-lenin-morales-8a8648a0/" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-fw fa-2x fa-linkedin middle" ></i>
      <span>LinkedIn</span>  
    </a> 

    <a className="contact-link" href="https://github.com/cesarlenin" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-fw fa-2x fa-github middle"></i>
      <span>GitHub</span>  
    </a> 

    <a className="contact-link" href="mailto:cesarlenin2@outlook.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-fw fa-2x fa-envelope middle"></i>
      <span>Email</span>  
    </a>
    </div>
  </section>
    )
  }
}

export default Conctact