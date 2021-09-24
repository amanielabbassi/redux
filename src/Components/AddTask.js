import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_task } from '../JS/Actions/actions'



const AddTask = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const add=() => {
        if (text) {
          dispatch(add_task({id:Date.now(),name:text.trim(),IsDone:false}))
   setText("");  
        } else {
            alert("oupps")
        }
    }
    return (
        <div className="add">
          <input  type="text" onChange={(e)=> setText(e.target.value)} value={text} />  
          <button className="add-btn" onClick={add}>Add</button>
        </div>
    )
}

export default AddTask