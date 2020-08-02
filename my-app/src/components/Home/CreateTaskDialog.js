import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Image } from "react-bootstrap";
import icon from "../../images/icon.png";

export default ({
  openCreateTask,
  setOpenCreateTask,
  saveToTasks,
  cardData,
}) => {
  const iniNewCardData = {
    id: uuidv4(),
    title: "",
    taskGoal: "",
    timeRange: "",
    descriptions: [""],
    isPlay: false,
    createAt: new Date(),
    accomplishedAt: "",
  };

  const [task, setTask] = useState(iniNewCardData);

  console.log("======task", task);

  React.useEffect(() => {
    if (cardData) {
      setTask(cardData);
    }
  }, [cardData]);

  const updateDescriptions = (e, index) => {
    let newDescriptionsCopy = [...task.descriptions];
    newDescriptionsCopy[index] = e.target.value;
    let newTask = { ...task, descriptions: newDescriptionsCopy };
    setTask(newTask);
  };

  const saveTask = (task) => {
    saveToTasks(task);
    setTask(iniNewCardData);
    setOpenCreateTask(false);
  };

  const setClose = () => {
    setOpenCreateTask(false);
    setTask(iniNewCardData);
  };
  const addEmptyDescription = () => {
    const newTask = { ...task, descriptions: [...task.descriptions, ""] };
    setTask(newTask);
  };

  return openCreateTask ? (
    <Modal show={openCreateTask} onHide={() => setOpenCreateTask(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Greate Task Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicImage">
            <Image
              className="mx-auto d-block   img-thumbnail"
              style={{ width: "100px", height: "100px" }}
              src={icon}
              roundedCircle
            />
          </Form.Group>

          <Form.Group controlId="formBasicTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Enter title"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicGoal">
            <Form.Label>Goal</Form.Label>
            <Form.Control
              placeholder="Enter goal"
              value={task.taskGoal}
              onChange={(e) => setTask({ ...task, taskGoal: e.target.value })}
            />
          </Form.Group>

          <Form.Label>Description</Form.Label>
          <Button
            className="float-right  "
            style={{ marginBottom: "3%" }}
            variant="secondary"
            size="sm"
            onClick={addEmptyDescription}
          >
            Add
          </Button>
          {task.descriptions.map((description, index) => {
            return (
              <Form.Group controlId="description" key={index}>
                <Form.Control
                  value={description}
                  size="sm"
                  type="text"
                  placeholder="Enter description"
                  onChange={(e) => updateDescriptions(e, index)}
                />
              </Form.Group>
            );
          })}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={setClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => saveTask(task)}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  ) : null;
};
