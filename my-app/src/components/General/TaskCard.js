import React from "react";
import GearMenu from '../Home/GearMenu';
import Card from 'react-bootstrap/Card';
import { IconPicker } from 'react-fa-icon-picker'

export default ({ deleteCard, taskId, openTaskCard, task }) => {
  return (
    <Card className="taskCard" bg="light">
      <GearMenu openTaskCard={openTaskCard} deleteCard={deleteCard} taskId={taskId} />
      <div className="card-content">
        <IconPicker value={task.icon} />
        <Card.Title>{task.title}</Card.Title>
        <Card.Text style={{ color: '#0169D9' }}>{task.taskGoal}</Card.Text>
        <Card.Text style={{ marginTop: '-4px' }} className="cardDescription">
          {task.descriptions[0]}
        </Card.Text>
      </div>
  </Card>
  );
};
