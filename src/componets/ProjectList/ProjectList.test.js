import React from 'react';
import ReactDOM from 'react-dom';
import ProjectList from './ProjectList';

describe('<ProjectList />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <ProjectList/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });