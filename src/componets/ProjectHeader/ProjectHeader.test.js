import React from 'react';
import ReactDOM from 'react-dom';
import ProjectHeader from './ProjectHeader';

describe('<ProjectHeader />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <ProjectHeader/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });