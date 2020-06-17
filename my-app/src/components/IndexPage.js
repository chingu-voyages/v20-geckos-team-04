import React from 'react'
import Home from './Home/Home'
import History from './History/History'

export default()=>{
    const [cards, setCards]=useState([])
    return(
        <>
            <Home />
            <History />
        </>
    )
}