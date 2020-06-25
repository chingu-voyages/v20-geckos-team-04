import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import GearMenu from './GearMenu';
import Card from 'react-bootstrap/Card';
import { FaCalendarWeek } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default () => {
	const now = 85;

	const progressInstance = <ProgressBar animated now={now} label={`${now}min`} />;

	const [card, setCard] = useState({
		id: uuidv4(),
		title: '',
		taskGoal: '',
		timeRange: '',
		description: [],
		isWorking: false,
		createAt: new Date(),
		accomplishedAt: '',
		progress: 'new',
	});

	return (
		<div className="Card-Container">
			{/* {card.id} */}
			<Row>
				<Col>
					<Card bg="light" className="Card">
						<GearMenu />
						<FaCalendarWeek style={{ height: '50px', width: '50px', margin: 'auto' }} />
						<Card.Title> Task Title </Card.Title>
						<Card.Link href="#">Task Goal</Card.Link>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
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
				</Col>
				<Col>
					<Card bg="light" className="Card">
						<GearMenu />
						<FaCalendarWeek style={{ height: '50px', width: '50px', margin: 'auto' }} />
						<Card.Title> Task Title </Card.Title>
						<Card.Link href="#">Task Goal</Card.Link>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
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
				</Col>
				<Col>
					<Card bg="light" className="Card">
						<GearMenu />
						<FaCalendarWeek style={{ height: '50px', width: '50px', margin: 'auto' }} />
						<Card.Title> Task Title </Card.Title>
						<Card.Link href="#">Task Goal</Card.Link>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
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
				</Col>
				<Col>
					<Card bg="light" className="Card">
						<GearMenu />
						<FaCalendarWeek style={{ height: '50px', width: '50px', margin: 'auto' }} />
						<Card.Title> Task Title </Card.Title>
						<Card.Link href="#">Task Goal</Card.Link>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
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
				</Col>
			</Row>
			<Row>
				<Col>
					<Card bg="light" className="Card">
						<GearMenu />
						<FaCalendarWeek style={{ height: '50px', width: '50px', margin: 'auto' }} />
						<Card.Title> Task Title </Card.Title>
						<Card.Link href="#">Task Goal</Card.Link>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
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
				</Col>
				<Col>
					<Card bg="light" className="Card">
						<GearMenu />
						<FaCalendarWeek style={{ height: '50px', width: '50px', margin: 'auto' }} />
						<Card.Title> Task Title </Card.Title>
						<Card.Link href="#">Task Goal</Card.Link>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
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
				</Col>
				<Col>
					<Card bg="light" className="Card">
						<GearMenu />
						<FaCalendarWeek style={{ height: '50px', width: '50px', margin: 'auto' }} />
						<Card.Title> Task Title </Card.Title>
						<Card.Link href="#">Task Goal</Card.Link>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
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
				</Col>
				<Col>
					<Card bg="light" className="Card">
						<GearMenu />
						<FaCalendarWeek style={{ height: '50px', width: '50px', margin: 'auto' }} />
						<Card.Title> Task Title </Card.Title>
						<Card.Link href="#">Task Goal</Card.Link>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
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
				</Col>
			</Row>
			<Row>
				<Col>
					<Card bg="light" className="Card">
						<GearMenu />
						<FaCalendarWeek style={{ height: '50px', width: '50px', margin: 'auto' }} />
						<Card.Title> Task Title </Card.Title>
						<Card.Link href="#">Task Goal</Card.Link>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
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
				</Col>
				<Col></Col>
				<Col></Col>
				<Col></Col>
			</Row>
		</div>
	);
};
