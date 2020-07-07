import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from './Card';


function GearMenu(props) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
    <>
	<Dropdown>
		<Dropdown.Toggle variant="secondary" id="dropdown-basic">
			<FontAwesomeIcon icon={faCog} />
		</Dropdown.Toggle>

		<Dropdown.Menu>
			{/* <Dropdown.Header>Settings</Dropdown.Header> */}
			{/* <Dropdown.Divider /> */}
			<Dropdown.Item as="button">Edit</Dropdown.Item>
			<Dropdown.Item as="button" onClick={handleShow}>Detail</Dropdown.Item>
			<Dropdown.Item as="button">Accomplish</Dropdown.Item>
			<Dropdown.Item as="button">Delete</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown>

	<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h1 className="text-center"></h1>
            <p>Description:</p>
            <ProgressBar now={100} label={`${100}%`}  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
	);
}

export default GearMenu;
