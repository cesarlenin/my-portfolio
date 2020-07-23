import React, {Fragment } from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../../routes/LandingPage/LandingPage';
import ProjectPage from '../../routes/ProjectsPage/ProjectsPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import Footer from '../Footer/Footer';
import Nav from '../nav/Nav';
import './App.css';

function App() {
  return (
  <Fragment>
    <Route path='/' component={Nav} />
    <main>
        <Switch>
          <Route
            exact path = {'/'}
            component = {LandingPage}/>
          <Route
            path = {'/projects'}
            component = {ProjectPage}/>
          <Route
            component={NotFoundPage}
          />
        </Switch>
    </main>
    <Route path='/' component={Footer} />
  </Fragment>
  );
}

export default App;