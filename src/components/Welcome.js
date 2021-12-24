import React from 'react'
import '../styles/welcome.css'
import { useState } from 'react'

function Welcome() {
    const [open, setOpen] = useState(true)
    return (
        <div className='welcome'>
            <div className='wrapper welcome-flex'>
                <h1>Yolo Helper</h1>
            </div>
            <div className=' welcome-line'>

            </div>
            <div className='wrapper'>
                <img src="https://media3.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif?cid=ecf05e47ocpl9uhwk4ro7rusvdx9jfdksfi24lwg17ncgkr5&rid=giphy.gif&ct=g" />
            </div>

            <button onClick={() => setOpen(open === true ? false : true)}>
                {open ? "x" : "show"}</button>
            {console.log(open)}
        </div>
    )
}

export default Welcome
