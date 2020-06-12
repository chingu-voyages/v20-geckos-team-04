import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default ()=>{
    const [card, setCard]=useState({
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
     return(
         <div>{card.id}</div>
     )
     
}