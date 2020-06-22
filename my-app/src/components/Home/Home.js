import React, {useState} from "react" 
// import Task from './Tasks'
import TaskCard from '../General/TaskCard'
import CreateTask from "./CreateTask"

import { v4 as uuidv4 } from 'uuid';

export default({tasks, setTasks})=>{
   console.log(tasks)
    const [openCreateTask, setOpenCreateTask]=useState(false)
  
    const saveToTasks=(newCard)=>{
        let tasksCopy=[...tasks]
        tasksCopy=[...tasksCopy, newCard ]
        setTasks(tasksCopy)
    }
    return(
        <div>
           <div id="toolbar">
               <button onClick={()=>setOpenCreateTask(true)}>Create New Task</button>
            </div>
           <div id="cardsContainer" >
               {tasks.map((task)=>{
                   return <TaskCard />
               })}
           </div>
           
           {<CreateTask
             openCreateTask={openCreateTask}
             setOpenCreateTask={setOpenCreateTask}
             saveToTasks={saveToTasks}
             />}
        
        </div>
    )
}
