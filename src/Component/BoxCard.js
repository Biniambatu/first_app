import React, { useState } from 'react'

const BoxCard = ({result,children}) => {
    const[show, setShow] = useState(true)
  return (
    <div className={show ? " ": "hidden"}>
    <div className={`box ${result}`}>
      {children}
    </div>
    <button onClick={()=>setShow(!show)}>hide</button>
    </div>
  )
}

export default BoxCard