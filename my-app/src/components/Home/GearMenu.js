import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GearMenu = ({ openTaskCard, deleteCard, taskId }) => (
	<Dropdown className="Gear-Dropdown">
		<Dropdown.Toggle variant="secondary" id="dropdown-basic">
			<FontAwesomeIcon icon={faCog} />
		</Dropdown.Toggle>

		<Dropdown.Menu>
			<Dropdown.Item
				as="button"
				onClick={() => openTaskCard(taskId)}
			>
				Edit / View
			</Dropdown.Item>
			<Dropdown.Item as="button" onClick={() => deleteCard(taskId)}>
				Delete
			</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>
);

export default GearMenu;
