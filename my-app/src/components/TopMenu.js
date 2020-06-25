import React from 'react';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const TopMenu = () => (
	<div className="col-sm-10 border border-primary p-3 d-flex">
		<div className="TopMenu-Buttons">
			<Button variant="dark" className="ml-3 mr-3 pl-4 pr-4 CreateButton">
				Create
			</Button>{' '}
			<Dropdown>
				<Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
					Sorted By...
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">Alphabetical</Dropdown.Item>
					<Dropdown.Item href="#/action-2">Date</Dropdown.Item>
					<Dropdown.Item href="#/action-3">Time Remaining</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	</div>
);

export default TopMenu;
