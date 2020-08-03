import React from "react";
import TaskCard from "../General/TaskCard";
import CreateTaskDialog from "./CreateTaskDialog";
import Container from 'react-bootstrap/Container';

export default ({ openTaskCard, currentTaskData, openCreateTask, setOpenCreateTask, tasks, setTasks, deleteCard }) => {

  const saveToTasks = (newCard) => {
    let tasksCopy = [...tasks];

    const editTargetIdx = tasksCopy.findIndex((el) => {
      return el.id === newCard.id;
    });
    if (editTargetIdx === -1) {
      tasksCopy = [...tasksCopy, newCard];
      setTasks(tasksCopy);
    } else {
      tasksCopy[editTargetIdx] = newCard;
      setTasks(tasksCopy);
    }
  };

  return (
    <Container className="Page-Content mr-0 ml-0 pl-0 pr-0">
      <div className="cardsContainer border-bottom border-right border-primary">
        <div className="cardsAlignment">
        {tasks.map((task, index) => {
            return (
              <TaskCard
                key={index}
                deleteCard={deleteCard}
                taskId={task.id}
                openTaskCard={openTaskCard}
                task={task}
                />
            );
          })}
        </div>
        {
          <CreateTaskDialog
          cardData={currentTaskData}
          openCreateTask={openCreateTask}
          setOpenCreateTask={setOpenCreateTask}
          saveToTasks={saveToTasks}
          />
        }
      </div>
  </Container>
  );
};
