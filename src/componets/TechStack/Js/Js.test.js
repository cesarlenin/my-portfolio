import React from 'react';
import ReactDOM from 'react-dom';
import Js from './Js';

describe('<Js />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Js/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });