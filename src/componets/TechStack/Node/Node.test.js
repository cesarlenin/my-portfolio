import React from 'react';
import ReactDOM from 'react-dom';
import Node from './Node';

describe('<Node />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Node/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });