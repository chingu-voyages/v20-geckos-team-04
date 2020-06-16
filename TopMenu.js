import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const TopMenu = () => (
    <div className="col-sm-10 border border-primary border-left-0 p-3 d-flex flex-row-reverse">
      <Dropdown className="mr-5">
        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
          Sorted By...
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Alphabetical</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Date</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Time Remaining</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

        <Button variant="dark" className="mr-3 pl-4 pr-4">Create</Button>{' '}
    </div>
  );

export default TopMenu;