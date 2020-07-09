import React from 'react';
import './App.css';
import Nav from './components/LeftNavBar/Nav'
import IndexPage from './components/IndexPage'

import { BrowserRouter as Router} from 'react-router-dom';

// layout and css guideline goes here


// flex in div is for temporary testing 
function App() {
 
	return (
		<div style={{display:"flex"}}> 
		  <Router>	
		  	<Nav className="sidenav" />
		    <IndexPage />
		  </Router>
		</div>
	);
}

export default App;
