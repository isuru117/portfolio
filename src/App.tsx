import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';

const App: React.FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Section: React.FC<any> = ({ id, children }) => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.1,
    });

    return (
      <div id={id} ref={ref} className={`app-section section ${inView ? 'fade-in' : ''}`}>
        {children}
      </div>
    );
  };

  return (
    <Router>
      <NavBar />
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </Router>
  );
};

export default App;
