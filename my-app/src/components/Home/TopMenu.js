import Button from 'react-bootstrap/Button';
import React from 'react';

export default ({ openCreateTask, setOpenCreateTask }) => {
	return (
		<div className="col-sm-10 border border-primary p-3 d-flex">
			<div className="TopMenu-Buttons">
				<Button
					variant="dark"
					className="ml-3 mr-3 pl-4 pr-4 CreateButton"
                    onClick={() => setOpenCreateTask(true)}
                    setOpenCreateTask={setOpenCreateTask}
					openCreateTask={openCreateTask}	
				> Create
				</Button>	
			</div>
		</div>
	);
};
