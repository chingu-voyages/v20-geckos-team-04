import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import GearMenu from '../Home/GearMenu';
import Card from 'react-bootstrap/Card';
import { FaCalendarWeek } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';

export default ({ title, taskGoal, description }) => {
	const now = 85;

	const progressInstance = <ProgressBar className="progressBar" animated now={now} label={`${now}min`} />;

	return (
		<Card className="taskCard" bg="light">
			<GearMenu />
			<FaCalendarWeek style={{ height: '50px', width: '50px', margin: 'auto' }} />
			<Card.Title>{title}</Card.Title>
			<Card.Text style={{ color: '#0169D9' }}>{taskGoal}</Card.Text>
			<Card.Text style={{ marginTop: '-7.5px' }} className="cardDescription">
				{description}
			</Card.Text>
			{progressInstance}
			<div className="Button-Container row-cols-2">
				<Button className="Play-Button">
					<FaPlay />
				</Button>
				<Button className="Detail-Button" variant="outline-primary">
					Detail
				</Button>
			</div>
		</Card>
	);
};
