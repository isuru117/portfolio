import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import NavBar from './components/NavBar/NavBar';
import Introduction from './components/Introduction/Introduction';
import Experience from './components/Experience/Experience';
import Socials from './components/Socials/Socials';
import Contact from './components/Contact/Contact';
import './App.css';

const App: React.FC = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition in={inProp} classNames="fade" timeout={600}>
      <Router>
        <NavBar />
        <div id="introduction" className="main-content">
          <Introduction />
        </div>
        <div id="experience" className="main-content">
          <Experience />
        </div>
        <div id="socials" className="main-content">
          <Socials />
        </div>
        <div id="contact" className="main-content">
          <Contact />
        </div>
      </Router>
    </CSSTransition>
  );
};

export default App;
