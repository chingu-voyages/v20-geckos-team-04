import React, {useState} from "react" 
import TaskCard from '../General/TaskCard'
import CreateTaskDialog from "./CreateTaskDialog"



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
               <button onClick={()=>setOpenCreateTask(true)}>Create</button>
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
