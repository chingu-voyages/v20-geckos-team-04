import React from 'react';
import './App.css';
import NavLeft from './Nav';
import Home from './pages/Home';
import History from './pages/History';
import TopMenu from './components/TopMenu';
import Routes from './components/Routes';
import Card from './components/Card';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
        <div className="container-fluid">
            <div class="row">
                <div className="col-sm-2 border border-primary border-right-0 border-bottom-0 p-3">
                    <h3>Geckos-team-04</h3>
                </div>
                    <TopMenu />
            </div>
            <div class="row">
                    <Router>
                        <NavLeft />
                    </Router>
                <div className="col-sm-10 p-3 bg-white overflow-auto">
                    <Card />
                </div>
            </div>
        </div>
	);
}

export default App;

