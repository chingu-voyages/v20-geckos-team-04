import React, { useState } from "react";
import TaskCard from "../General/TaskCard";
import CreateTaskDialog from "./CreateTaskDialog";
import { Button } from "react-bootstrap";

export default ({ tasks, setTasks, deleteCard }) => {
  console.log("tasks in home: ", tasks);
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [currentTaskData, setCurrentTaskData] = useState(null);

  const saveToTasks = (newCard) => {
    console.log("$$$", newCard);
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

  const openTaskCard = (taskId) => {
    if (taskId) {
      const targetTaskData = tasks.find((el) => {
        return el.id === taskId;
      });
      setCurrentTaskData(targetTaskData);
      setOpenCreateTask(true);
    } else {
      setOpenCreateTask(true);
    }
  };

  return (
    <div>
      <div id="toolbar">
        <Button onClick={() => openTaskCard()}>Create</Button>
      </div>
      <div id="cardsContainer">
        {tasks.map((task, index) => {
          return (
            <TaskCard
              key={index}
              deleteCard={deleteCard}
              taskId={task.id}
              openTaskCard={openTaskCard}
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
  );
};
