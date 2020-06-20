import React from 'react'
import Home from './Home/Home'
import History from './History/History'

export default()=>{
    const [tasks, setTasks]=useState([])
    
   
    return(
        <>
            <Home/>
            <History />
        </>
    )
}