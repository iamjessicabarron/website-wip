import React from 'react';
import Timeline from '../Timeline/Timeline'

import logo from './logo.png';
// import Resume from './Resume.pdf'
// import sky from './sky.png';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <main>
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="sky"></div>
        <div className="feature">
          {/* Feature text  */}
          <h1>
            Hi, I'm Jess
          </h1>
          <h2>
            I'm a developer with a design slant, and a passion for making beautiful and usable products.
          </h2>
        </div>

        <div className="timelineContainer">
            {/* <div className="arrow standing">
              <img src={arrow} alt="Decorative double arrow" />
            </div>
            <div className="arrow moving">
              <img src={arrow} alt="Decorative single arrow" />
            </div> */}
            <Timeline />
          </div>
          <div className ="timelineCloser">
            <h2>And more is yet to come...</h2>
          </div>

      </main>
      <footer>
      <div className="resume">
        <h1>Jessica Barron</h1>
        <h2>Developer & Designer</h2>
        <p>
          I'm looking for a new role to grow in Brisbane, Australia. 
        </p>
        <button>Download résumé (PDF)</button>

        <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} download>
          
        </a>
      </div>
      <div className="footerRightContent">
        <div className="social">
          <a href="https://www.linkedin.com/in/iamjessicabarron/">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/iamjessicabarron" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/iamjessbarron">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com/iamjessicabarron/">
            <i className="fab fa-instagram"></i>
          </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
