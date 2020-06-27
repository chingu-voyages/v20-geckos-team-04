import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export default({openCreateTask, setOpenCreateTask, saveToTasks})=>{
    const iniNewCardData={
        id:uuidv4(), 
        title:'', 
        taskGoal:'', 
        timeRange:'', 
        description:'',
        descriptions:[""], 
        isPlay: false, 
        createAt:new Date(),
        accomplishedAt:'',
    }
    const [task, setTask]=useState(iniNewCardData)

    const saveTask=(task)=>{
        let descriptionsCopy=task.descriptions
        setTask({...task, descriptions:[...descriptionsCopy, task.description]})
        saveToTasks({...task, descriptions:[...descriptionsCopy, task.description]})
        setOpenCreateTask(false)
    }

    return(
        openCreateTask?
        (<div id="cardContent">
            <div className="title">
                <label>Title: </label>
                <input type="text" onChange={(e)=>setTask({...task, title:e.target.value})} />
            </div>
            <div className="taskGoal">
                 <label>Task Goal: </label>
                 <input type="text" onChange={(e)=>setTask({...task, taskGoal:e.target.value})} />
            </div>
            <div className="description">
                 <label>description: </label>
                 <input type="text" onChange={(e)=>setTask({...task, description:e.target.value})} />
            </div>
            <button onClick={()=>setOpenCreateTask(false)}>Close</button>
            <button onClick={()=>saveTask(task)}>Save</button>
        
        </div>
        
        
        ):null
    )
}