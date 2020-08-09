import React from 'react';
import '../../App.css';
 

function About() {
	return (
		<div className="Page-Content about-gecko">
			<h1>About Gecko</h1>
            <div className="about-paragraph">
            <p>Thank you for downloading Gecko, a <strong>React ToDo List App</strong></p>
            <p><strong>Start a Task</strong> by clicking the "Create" button on the top bar!</p>
            <p>You can Select an Icon and Create a title, goal, and description(s) for your new task.</p>
            <p><strong>Made a mistake?</strong> Click on the Gear Icon of your task item and click "Edit"</p>
            <p><strong>Want to remove your task?</strong> Click the Gear Icon, then "Delete".</p>
            <p>Create as many tasks as you'd like.</p>
            </div>
		</div>
	);
}

export default About;
