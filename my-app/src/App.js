import IndexPage from './components/IndexPage';
import React from 'react';
import './App.css';
<<<<<<< Updated upstream
import NavLeft from './components/LeftNavBar/Nav';
import Home from './components/Home/Home';
import History from './components/History/History';
import TopMenu from './components/TopMenu';
import Card from './components/Card';
import Routes from './components/LeftNavBar/Routes';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import Nav from './components/LeftNavBar/Nav';
import Home from './components/Home/Home';
import History from './components/History/History';
import TopMenu from './components/Home/TopMenu';
import TaskCard from './components/General/TaskCard';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
>>>>>>> Stashed changes

// layout and css guideline goes here

function App() {
	return (
<<<<<<< Updated upstream
		<div className="container">
			<div class="row">
=======
		<Container fluid>
			<Row>
>>>>>>> Stashed changes
				<div className="col-sm-2 border border-primary border-right-0 border-bottom-0 p-3">
					<h3>Geckos-team-04</h3>
				</div>
				<TopMenu />
<<<<<<< Updated upstream
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
				<div className="col-sm-10 p-3 bg-white overflow-auto Hide-Container">{/* <Card /> */}</div>
			</div>
		</div>
=======
			</Row>
			<Row>
				<Router>
					<Nav />
					<IndexPage />
				</Router>
			</Row>
		</Container>
>>>>>>> Stashed changes
	);
}

export default App;
