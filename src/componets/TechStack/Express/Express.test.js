import React from 'react';
import ReactDOM from 'react-dom';
import Express from './Express';

describe('<Express />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Express/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });