import React from 'react';
import './App.css';
import NavLeft from './components/LeftNavBar/Nav';
import Home from './components/Home/Home';
import History from './components/History/History';
import TopMenu from './components/TopMenu';
import Card from './components/Card';
import Routes from './components/LeftNavBar/Routes';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

// layout and css guideline goes here

function App() {
	return (
		<div className="container">
			<div class="row">
				<div className="col-sm-2 border border-primary border-right-0 border-bottom-0 p-3">
					<h3>Geckos-team-04</h3>
				</div>
				<TopMenu />
			</div>
			<div className="row">
				<Router>
					<NavLeft />
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/history">
						<History />
					</Route>
				</Router>
				<div className="col-sm-10 p-3 bg-white overflow-auto Card-Container">{/* <Card /> */}</div>
			</div>
		</div>
	);
}

export default App;
