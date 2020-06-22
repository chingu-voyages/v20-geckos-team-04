import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default({openCreateTask, setOpenCreateTask, saveToTasks})=>{
    const iniNewCardData={
        id:uuidv4(), 
        title:'', 
        taskGoal:'', 
        timeRange:'', 
        descriptions:[""], 
        isWorking: false, 
        createAt:new Date(),
        accomplishedAt:'',
        progress:'new'
    }
    const [task, setTask]=useState(iniNewCardData)

    const saveTask=(task)=>{
        saveToTasks(task)
        setOpenCreateTask(false)
    }
    return(
        openCreateTask?
        (<div id="cardContent">
            {task.id}
            123
            <button onClick={()=>setOpenCreateTask(false)}>Close</button>
            <button onClick={()=>saveTask(task)}>Save</button>
            </div>):null
    )
}