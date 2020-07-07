import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import CreateTaskDialog from './CreateTaskDialog';
import React, { useState } from 'react';
import TaskCard from '../General/TaskCard';
import { v4 as uuidv4 } from 'uuid';

export default ({ openCreateTask, setOpenCreateTask, tasks, setTasks }) => {
	const iniNewCardData = {
		id: uuidv4(),
		title: '',
		taskGoal: '',
		timeRange: '',
		description: '',
		descriptions: [],
		isPlay: false,
		createAt: new Date(),
		accomplishedAt: '',
	};
	const [task, setTask] = useState(iniNewCardData);

	const saveToTasks = (newCard) => {
		let tasksCopy = [...tasks];
		tasksCopy = [...tasksCopy, newCard];
		setTasks(tasksCopy);
	};

	const saveTask = (task) => {
		let descriptionsCopy = task.descriptions;
		setTask({ ...task, descriptions: [...descriptionsCopy, task.description] });
		saveToTasks(task);
		setOpenCreateTask(false);
	};

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="col-sm-10 border border-primary p-3 d-flex">
			<div className="TopMenu-Buttons">
				<Button variant="dark" className="ml-3 mr-3 pl-4 pr-4 CreateButton" onClick={() => handleShow(true)}>
					Create
				</Button>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
						<div id="cardContent">
							<div className="title">
								<label>Title: </label>
								<input type="text" onChange={(e) => setTask({ ...task, title: e.target.value })} />
							</div>
							<div className="taskGoal">
								<label>Task Goal: </label>
								<input type="text" onChange={(e) => setTask({ ...task, taskGoal: e.target.value })} />
							</div>
							<div className="description">
								<label>description: </label>
								<input
									type="text"
									maxLength="40"
									onChange={(e) => setTask({ ...task, description: e.target.value })}
								/>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="primary" onClick={() => saveTask(task)}>
							Save
						</Button>
					</Modal.Footer>
				</Modal>

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
};
