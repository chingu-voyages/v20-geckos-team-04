import React from 'react';
import "../../App.css"
import Nav from './Nav';
import Home from '../Home/Home';
import History from '../History/History';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

function Routes() {
	return (
			<div className="Routes">
				<Nav className="sidenav" />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/history" component={History} />
				</Switch>
			</div>
	 
	);
}

export default Routes;
