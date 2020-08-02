import React from "react";
import GearMenu from '../Home/GearMenu';
import Card from 'react-bootstrap/Card';
import { FaCalendarWeek } from 'react-icons/fa';

export default ({ deleteCard, taskId, openTaskCard, task }) => {
  return (
    <Card className="taskCard" bg="light">
      <GearMenu openTaskCard={openTaskCard} deleteCard={deleteCard} taskId={taskId} />
      <FaCalendarWeek style={{ height: '50px', width: '50px', margin: 'auto' }} />
      <Card.Title>{task.title}</Card.Title>
      <Card.Text style={{ color: '#0169D9' }}>{task.taskGoal}</Card.Text>
      <Card.Text style={{ marginTop: '-4px' }} className="cardDescription">
        {task.descriptions[0]}
      </Card.Text>
  </Card>
  );
};
