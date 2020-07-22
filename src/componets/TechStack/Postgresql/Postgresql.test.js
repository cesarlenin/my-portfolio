import React from 'react';
import ReactDOM from 'react-dom';
import Postgresql from './Postgresql';

describe('<Postgresql />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Postgresql/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });