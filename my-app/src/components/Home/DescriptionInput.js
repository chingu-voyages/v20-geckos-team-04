import React, { useEffect } from 'react'
import useInputState from '../../hooks/useInputState'

export default ({getDescriptionInputs})=>{

const [description, handleDescriptionChange, resetDescription] = useInputState("")

 



return(
        <div>
            <input type="text"  value={description} onChange={handleDescriptionChange} />
        </div>
    )
}