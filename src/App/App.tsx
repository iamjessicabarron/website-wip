import React from 'react';

import logo from './logo.png';
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
            I'm a developer with a design slant and a passion for making beautiful and usable products.
          </h2>
          <p>Probably something else that's nice</p>
          <p>Idk</p>
          <p>Just something to make this loongerrr</p>
          <p>Just something to make this loongerrr</p>
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
      </div>
        <div className="social">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-github"></i>
        </div>
      </footer>
    </div>
  );
}

export default App;
