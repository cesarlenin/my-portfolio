import React from 'react';
import ReactDOM from 'react-dom';
import Mocha from './Mocha';

describe('<Mocha />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Mocha/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });