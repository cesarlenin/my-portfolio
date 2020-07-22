import React from 'react';
import ReactDOM from 'react-dom';
import ReactIcon from './ReactIcon';

describe('<ReactIcon />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <ReactIcon/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });