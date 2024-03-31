// import Counters from './Counters';
import Card from './Component/Card';
import CardList from './Component/CardList';
import Date from './Date'
// import MealsLists from './MealsLists';
// import MealsProviders from './MealsProviders';
// import ModeToggker from './ModeToggker';

// import React, { useRef, useState } from 'react'

// import {robots} from './robots'
function App() { 
  // const[fname, setFname] = useState('')
  // const[lname, setLname] = useState('')
  // const[email, setEmail] = useState('')
  // const handleFirst = (e) =>{
  //   setFname(e.target.value)
  // }
  // const handleLast = (e)=> {
  //   setLname(e.target.value)
  // }
  // const handleEmail = (e)=>{
  //   setEmail(e.target.value)
  // }

  // const [form, setForm] = useState({ 
  //   firstName: 'Luke', 
  //   lastName: 'Jones', 
  //   email: 'lukeJones@sculpture.com', 
  // }); 
 
  // const [name, setName] = useState('biniam')
  // const handleClick = () => {
  //   setName('samuel')
  // }
  // const handleReset = () => {
  //   setName('name')
  // }
  // const student = ['sami','bini','beza','tola']
  // const[selectesIndex, setSelectedIndex] = useState(-1)

  return ( 
    <>
    <Date></Date>
    <CardList></CardList>
    <Card></Card>
    {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}></Card> */}
    
    
     {/* <ul className='list-group' >
      {student.map((item,index)=><li> <button className={ selectesIndex === index? 'list-group-item active' :  'list-group-item'}
       key={index}   
       onClick={()=>setSelectedIndex(index)}>{item}</button> </li>)}
     </ul> */}
    </>
    // <> 
    //    <div>
    //      <MealsProviders>
    //         <MealsLists/>
    //         <Counters/>
    //      </MealsProviders>
    //    </div>
    //    <ModeToggker message={'my name is ' + name}></ModeToggker>
    //    <button onClick={handleClick}>Change name</button> <br></br>
    //    <button onClick={handleReset}>reset</button>
    //    <br></br>
    //    F_name: <input value={fname} onChange={handleFirst} /> <br></br>
    //    L_name: <input value={lname} onChange={handleLast} /> <br></br>
    //    Email: <input value={email} onChange={handleEmail} />
    //   <p>{fname} {lname} ({email})</p> 
    //   <> 
    //   <label> 
    //     First name: 
    //     <input value={form.firstName} 
    //       onChange={e => { 
    //         setForm({ 
    //           ...form, 
    //           firstName: e.target.value 
    //         }); 
    //       }} 
    //     /> 
    //   </label> 
    //   <label> 
    //     Last name: 
    //     <input 
    //       value={form.lastName} 
    //       onChange={e => { 
    //         setForm({ 
    //           ...form, 
    //           lastName: e.target.value 
    //         }); 
    //       }} 
    //     /> 
    //   </label> 
    //   <label> 
    //     Email: 
    //     <input 
    //       value={form.email} 
    //       onChange={e => { 
    //         setForm({ 
    //           ...form, 
    //           email: e.target.value 
    //         }); 
    //       }} 
    //     /> 
    //   </label> 
    //   <p> 
    //     {form.firstName}{' '} 
    //     {form.lastName}{' '} 
    //     ({form.email})
    //   </p> 
    // </> 
    // 
    // </> 
  ); 
 
  }
export default App;
