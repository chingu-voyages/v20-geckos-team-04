import React, {useState} from "react" 
import TaskCard from '../General/TaskCard'
import CreateTaskDialog from "./CreateTaskDialog"
import { Button } from 'react-bootstrap';


export default({tasks, setTasks})=>{
   console.log("tasks in home: ",tasks)
	const [openCreateTask, setOpenCreateTask]=useState(false)
	
    const saveToTasks=(newCard)=>{
        let tasksCopy=[...tasks]
        tasksCopy=[...tasksCopy, newCard ]
        setTasks(tasksCopy)
    }
    return(
        <div>
           <div id="toolbar">
               <Button onClick={()=>setOpenCreateTask(true)}>Create</Button>
            </div>
           <div id="cardsContainer" >
               {tasks.map((task)=>{
                   return <TaskCard />
               })}
           </div>
           
           {<CreateTaskDialog
             openCreateTask={openCreateTask}
             setOpenCreateTask={setOpenCreateTask}
             saveToTasks={saveToTasks}
             />}
        
        </div>
    )
}
