import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GearMenu = () => (
	<Dropdown>
		<Dropdown.Toggle variant="secondary" id="dropdown-basic">
			<FontAwesomeIcon icon={faCog} />
		</Dropdown.Toggle>

		<Dropdown.Menu>
			{/* <Dropdown.Header>Settings</Dropdown.Header> */}
			{/* <Dropdown.Divider /> */}
			<Dropdown.Item as="button">Edit</Dropdown.Item>
			<Dropdown.Item as="button">Detail</Dropdown.Item>
			<Dropdown.Item as="button">Accomplish</Dropdown.Item>
			<Dropdown.Item as="button">Delete</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
);

export default GearMenu;
