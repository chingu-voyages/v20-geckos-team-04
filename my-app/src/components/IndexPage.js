import React from 'react'
import Home from './Home/Home'
import History from './History/History'
import { BrowserRouter as Switch, Route } from 'react-router-dom';

export default()=>{
    const [tasks, setTasks]=React.useState([])

    // const addNewTask = (taskTitle, taskGoal,descriptions) => {
    //     const newTask = { id: uuidv4(), taskTitle,taskGoal, descriptions };
    //     const newState = [...tasks, newTask];
    //     setCards(newState);
    //   };
      


    // const updateTitle = (taskId, newTaskTitle) => {
    //     const stateCopy = [...tasks];
    //     stateCopy.forEach((task) => {
    //       if (task.id === taskId) {
    //         task.taskTitle = newTaskTitle;
    //       }
    //     });
    //     setTasks(stateCopy);
    //   };

    return(
        <>
            <Switch>
              <Route exact path="/" render={(props) => (<Home tasks={tasks} setTasks={setTasks}  />
)}/>
              <Route path="/history" component={History} />
            </Switch>
            
        </>
    )
}

