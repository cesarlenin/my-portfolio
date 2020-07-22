import React from 'react';
import ReactDOM from 'react-dom';
import LandingHeader from './LandingHeader';

describe('<LandingHeader />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <LandingHeader/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });