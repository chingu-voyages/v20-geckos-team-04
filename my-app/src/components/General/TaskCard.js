import React from 'react'

// will be used in two diffrent pages 
export default ({deleteCard, taskId})=>{
   
    return(
        <div>
            Task Card
            <button onClick={()=>deleteCard(taskId)} >Delete</button>
        </div>
    )
}