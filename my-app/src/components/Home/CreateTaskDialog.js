import React,{useState} from 'react'
import useInputState from '../../hooks/useInputState'

export default ({AddNewTask})=>{
    const [goal, handleGoalChange, resetGoal] = useInputState("")
    const [description, handleDescriptionChange, resetDescription] = useInputState("")
    let [numberOfAddBoxes, setNumberOfAddBoxes]=useState(1)

    const addTask=(e)=>{
        e.preventDefault()
        const newDescription={"id":"123","description":description}
        AddNewTask(goal, newDescription)
        resetDescription()
        resetGoal()
    }

    const addDescrition=(e)=>{
        e.preventDefault()
        setNumberOfAddBoxes(numberOfAddBoxes+=1)
    }

     
    const descriptionInputs=Array.from({length:numberOfAddBoxes}).map(()=>(
        <div>
            <input type="text" id={numberOfAddBoxes} />
        </div>
    ))
    
    console.log("numofboxes: ", numberOfAddBoxes)
   
    return(
        <div>
            <div>
                <h1>Title</h1>
                 
                <h2>img picker</h2>
                <form onSubmit={addTask} >
                    <label for="goal" >Goal:</label>
                    {goal}
                    <input name="goal" type="text" value={goal} onChange={handleGoalChange} ></input>
                    <br/>
                    <label for="description">Description:</label>
                    <button onClick={addDescrition}>Add</button>
                    <br/>
                    {description}
                    <input name="description" type="text" value={description} onChange={handleDescriptionChange}></input>
                   
                    {descriptionInputs}
                   
                    <button>Create</button>
                </form>
                
            </div>
        </div>
    )
}