import React from 'react';
import './App.css';
import NavLeft from './Nav';
import Home from './pages/Home';
import History from './pages/History';
import TopMenu from './TopMenu';
import GearMenu from './GearMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h1>*Name of Page*</h1>
                </div>
            </div>
            <div class="row">
                <div className="col-sm-2 border border-primary border-right-0 border-bottom-0 p-3">
                    <h3>Geckos Team 04</h3>
                </div>
                    <TopMenu />
            </div>
            <div class="row">
                    <Router>
                        <NavLeft />
                    </Router>
                <div className="col-sm-10 p-3 bg-white"><h1>Task cards here!</h1></div>
            </div>
        </div>
	);
}

export default App;

