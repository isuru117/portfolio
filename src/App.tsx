import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NavBar from './components/NavBar/NavBar';
import Introduction from './components/Introduction/Introduction';
import Experience from './components/Experience/Experience';
import Socials from './components/Socials/Socials';
import Contact from './components/Contact/Contact';
import './App.css';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={600}>
        <Routes location={location}>
          <Route path="/" element={<Introduction />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App: React.FC = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition in={inProp} classNames="fade" timeout={600}>
      <div>
        <Router>
          <NavBar />
          <div className="app-container">
            <AnimatedRoutes />
          </div>
        </Router>
      </div>
    </CSSTransition>
  );
};

export default App;