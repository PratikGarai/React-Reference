import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ContactCard from './props/contacts/ContactCard_2.js';

function App() {
  return (
    	  <div>
	  <Header />
	  <ContactCard 
	  contact = {{ 	name:"Name1",phone:"+12345670",email:"mail1@mail.com" }}
	  />
	  <ContactCard 
	  contact = {{ 	name:"Name2",phone:"+12345671",email:"mail2@mail.com" }}
	  />
	  <ContactCard 
	  contact = {{ 	name:"Name3",phone:"+12345672",email:"mail3@mail.com" }}
	  />
	  <Footer />
    	  </div>
  );
}

export default App;
