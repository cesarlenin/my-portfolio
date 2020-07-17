import React, { Component, Fragment } from 'react'
import Header from '../../componets/Header/Header'
import AboutMe from '../../componets/AboutME/AboutMe'
import Contact from '../../componets/Contact/Contact'

export class LandingPage extends Component {
  render() {
    return (
      <Fragment>
          <Header/>
          <div clas="info">
            <AboutMe/>
            <Contact/>
          </div>
      </Fragment>
    )
  }
}

export default LandingPage