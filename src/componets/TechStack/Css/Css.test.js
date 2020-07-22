import React from 'react';
import ReactDOM from 'react-dom';
import Css from './Css';

describe('<Css />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Css/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });