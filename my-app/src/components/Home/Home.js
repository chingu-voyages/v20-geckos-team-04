import React, {useState} from "react" 
import Card from './Card'

export default({AddNewTaskCard})=>{
    
    return(
        <div>
            Home
            <Card AddNewTaskCard={AddNewTaskCard} />
        </div>
    )
}
