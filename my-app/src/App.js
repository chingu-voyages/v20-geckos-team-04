import React from 'react';
import './App.css';
import Nav from './components/LeftNavBar/Nav'
import IndexPage from './components/IndexPage'

import { BrowserRouter as Router} from 'react-router-dom';

// layout and css guideline goes here

function App() {
	return (
		<>
		  <Router>	
		  	<Nav className="sidenav" />
		    <IndexPage />
		  </Router>
		</>
	);
}

export default App;
