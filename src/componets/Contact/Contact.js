import React, { Component } from 'react'

export class Conctact extends Component {
  render() {
    return (
<section class="contact">
    <h3>Contact</h3>
    <div class="contact-links">
    <a class="contact-link" href="https://www.linkedin.com/in/cesar-lenin-morales-8a8648a0/" target="_blank">
      <i class="fa fa-fw fa-2x fa-linkedin middle" ></i>
      <span>LinkedIn</span>  
    </a> 

    <a class="contact-link" href="https://github.com/cesarlenin" target="_blank">
      <i class="fa fa-fw fa-2x fa-github middle"></i>
      <span>GitHub</span>  
    </a> 

    <a class="contact-link" href="mailto:cesarlenin@protonmail.com" target="_blank">
      <i class="fa fa-fw fa-2x fa-envelope middle"></i>
      <span>Email</span>  
    </a>
    </div>
  </section>
    )
  }
}

export default Conctact