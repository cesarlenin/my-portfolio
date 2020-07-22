import React from 'react';
import ReactDOM from 'react-dom';
import Jquery from './Jquery';

describe('<Jquery />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Jquery/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });