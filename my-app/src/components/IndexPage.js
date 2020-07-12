import React from 'react'
import Home from './Home/Home'
import History from './History/History'
import { BrowserRouter as Switch, Route } from 'react-router-dom';

export default()=>{
    const [tasks, setTasks]=React.useState([])
    
    const deleteCard=(id)=>{
        setTasks(tasks.filter(t=>t.id!==id))
    }
   
    console.log("tasks: ",tasks)
    return(
        <>
            <Switch>
              <Route exact path="/" render={(props) => (<Home tasks={tasks} setTasks={setTasks} deleteCard={deleteCard} />)}/>
              <Route path="/history" component={History} />
            </Switch>
            
        </>
    )
}

