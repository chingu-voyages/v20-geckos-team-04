import React from 'react';
import './App.css';
import Routes from './components/LeftNavBar/Routes';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// layout and css guideline goes here


function App() {
	return (
		<>
		  <Router>	
			 <Routes />
		  </Router>
		</>
	);
}

export default App;
