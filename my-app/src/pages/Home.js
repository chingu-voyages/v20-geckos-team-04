import React, {useState} from "react" 
import Card from '../components/Card'

export default()=>{
    const [cards, setCards]=useState([])
    return(
        <div>
            Home
            <Card />
        </div>
    )
}
