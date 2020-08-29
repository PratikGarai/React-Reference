import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ContactCard from './props/contacts/ContactCard.js';

function App() {
  return (
    	  <div>
	  <Header />
	  <ContactCard 
	  	name="Name1" 
	  	phone="+12345670" 
	  	email="mail1@mail.com"
	  />
	  <ContactCard 
	  	name="Name2" 
	  	phone="+12345670" 
	  	email="mail1@mail.com"
	  />
	  <ContactCard 
	  	name="Name3" 
	  	phone="+12345670" 
	  	email="mail1@mail.com"
	  />
	  <ContactCard 
	  	name="Name4" 
	  	phone="+12345670" 
	  	email="mail1@mail.com"
	  />
	  <Footer />
    	  </div>
  );
}

export default App;
