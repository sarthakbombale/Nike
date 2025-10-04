import './App.css';
import { useState, useEffect } from 'react';

import Loader from './Components/Loader';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Navigation />
          <Hero />
          <Menu />
          <About />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
