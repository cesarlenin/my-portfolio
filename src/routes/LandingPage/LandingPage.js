import React, { Component, Fragment } from 'react'
import Header from '../../componets/LandingHeader/LandingHeader'
import AboutMe from '../../componets/AboutME/AboutMe'
import Contact from '../../componets/Contact/Contact'

export class LandingPage extends Component {
  render() {
    return (
      <Fragment>
          <Header/>
          <div className="info">
            <AboutMe/>
            <Contact/>
          </div>
      </Fragment>
    )
  }
}

export default LandingPage