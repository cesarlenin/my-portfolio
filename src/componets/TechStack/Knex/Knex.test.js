import React from 'react';
import ReactDOM from 'react-dom';
import Knex from './Knex';

describe('<Knex />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Knex/>
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });