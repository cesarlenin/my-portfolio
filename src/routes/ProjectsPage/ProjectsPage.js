import React, { Component } from 'react';
import Header from '../../componets/ProjectHeader/ProjectHeader';
import ProjectList from '../../componets/ProjectList/ProjectList';

export class ProjectsPage extends Component {

  render() {
    return (
      <div>
          <Header/>
          <ProjectList/>
      </div>
    )
  }
}

export default ProjectsPage
