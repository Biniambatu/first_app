import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import TaskList from './TaskList';
import BoxCard from './BoxCard';

const CardList = () => {
  const student = [{id:1, name: 'Biniam'},
                   {id:2, name: 'Samuel'},
                   {id:3, name:'chaltu'},
                   {id:4, name:'Tola'}];
  
  const[task, setTask] = useState(student);
  
  const handleDelete = (id) => {
    setTask(task.filter(taskk => id !== taskk.id))
  }
  const[show,setShow] = useState(true)
  const handleToggle = () => {
    setShow(!show)
  }
  
  return (
    <>
      
       <table >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <ul >
              {show && task.map((tas)=>
                <TaskList key={tas.id} taskss={tas} handleDelete={handleDelete} />)}
              <button  className='btn btn-outline-primary'>reset</button>
           </ul>
          </tr>
        </tbody>
        <tfoot>
          <button className='btn btn-primary' onClick={handleToggle}>toggle</button>
        </tfoot> 
       </table>
       <BoxCard result="success">
          <p className='title'>biniam</p>
          <p className='description'>software</p>
       </BoxCard>
       <BoxCard result="success">
       <p className='title'>beza</p>
          <p className='description'>medicine</p>
          <p>hfyfvyfvy</p>
       </BoxCard>
       <div className='box success'>
          <p className='title'>beza</p>
          <p className='description'>medicine</p>
       </div>
       <div className='box alert'>
          <p className='title'>hagos</p>
          <p className='description'>law</p>
       </div>
    </>
  )
}

export default CardList