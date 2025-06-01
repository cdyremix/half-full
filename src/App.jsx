/* src/App.jsx */
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Community from './components/Community';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Hero />
      <About />
      <Programs />
      <Community />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;