import React from 'react'
import Home from './Home/Home'
import History from './History/History'

export default()=>{
    const [tasks, setTasks]=useState([])

    const addNewTask = (taskTitle, taskGoal,descriptions) => {
        const newTask = { id: uuidv4(), taskTitle,taskGoal, descriptions };
        const newState = [...tasks, newTask];
        setCards(newState);
      };
      


    const updateTitle = (taskId, newTaskTitle) => {
        const stateCopy = [...tasks];
        stateCopy.forEach((task) => {
          if (task.id === taskId) {
            task.taskTitle = newTaskTitle;
          }
        });
        setTasks(stateCopy);
      };
   
    return(
        <>
            <Home tasks={tasks} setTasks={setTasks}  taskId="1234" updateTitle={updateTitle}/>
            <History />
        </>
    )
}