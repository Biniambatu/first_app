import React, { useState } from 'react'



const Date = () => {
  const[name,setName] = useState(0)
  const increase = () => {
     setName( name +1 )
  }
  const derease = () => {
     setName(name-1) 
  }
  const reset = () => {
     setName(0)
  }
  return (
    <> 
      <h1>{name}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={derease}>decrease</button>
      <button onClick={reset}>reset</button>
    </>
    
  )
}

export default Date
