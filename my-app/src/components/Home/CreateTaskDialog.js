import React,{useState, useRef} from 'react'
import useInputState from '../../hooks/useInputState'
import DescriptionInput from './DescriptionInput'

export default ({updateTitle,AddNewTask, taskId})=>{
    const [title, handleTitleChange, reset] = useInputState("")
    const [goal, handleGoalChange, resetGoal] = useInputState("")
    const [descriptions, setDescriptions]=useState([])
    
    let [numberOfAddBoxes, setNumberOfAddBoxes]=useState(1)

    const addTask=(e)=>{
        e.preventDefault()
        const newDescription={"id":"123","descriptions":descriptions}
        AddNewTask(goal, newDescription)
         
        resetGoal()
    }

    const addDescrition=(e)=>{
        e.preventDefault()
        setNumberOfAddBoxes(numberOfAddBoxes+=1)
    }
    const getDescriptionInputs=(input)=>{
        console.log("input", input)
    }
     
    const descriptionInputs=Array.from({length:numberOfAddBoxes}).map(()=>(
         <DescriptionInput descriptions={descriptions} getDescriptionInputs={getDescriptionInputs} />
    ))
    
    const inputRef=useRef();
    console.log("descriptions: ", descriptions)
   
    return(
        <div>
            <div>
                <input
                    ref={inputRef}
                    type="text"
                    value={title}
                    name="title"
                    onFocus={e => e.target.select()}
                    onBlur={() => updateTitle(taskId, title)}
                    onChange={handleTitleChange}
                    onKeyPress={e=>{
                    if(e.key==="Enter"){updateTitle(taskId, title);inputRef.current.blur()}}}
                />
                                

                 
                <h2>img picker</h2>
                <form onSubmit={addTask} >
                    <label htmlFor="goal" >Goal:</label>
                    {goal}
                    <input name="goal" type="text" value={goal} onChange={handleGoalChange} ></input>
                    <br/>
                    <label htmlFor="description">Description:</label>
                    <button onClick={addDescrition}>Add</button>
                    <br/>

                    {descriptionInputs}
                   
                    <button>Create</button>
                </form>
                
            </div>
        </div>
    )
}