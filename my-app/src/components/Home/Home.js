import React, { useState } from "react";
import TaskCard from "../General/TaskCard";
import CreateTaskDialog from "./CreateTaskDialog";
import { Button } from "react-bootstrap";

export default ({ tasks, setTasks, deleteCard }) => {
  console.log("tasks in home: ", tasks);
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [currentTaskData, setCurrentTaskData] = useState(null);

  const saveToTasks = (newCard) => {
    let tasksCopy = [...tasks];
    tasksCopy = [...tasksCopy, newCard];
    setTasks(tasksCopy);
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
        <Button onClick={() => openTaskCard()} style={{ marginRight: "2rem" }}>
          Create
        </Button>
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
          openTaskCard={openTaskCard}
          saveToTasks={saveToTasks}
        />
      }
    </div>
  );
};
