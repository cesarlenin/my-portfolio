import React from 'react';
import ReactDOM from 'react-dom';
import Html from './Html';

describe('<Html />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Html/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });