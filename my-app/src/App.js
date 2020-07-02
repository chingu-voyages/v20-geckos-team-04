import IndexPage from './components/IndexPage';
import React from 'react';
import './App.css';
import Nav from './components/LeftNavBar/Nav';
import Home from './components/Home/Home';
import History from './components/History/History';
import TopMenu from './components/Home/TopMenu';
import TaskCard from './components/General/TaskCard';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// layout and css guideline goes here

function App() {
	return (
		<Container fluid>
			<Row>
				<div className="col-sm-2 border border-primary border-right-0 border-bottom-0 p-3">
					<h3>Geckos-team-04</h3>
				</div>
				<TopMenu />
			</Row>
			<Row>
				<Router>
					<Nav />
					<IndexPage />
				</Router>
			</Row>
		</Container>
	);
}

export default App;
