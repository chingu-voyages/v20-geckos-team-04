import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => (
	<div className="col-2 border border-primary">
		<ul class="nav flex-column nav-pills">
			<Link to="/">
				<li className="nav-link p-3 mb-2 text-center left-link">
					<FontAwesomeIcon icon={faHome} size="lg" className="mr-2" />
					Home
				</li>
			</Link>
			<Link to="/history">
				<li className="nav-link p-3 text-center left-link">
					<FontAwesomeIcon icon={faFolder} size="lg" className="mr-2" />
					History
				</li>
			</Link>
		</ul>
	</div>
);

export default Nav;
