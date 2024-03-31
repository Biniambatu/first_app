import React from 'react'

const TaskList = ({taskss,handleDelete}) => {
  return (
    <li >{taskss.id} - {taskss.name} 
        <button className='btn btn-outline-danger' onClick={()=>handleDelete(taskss.id)} >Delete</button>
     </li>
     )
    }
  
export default TaskList