import React from 'react';
import ReactDOM from 'react-dom';
import TechIcons from './TechIcons';

describe('<TechIcons />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <TechIcons
        name='node'
      />
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });