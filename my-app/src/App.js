import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import DualCounter from './class-based/events/DualCounter.js';

function App() {
  return (
    	  <div>
	  <Header />
	  <DualCounter />
	  <Footer />
    	  </div>
  );
}

export default App;
