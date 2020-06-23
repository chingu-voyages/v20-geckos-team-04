import React from 'react'
import Home from './Home/Home'
import History from './History/History'
import { BrowserRouter as Switch, Route } from 'react-router-dom';

export default()=>{
    const [tasks, setTasks]=React.useState([])

   
    console.log("tasks: ",tasks)
    return(
        <>
            <Switch>
              <Route exact path="/" render={(props) => (<Home tasks={tasks} setTasks={setTasks}  />
)}/>
              <Route path="/history" component={History} />
            </Switch>
            
        </>
    )
}

