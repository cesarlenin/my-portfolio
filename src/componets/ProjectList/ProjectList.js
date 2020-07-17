import React, { Component } from 'react';
import Project from '../../componets/Project/Project'
import STORE from '../../componets/STORE'

export class ProjectList extends Component {

  render() {
    const projectList = STORE.Projects.map((project, index)=> {
        return <Project 
        key={index} 
        id = {project.id} 
        name = {project.name}
        live = {project.live}
        summary = {project.summary}
        repo = {project.repo}
        tech = {project.tech}
        img = {project.img}
        />
   })

   return ( 
    <section className= "project">
     {projectList}
    </section>
    )
  }
}

export default ProjectList