import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaFolder } from 'react-icons/fa';

function Nav() {
	const navStyle = {
		color: 'white',
	};

	return (
		<nav>
			<h3>Geckos-Team04</h3>
			<ul className="nav-links">
				<Link className="main-nav" style={navStyle} to="/">
					<li>
						<FaHome /> Home
					</li>
				</Link>
				<Link className="main-nav" style={navStyle} to="/history">
					<li>
						<FaFolder /> History
					</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
