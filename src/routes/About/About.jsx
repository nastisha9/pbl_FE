import React from 'react';
import '../../styles/routes/about.scss';

import egor from './egor.jpg';
import anastasia from './anastasia.jpg';
import rafaela from './rafaela.jpg';
import dan from './dan.jpg';
import team from './team.jpg';


const About = () => {
  return (
    <div class="about-page">
      <div class="about-section">
        <div class="section1">
        <h1>About Us</h1>
        <p>We are a group of students that want to make a change!</p>
        <p>And we believe that our project will be helpful for everyone who decided to recycle
          things properly and who is interested in the ecological situation in our country. 
          It will have a big impact if more users will join us and together we will create 
          a strong community. It is our main goal to inform people about ecological problems
          and to give them opportunities to solve at least some of them.
        </p>
        </div>
        <div class="section2">
          <img src={team}/>
        </div>
      </div>
      <br></br>
      <h1 className="team">Our Team</h1>
      <div class="row">
        <div class="column">
          <div class="card">
            <img src={egor}/>
            <div class="container">
              <h2>Babcinetchi Egor</h2>
              <p class="title">Full-stack, Sophomore at UTM</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>egor.babcinetchi@isa.utm.md</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={anastasia}/>
            <div class="container">
              <h2>Iatco Anastasia</h2>
              <p class="title">Team Leader, Front-end, Sophomore at UTM</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>anastasia.iatco@isa.utm.md</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={rafaela}/>
            <div class="container">
              <h2>Cerlat Rafaela</h2>
              <p class="title"> Front-end, Sophomore at UTM</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>rafaela.cerlat@isa.utm.md</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <img src={dan}/>
            <div class="container">
              <h2>Ceban Dan</h2>
              <p class="title">Front-end, Sophomore at UTM</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>dan.ceban@isa.utm.md</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;
