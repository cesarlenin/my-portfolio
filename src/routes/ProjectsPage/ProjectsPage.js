import React, { Component } from 'react'
import Header from '../../componets/ProjectHeader/ProjectHeader'
import Project from '../../componets/Project/Project'

export class ProjectsPage extends Component {

  // generateUserMessages() {
  //   const { userMessages } = this.context
  //   const temp = userMessages.map((message, index) => {
  //     return <projectList key={index} id={message.id} index={index} message={message.message} />
  //   })
  //   return temp
  // }

  render() {
    return (
      <div>
          <Header/>
          <section class= "project">
          {/* <projectList/> */}
          <Project/>
          </section>
      </div>
    )
  }
}

export default ProjectsPage
