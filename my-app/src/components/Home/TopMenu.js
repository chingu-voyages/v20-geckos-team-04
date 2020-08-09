import Button from "react-bootstrap/Button";
import React from "react";
import Ripples from "react-ripples";

export default ({ openCreateTask, setOpenCreateTask }) => {
  return (
    <div className="col-sm-10 border border-primary p-3 d-flex">
      <div className="TopMenu-Buttons">
        <Ripples color="#fff" during={1000}>
          <Button
            variant="dark"
            className="ml-3 mr-3 pl-4 pr-4 CreateButton"
            onClick={() => setOpenCreateTask(true)}
          >
            {" "}
            Create
          </Button>
        </Ripples>
      </div>
    </div>
  );
};
