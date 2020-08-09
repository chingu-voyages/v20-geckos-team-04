import React from 'react';
import "../../App.css"
import { Link } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ripples from 'react-ripples'


const Nav = () => (
		<div className="col-2 border border-primary nav-column">		
			<ul className="nav flex-column nav-pills">
				<Ripples color="#fff" during={1000}>
					<Link className="link" to="/">
						<li className="nav-link p-3 mb-2 text-center left-link">
							<FontAwesomeIcon icon={faHome} size="lg" className="mr-2" />
								Home
						</li>
					</Link>
				</Ripples>
				<Ripples color="#fff" during={1000}>
					<Link className="link" to="/about">
						<li className="nav-link p-3 text-center left-link">
							<FontAwesomeIcon icon={faFolder} size="lg" className="mr-2" />
							About
						</li>
					</Link>
				</Ripples>
			</ul>
		</div>
	);

export default Nav;
