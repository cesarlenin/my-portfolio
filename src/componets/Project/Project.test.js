import React from 'react';
import ReactDOM from 'react-dom';
import Project from './Project';

describe('<Project />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <Project
      key= {1}
      id = {1}
      name = 'Penny Thoughts'
      live = 'https://penny-thoughts.vercel.app/' 
      summary = "In a world where COVID-19, boiling racial tensions, and deepening political divides are deteriorating a large portion of the population's mental health, Penny Thoughts was born from our desire to help fight off negativity. It is a space where the common folk can motivate those who fell victim to these stressful times by anonymously sharing and receiving uplifting messages.Taking into account that some users may not have the best intentions, TensorFlow AI was used as a filter to insure all messages sent are appropriate."
      repo = "https://github.com/thinkful-ei-narwhal/penny-thoughts-client"
      tech = {["html","css","js","node","postgresql","react","knex", "mocha","express"]}
      img = "/images/Penny-Thoughts.png"
      />
      , div);
      ReactDOM.unmountComponentAtNode(div);
    });
    });