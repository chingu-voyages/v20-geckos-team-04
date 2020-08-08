import React, { useState } from "react";
import Home from "./Home/Home";
import TopMenu from "./Home/TopMenu";
import About from "./About/About";
import Nav from "./LeftNavBar/Nav";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";

export default () => {
  const storedTasks = localStorage.getItem("taskStorage");
  const iniState = storedTasks ? JSON.parse(storedTasks) : [];
  const [tasks, setTasks] = React.useState(iniState);

  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [currentTaskData, setCurrentTaskData] = useState(null);

  React.useEffect(() => {
    localStorage.setItem("taskStorage", JSON.stringify(tasks));
  }, [tasks]);

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

  const deleteCard = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div>
      <Row>
        <div className="col-sm-2 border border-primary border-right-0 border-bottom-0 p-3">
          <h1 className="app-title">Gecko</h1>
        </div>
        <TopMenu
          setOpenCreateTask={setOpenCreateTask}
          openCreateTask={openCreateTask}
        />
      </Row>
      <Row>
        <Switch>
          <Nav />
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                tasks={tasks}
                setTasks={setTasks}
                deleteCard={deleteCard}
                setOpenCreateTask={setOpenCreateTask}
                openCreateTask={openCreateTask}
                openTaskCard={openTaskCard}
                currentTaskData={currentTaskData}
              />
            )}
          />
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Row>
    </div>
  );
};
