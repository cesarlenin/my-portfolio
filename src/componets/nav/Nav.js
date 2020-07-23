import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeClassName: 'links',
        }
      }

    closeNav() {
        let css = (this.state.activeClassName === "links") ? "links open" : "links";
        this.setState({activeClassName:css});
    }


  render() {
    return (
    <nav>
      <div className='navContainer'>
        <Link className='active home' to = '/' >Cesar Morales</Link> 
        <button className="icon" 
          onClick={(e) => {
            e.preventDefault();
            this.closeNav();
          }}>
          <i className="fa fa-bars"></i>
        </button>
      </div>

      <ul id="myLinks" className={this.state.activeClassName}>
        <li className='projects'>
          <Link  to = '/projects' onClick={(e) => { this.closeNav();}}>
          Projects
          </Link> </li>
        <li className='about'>
          <Link to = '/' onClick={(e) => {this.closeNav();}}>
          about
          </Link>
        </li>
      </ul>
    </nav>
    )
  }
}

export default Nav;