import React, { useState, useEffect } from 'react'
import '../App.css';

import { FcApproval } from "react-icons/fc";


function SingleTask({ user, onDelete }) {
  const [select, setselect] = useState(false)
  const [complete, setcomplete] = useState('Mark as completed')

  const handleClick = (e) => {

    if (select)
      setselect(false)
    else
      setselect(true)

    if(complete=='Mark as completed')
      setcomplete('Mark Incomplete')
    else
    setcomplete('Mark as completed')


  }
  return (
    <div className='SingleTask' id={select ? 'x' : null} >
      <p>Task:  {user.title}</p>

      <hr ></hr>

      {select && <FcApproval className='icon' style={{ height: '3rem', }} />}

      <div className='details'>

        <div className='mac' id={select ? 'bg' : null}
          onClick={(e) => handleClick()}>
          {complete}</div>

        <div onClick={() => onDelete(user.id)}
          style={{ cursor: "pointer" }}
        >Delete</div>
      </div>
    </div>
  )
}

export default SingleTask