import React, {useState} from "react" 
import Task from './Tasks'
import TaskCard from '../General/TaskCard'
import CreateTask from "./CreateTask"

import { v4 as uuidv4 } from 'uuid';

export default({tasks, setTasks, taskId, updateTitle})=>{
    const [newCard, setNewCard]=useState(iniNewCardData) 
    const [openCreateTask, setOpenCreateTask]=useState(false)
    const iniNewCardData={
        id:uuidv4(), 
        title:'', 
        taskGoal:'', 
        timeRange:'', 
        descriptions:[], 
        isWorking: false, 
        createAt:new Date(),
        accomplishedAt:'',
        progress:'new'
    }
    const saveToTasks=(newCard)=>{
        const tasksCopy=[...tasks]
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
           
           <CreateTask
             openCreateTask={openCreateTask}
             setOpenCreateTask={setOpenCreateTask}
             saveToTasks={saveToTasks}
             />
        </div>
    )
}
