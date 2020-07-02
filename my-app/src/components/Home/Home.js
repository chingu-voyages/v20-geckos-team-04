import React, { useState } from 'react';
<<<<<<< Updated upstream
import Card from '../Card';

export default () => {
	return (
		<div className="Page-Content">
			<h1>Home Page</h1>
			<Card />
		</div>
=======
import TaskCard from '../General/TaskCard';
import CreateTaskDialog from './CreateTaskDialog';
import Container from 'react-bootstrap/Container';

export default ({ tasks, setTasks }) => {
	const [openCreateTask, setOpenCreateTask] = useState(false);

	const saveToTasks = (newCard) => {
		let tasksCopy = [...tasks];
		tasksCopy = [...tasksCopy, newCard];
		setTasks(tasksCopy);
	};
	return (
		<Container className="Page-Content">
			<div id="toolbar">
				<button onClick={() => setOpenCreateTask(true)}>Create</button>
			</div>
			{
				<CreateTaskDialog
					openCreateTask={openCreateTask}
					setOpenCreateTask={setOpenCreateTask}
					saveToTasks={saveToTasks}
				/>
			}
			<div className="cardsContainer border border-primary">
				<div className="cardsAlignment">
					{tasks.map((task) => {
						return <TaskCard title={task.title} taskGoal={task.taskGoal} description={task.description} />;
					})}
				</div>
			</div>
		</Container>
>>>>>>> Stashed changes
	);
};
