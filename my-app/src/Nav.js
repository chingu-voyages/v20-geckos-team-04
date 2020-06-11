import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

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
						<img src="https://img.icons8.com/android/24/000000/home.png" />
						Home
					</li>
				</Link>
				<Link className="main-nav" style={navStyle} to="/history">
					<li>
						<img src="https://img.icons8.com/ios/50/000000/opened-folder.png" />
						History
					</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
