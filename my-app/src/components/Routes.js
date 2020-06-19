import React from 'react';
import '../App.css';
import Nav from '../Nav';
import Home from '../pages/Home';
import History from '../pages/History';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routes() {
	return (
		<Router>
			<div className="App">
				<Nav className="sidenav" />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/history" component={History} />
				</Switch>
			</div>
		</Router>
	);
}

export default Routes;