import React, {Component} from 'react';
import './AboutMe.css';

export class AboutMe extends Component {
  render() {
    return ( 
    <section className = "about-me" >
      <h3> About me </h3> 
      <p> I love coding because the work I do is something I can proudly stamp my name on.
      Encountering roadblocks and overcoming them gives me a sense of euphoria.I like a challenge.The greater the struggle, the better.It is what keeps me coming back.I want to be part of a team to tackle bigger projects and trade knowledge with other passionate people. </p> 
      <p> When I’ m not coding, I am most likely reading or exercising.For reading, I like self - development or business books and manga.As a workout, I like lifting weights or practicing Brazilian Jiu - Jitsu.On occasion, I relax watching anime, riding my motorcycle or going on long hikes. </p> 
    </section>
    )
  }
}

export default AboutMe;