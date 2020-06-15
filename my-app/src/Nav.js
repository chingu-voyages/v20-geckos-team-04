import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className="col-2 border border-primary border-top-0">		
			<ul class="nav flex-column nav-pills">
				<Link to="/">
					<li className="nav-link p-3 mb-2 text-center left-link">
						<img src="https://img.icons8.com/android/24/000000/home.png" />
							Home
					</li>
				</Link>
				<Link to="/history">
					<li className="nav-link p-3 text-center left-link">
						<img src="https://img.icons8.com/ios/50/000000/opened-folder.png" />
							History
					</li>
				</Link>
			</ul>
		</div>
	);
}

export default Nav;
