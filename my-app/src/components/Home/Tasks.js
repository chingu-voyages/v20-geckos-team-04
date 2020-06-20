import React,{useState} from 'react'
import CreateTaskDialog from './CreateTaskDialog'
import { v4 as uuidv4 } from 'uuid';

export default ()=>{
    const [task, setTask]=useState({
        id:uuidv4(), 
        title:'', 
        taskGoal:'', 
        timeRange:'', 
        description:[], 
        isWorking: false, 
        createAt:new Date(),
        accomplishedAt:'',
        progress:'new'
     })
     const AddNewTask=(taskGoal, teskDescription)=>{

        console.log("TaskGoal: ",taskGoal)
        console.log("taskDescription: ", teskDescription)
    }
     return(
         <div>
             {task.id}
             <CreateTaskDialog AddNewTask={AddNewTask} />
         </div>
     )
     
}