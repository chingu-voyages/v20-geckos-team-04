import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default({openCreateTask, setOpenCreateTask, saveToTasks})=>{
    const iniNewCardData={
        id:uuidv4(), 
        title:'', 
        taskGoal:'', 
        timeRange:'', 
        descriptions:[""], 
        isPlay: false, 
        createAt:new Date(),
        accomplishedAt:'',
    }
    const [task, setTask]=useState(iniNewCardData)


    const updateDescriptions=(e, index)=>{
        let newDescriptionsCopy=[...task.descriptions]
        newDescriptionsCopy[index]=e.target.value
        let newTask={...task, descriptions:newDescriptionsCopy }
        setTask(newTask)
    }

    const saveTask=(task)=>{
        saveToTasks(task)
        setTask(iniNewCardData)
        setOpenCreateTask(false)
    }
    const addEmptyDescription=()=>{
        const newTask={...task, descriptions:[...task.descriptions, ""]}
        setTask(newTask)
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
             {task.descriptions.map((description,index)=>{
                return(
                    <div className="description">
                    <label>description: </label>
                    <input key={index} name="descriptions" value={description} type="text" onChange={(e)=>updateDescriptions(e,index )} />
                    </div>
                )
            })}
            <button onClick={addEmptyDescription}>Add</button>
            <button onClick={()=>setOpenCreateTask(false)}>Close</button>
            <button onClick={()=>saveTask(task)}>Save</button>
            {/* ---- */}
            <Modal show={openCreateTask} onHide={()=>setOpenCreateTask(false)}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>setOpenCreateTask(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>saveTask(task)}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
        
        
        ):null
    )
}